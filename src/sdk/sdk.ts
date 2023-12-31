import { BehaviorSubject } from 'rxjs';
import { State, StateService } from './state';
import {
  EthereumProvider,
  isWalletConnectProvider,
  isWalletProvider,
  WalletConnect2WalletProvider,
  WalletProviderLike,
} from './wallet';
import { SdkOptions } from './interfaces';
import { Network } from './network';
import { BatchUserOpsRequest, Exception, getGasFee, onRampApiKey, openUrl, UserOpsRequest } from './common';
import { BigNumber, ethers, providers } from 'ethers';
import { getNetworkConfig, Networks, onRamperAllNetworks } from './network/constants';
import { UserOperationStruct } from './contracts/src/aa-4337/core/BaseAccount';
import { LyfeblocNetworkWalletAPI, HttpRpcClient, VerifyingPaymasterAPI } from './base';
import { TransactionDetailsForUserOp, TransactionGasInfoForUserOp } from './base/TransactionDetailsForUserOp';
import {
  CreateSessionDto,
  OnRamperDto,
  GetAccountBalancesDto,
  GetAdvanceRoutesLiFiDto,
  GetExchangeCrossChainQuoteDto,
  GetExchangeOffersDto,
  GetNftListDto,
  GetStepTransactionsLiFiDto,
  GetTransactionDto,
  GetTransactionsDto,
  SignMessageDto,
  validateDto,
} from './dto';
import {
  AccountBalances,
  AdvanceRoutesLiFi,
  BridgingQuotes,
  ExchangeOffer,
  NftList,
  StepTransactions,
  Transaction,
  Transactions,
  Session,
} from './';
import { ERC20__factory } from './contracts';

/**
 * Prime-Sdk
 *
 * @category Prime-Sdk
 */
export class PrimeSdk {
  private lyfeblocnetworkWallet: LyfeblocNetworkWalletAPI;
  private bundler: HttpRpcClient;
  private chainId: number;

  private userOpsBatch: BatchUserOpsRequest = { to: [], data: [], value: [] };

  constructor(walletProvider: WalletProviderLike, optionsLike: SdkOptions) {
    let walletConnectProvider;
    if (isWalletConnectProvider(walletProvider)) {
      walletConnectProvider = new WalletConnect2WalletProvider(walletProvider as EthereumProvider);
    } else if (!isWalletProvider(walletProvider)) {
      throw new Exception('Invalid wallet provider');
    }

    const {
      chainId, //
      rpcProviderUrl,
    } = optionsLike;

    this.chainId = chainId;

    if (!optionsLike.bundlerRpcUrl) {
      const networkConfig = getNetworkConfig(chainId);
      optionsLike.bundlerRpcUrl = networkConfig.bundler;
      if (optionsLike.bundlerRpcUrl == '') throw new Exception('No bundler Rpc provided');
      optionsLike.graphqlEndpoint = networkConfig.graphqlEndpoint;
    }

    let provider;

    if (rpcProviderUrl) {
      provider = new providers.JsonRpcProvider(rpcProviderUrl);
    } else provider = new providers.JsonRpcProvider(optionsLike.bundlerRpcUrl);

    let paymasterAPI = null;
    if (optionsLike.paymasterApi && optionsLike.paymasterApi.url) {
      paymasterAPI = new VerifyingPaymasterAPI(
        optionsLike.paymasterApi.url,
        Networks[chainId].contracts.entryPoint,
        optionsLike.paymasterApi.context ?? {},
      );
    }

    this.lyfeblocnetworkWallet = new LyfeblocNetworkWalletAPI({
      provider,
      walletProvider: walletConnectProvider ?? walletProvider,
      optionsLike,
      entryPointAddress: Networks[chainId].contracts.entryPoint,
      factoryAddress: Networks[chainId].contracts.walletFactory,
      paymasterAPI,
    });

    this.bundler = new HttpRpcClient(
      optionsLike.bundlerRpcUrl,
      Networks[chainId].contracts.entryPoint,
      Networks[chainId].chainId,
    );
  }

  // exposes
  get state(): StateService {
    return this.lyfeblocnetworkWallet.services.stateService;
  }

  get state$(): BehaviorSubject<State> {
    return this.lyfeblocnetworkWallet.services.stateService.state$;
  }

  get supportedNetworks(): Network[] {
    return this.lyfeblocnetworkWallet.services.networkService.supportedNetworks;
  }

  /**
   * destroys
   */
  destroy(): void {
    this.lyfeblocnetworkWallet.context.destroy();
  }

  // wallet

  /**
   * signs message
   * @param dto
   * @return Promise<string>
   */
  async signMessage(dto: SignMessageDto): Promise<string> {
    const { message } = await validateDto(dto, SignMessageDto);

    await this.lyfeblocnetworkWallet.require({
      network: false,
    });

    return this.lyfeblocnetworkWallet.services.walletService.signMessage(message);
  }

  // session

  /**
   * creates session
   * @param dto
   * @return Promise<Session>
   */
  async createSession(dto: CreateSessionDto = {}): Promise<Session> {
    const { ttl, fcmToken } = await validateDto(dto, CreateSessionDto);

    await this.lyfeblocnetworkWallet.require();

    return this.lyfeblocnetworkWallet.services.sessionService.createSession(ttl, fcmToken);
  }

  async getCounterFactualAddress(): Promise<string> {
    return this.lyfeblocnetworkWallet.getCounterFactualAddress();
  }

  async estimate(gasDetails?: TransactionGasInfoForUserOp) {
    if (this.userOpsBatch.to.length < 1) {
      throw new Error('cannot sign empty transaction batch');
    }

    const tx: TransactionDetailsForUserOp = {
      target: this.userOpsBatch.to,
      values: this.userOpsBatch.value,
      data: this.userOpsBatch.data,
      ...gasDetails,
    };

    const partialtx = await this.lyfeblocnetworkWallet.createUnsignedUserOp({
      ...tx,
      maxFeePerGas: 1,
      maxPriorityFeePerGas: 1,
    });

    const bundlerGasEstimate = await this.bundler.getVerificationGasInfo(partialtx);

    // if estimation has gas prices use them, otherwise fetch them in a separate call
    if (bundlerGasEstimate.maxFeePerGas && bundlerGasEstimate.maxPriorityFeePerGas) {
      partialtx.maxFeePerGas = bundlerGasEstimate.maxFeePerGas;
      partialtx.maxPriorityFeePerGas = bundlerGasEstimate.maxPriorityFeePerGas;
    } else {
      const gas = await this.getGasFee();
      partialtx.maxFeePerGas = gas.maxFeePerGas;
      partialtx.maxPriorityFeePerGas = gas.maxPriorityFeePerGas;
    }

    if (bundlerGasEstimate.preVerificationGas) {
      partialtx.preVerificationGas = BigNumber.from(bundlerGasEstimate.preVerificationGas);
      partialtx.verificationGasLimit = BigNumber.from(
        bundlerGasEstimate.verificationGasLimit ?? bundlerGasEstimate.verificationGas,
      );
      partialtx.callGasLimit = BigNumber.from(bundlerGasEstimate.callGasLimit);
    }

    return partialtx;
  }

  async getGasFee() {
    const version = await this.bundler.getBundlerVersion();
    if (version.includes('skandha')) return this.bundler.getSkandhaGasPrice();
    return getGasFee(this.lyfeblocnetworkWallet.provider as providers.JsonRpcProvider);
  }

  async send(userOp: UserOperationStruct) {
    const signedUserOp = await this.lyfeblocnetworkWallet.signUserOp(userOp);
    return this.bundler.sendUserOpToBundler(signedUserOp);
  }

  async getNativeBalance() {
    if (!this.lyfeblocnetworkWallet.accountAddress) {
      await this.getCounterFactualAddress();
    }
    const balance = await this.lyfeblocnetworkWallet.provider.getBalance(this.lyfeblocnetworkWallet.accountAddress);
    return ethers.utils.formatEther(balance);
  }

  async getTokenBalance(tokenAddress: string) {
    if (!this.lyfeblocnetworkWallet.accountAddress) {
      await this.getCounterFactualAddress();
    }
    const token = ethers.utils.getAddress(tokenAddress);
    const erc20Contract = ERC20__factory.connect(
      token,
      this.lyfeblocnetworkWallet.services.walletService.getWalletProvider(),
    );
    const dec = await erc20Contract.functions.decimals();
    const balance = await erc20Contract.functions.balanceOf(this.lyfeblocnetworkWallet.accountAddress);
    return ethers.utils.formatUnits(balance[0], dec);
  }

  async getUserOpReceipt(userOpHash: string) {
    return this.bundler.getUserOpsReceipt(userOpHash);
  }

  async getUserOpHash(userOp: UserOperationStruct) {
    return this.lyfeblocnetworkWallet.getUserOpHash(userOp);
  }

  async addUserOpsToBatch(tx: UserOpsRequest): Promise<BatchUserOpsRequest> {
    if (!tx.data && !tx.value) throw new Error('Data and Value both cannot be empty');
    this.userOpsBatch.to.push(tx.to);
    this.userOpsBatch.value.push(tx.value ?? BigNumber.from(0));
    this.userOpsBatch.data.push(tx.data ?? '0x');
    return this.userOpsBatch;
  }

  async clearUserOpsFromBatch(): Promise<void> {
    this.userOpsBatch.to = [];
    this.userOpsBatch.data = [];
    this.userOpsBatch.value = [];
  }

  async getAccountContract() {
    return this.lyfeblocnetworkWallet._getAccountContract();
  }

  async totalGasEstimated(userOp: UserOperationStruct): Promise<BigNumber> {
    const callGasLimit = BigNumber.from(await userOp.callGasLimit);
    const verificationGasLimit = BigNumber.from(await userOp.verificationGasLimit);
    const preVerificationGas = BigNumber.from(await userOp.preVerificationGas);
    return callGasLimit.add(verificationGasLimit).add(preVerificationGas);
  }

  async getFiatOnRamp(params: OnRamperDto = {}) {
    if (!params.onlyCryptoNetworks) params.onlyCryptoNetworks = onRamperAllNetworks.join(',');
    else {
      const networks = params.onlyCryptoNetworks.split(',');
      for (const network in networks) {
        if (!onRamperAllNetworks.includes(network))
          throw new Error('Included Networks which are not supported. Please Check');
      }
    }

    const url =
      `https://buy.onramper.com/?networkWallets=ETHEREUM:${await this.getCounterFactualAddress()}` +
      `&apiKey=${onRampApiKey}` +
      `&onlyCryptoNetworks=${params.onlyCryptoNetworks}` +
      `${params.defaultCrypto ? `&defaultCrypto=${params.defaultCrypto}` : ``}` +
      `${params.excludeCryptos ? `&excludeCryptos=${params.excludeCryptos}` : ``}` +
      `${params.onlyCryptos ? `&onlyCryptos=${params.onlyCryptos}` : ``}` +
      `${params.excludeCryptoNetworks ? `&excludeCryptoNetworks=${params.excludeCryptoNetworks}` : ``}` +
      `${params.defaultAmount ? `&defaultCrypto=${params.defaultAmount}` : ``}` +
      `${params.defaultFiat ? `&defaultFiat=${params.defaultFiat}` : ``}` +
      `${params.isAmountEditable ? `&isAmountEditable=${params.isAmountEditable}` : ``}` +
      `${params.onlyFiats ? `&onlyFiats=${params.onlyFiats}` : ``}` +
      `${params.excludeFiats ? `&excludeFiats=${params.excludeFiats}` : ``}` +
      `&themeName=${params.themeName ?? 'dark'}`;

    if (typeof window === 'undefined') {
      openUrl(url);
    } else {
      window.open(url);
    }

    return url;
  }

  /**
   * gets account balances
   * @param dto
   * @return Promise<AccountBalances>
   */
  async getAccountBalances(dto: GetAccountBalancesDto = {}): Promise<AccountBalances> {
    const { account, tokens, chainId, provider } = await validateDto(dto, GetAccountBalancesDto, {
      addressKeys: ['account', 'tokens'],
    });

    await this.lyfeblocnetworkWallet.require({
      wallet: !account,
    });

    const ChainId = chainId ? chainId : this.lyfeblocnetworkWallet.services.walletService.chainId;

    return this.lyfeblocnetworkWallet.services.dataService.getAccountBalances(
      this.lyfeblocnetworkWallet.prepareAccountAddress(account),
      tokens,
      ChainId,
      provider,
    );
  }

  /**
   * gets transaction
   * @param dto
   * @return Promise<Transaction>
   */
  async getTransaction(dto: GetTransactionDto): Promise<Transaction> {
    const { hash } = await validateDto(dto, GetTransactionDto);

    await this.lyfeblocnetworkWallet.require({
      wallet: false,
    });

    return this.lyfeblocnetworkWallet.services.dataService.getTransaction(hash);
  }

  /**
   * gets transactions
   * @param dto
   * @return Promise<Transactions>
   */
  async getTransactions(dto: GetTransactionsDto): Promise<Transactions> {
    const { account, chainId } = await validateDto(dto, GetTransactionsDto, {
      addressKeys: ['account'],
    });

    this.lyfeblocnetworkWallet.services.accountService.joinContractAccount(account);

    await this.lyfeblocnetworkWallet.require({
      wallet: !account,
      contractAccount: true,
    });

    const ChainId = chainId ? chainId : this.lyfeblocnetworkWallet.services.walletService.chainId;

    return this.lyfeblocnetworkWallet.services.dataService.getTransactions(
      this.lyfeblocnetworkWallet.prepareAccountAddress(account),
      ChainId,
    );
  }

  /**
   * gets NFT list belonging to account
   * @param dto
   * @return Promise<NftList>
   */
  async getNftList(dto: GetNftListDto): Promise<NftList> {
    const { account, chainId } = await validateDto(dto, GetNftListDto, {
      addressKeys: ['account'],
    });

    await this.lyfeblocnetworkWallet.require({
      wallet: !account,
    });

    const ChainId = chainId ? chainId : this.lyfeblocnetworkWallet.services.walletService.chainId;

    return this.lyfeblocnetworkWallet.services.dataService.getNftList(
      this.lyfeblocnetworkWallet.prepareAccountAddress(account),
      ChainId,
    );
  }

  /**
   * gets exchange offers
   * @param dto
   * @return Promise<ExchangeOffer[]>
   */
  async getExchangeOffers(dto: GetExchangeOffersDto): Promise<ExchangeOffer[]> {
    const { fromTokenAddress, toTokenAddress, fromAmount, fromChainId, showZeroUsd } = await validateDto(
      dto,
      GetExchangeOffersDto,
      {
        addressKeys: ['fromTokenAddress', 'toTokenAddress'],
      },
    );

    let { toAddress, fromAddress } = dto;

    if (!fromAddress) fromAddress = this.lyfeblocnetworkWallet.services.walletService.walletAddress;

    if (!toAddress) toAddress = fromAddress;

    this.lyfeblocnetworkWallet.services.accountService.joinContractAccount(fromAddress);

    await this.lyfeblocnetworkWallet.require({
      session: true,
      contractAccount: true,
    });

    let { chainId } = this.lyfeblocnetworkWallet.services.walletService;
    chainId = fromChainId ? fromChainId : chainId;

    return this.lyfeblocnetworkWallet.services.dataService.getExchangeOffers(
      fromTokenAddress,
      toTokenAddress,
      BigNumber.from(fromAmount),
      chainId,
      toAddress,
      fromAddress,
      showZeroUsd,
    );
  }

  async getAdvanceRoutesLiFi(dto: GetAdvanceRoutesLiFiDto): Promise<AdvanceRoutesLiFi> {
    const { fromChainId, toChainId, fromTokenAddress, toTokenAddress, fromAmount, allowSwitchChain, showZeroUsd } =
      await validateDto(dto, GetAdvanceRoutesLiFiDto, {
        addressKeys: ['fromTokenAddress', 'toTokenAddress'],
      });

    let { toAddress, fromAddress } = dto;

    if (!fromAddress) fromAddress = await this.getCounterFactualAddress();
    if (!toAddress) toAddress = fromAddress;

    let { chainId } = this.lyfeblocnetworkWallet.services.walletService;
    chainId = fromChainId ? fromChainId : chainId;

    const data = await this.lyfeblocnetworkWallet.services.dataService.getAdvanceRoutesLiFi(
      fromTokenAddress,
      toTokenAddress,
      chainId,
      toChainId,
      BigNumber.from(fromAmount),
      toAddress,
      allowSwitchChain,
      fromAddress,
      showZeroUsd,
    );

    return data;
  }

  async getStepTransaction(dto: GetStepTransactionsLiFiDto): Promise<StepTransactions> {
    const accountAddress = this.lyfeblocnetworkWallet.services.walletService.walletAddress;

    return this.lyfeblocnetworkWallet.services.dataService.getStepTransaction(dto.route, accountAddress);
  }

  /**
   * gets multi chain quotes
   * @param dto
   * @return Promise<MutliChainQuotes>
   */
  async getCrossChainQuotes(dto: GetExchangeCrossChainQuoteDto): Promise<BridgingQuotes> {
    const {
      fromChainId,
      toChainId,
      fromTokenAddress,
      toTokenAddress,
      fromAmount,
      serviceProvider,
      lifiBridges,
      toAddress,
      showZeroUsd,
    } = await validateDto(dto, GetExchangeCrossChainQuoteDto, {
      addressKeys: ['fromTokenAddress', 'toTokenAddress'],
    });

    let { fromAddress } = dto;

    await this.lyfeblocnetworkWallet.require({
      session: true,
    });

    if (!fromAddress) fromAddress = this.lyfeblocnetworkWallet.services.walletService.walletAddress;

    let { chainId } = this.lyfeblocnetworkWallet.services.walletService;

    chainId = fromChainId ? fromChainId : chainId;

    return this.lyfeblocnetworkWallet.services.dataService.getCrossChainQuotes(
      fromTokenAddress,
      toTokenAddress,
      chainId,
      toChainId,
      BigNumber.from(fromAmount),
      serviceProvider,
      lifiBridges,
      toAddress,
      fromAddress,
      showZeroUsd,
    );
  }
}
