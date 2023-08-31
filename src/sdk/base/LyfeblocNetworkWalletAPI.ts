import { BigNumber, BigNumberish } from 'ethers';
import {
  LyfeblocNetworkWallet,
  LyfeblocNetworkWallet__factory,
  LyfeblocNetworkWalletFactory,
  LyfeblocNetworkWalletFactory__factory,
} from '../contracts';
import { arrayify, hexConcat } from 'ethers/lib/utils';
import { BaseApiParams, BaseAccountAPI } from './BaseAccountAPI';

/**
 * constructor params, added no top of base params:
 * @param owner the signer object for the account owner
 * @param factoryAddress address of contract "factory" to deploy new contracts (not needed if account already deployed)
 * @param index nonce value used when creating multiple accounts for the same owner
 */
export interface LyfeblocNetworkWalletApiParams extends BaseApiParams {
  factoryAddress?: string;
  index?: number;
}

/**
 * An implementation of the BaseAccountAPI using the LyfeblocNetworkWallet contract.
 * - contract deployer gets "entrypoint", "owner" addresses and "index" nonce
 * - owner signs requests using normal "Ethereum Signed Message" (ether's signer.signMessage())
 * - nonce method is "nonce()"
 * - execute method is "execFromEntryPoint()"
 */
export class LyfeblocNetworkWalletAPI extends BaseAccountAPI {
  factoryAddress?: string;
  index: number;
  accountAddress?: string;

  /**
   * our account contract.
   * should support the "execFromEntryPoint" and "nonce" methods
   */
  accountContract?: LyfeblocNetworkWallet;

  factory?: LyfeblocNetworkWalletFactory;

  constructor(params: LyfeblocNetworkWalletApiParams) {
    super(params);
    this.factoryAddress = params.factoryAddress;
    this.index = params.index ?? 0;
  }

  async _getAccountContract(): Promise<LyfeblocNetworkWallet> {
    if (this.accountContract == null) {
      this.accountContract = LyfeblocNetworkWallet__factory.connect(await this.getAccountAddress(), this.provider);
    }
    return this.accountContract;
  }

  /**
   * return the value to put into the "initCode" field, if the account is not yet deployed.
   * this value holds the "factory" address, followed by this account's information
   */
  async getAccountInitCode(): Promise<string> {
    if (this.factory == null) {
      if (this.factoryAddress != null && this.factoryAddress !== '') {
        this.factory = LyfeblocNetworkWalletFactory__factory.connect(this.factoryAddress, this.provider);
      } else {
        throw new Error('no factory to get initCode');
      }
    }

    return hexConcat([
      this.factory.address,
      this.factory.interface.encodeFunctionData('createAccount', [
        this.entryPointAddress,
        this.services.walletService.walletAddress,
        this.index,
      ]),
    ]);
  }

  async getCounterFactualAddress(): Promise<string> {
    this.factory = LyfeblocNetworkWalletFactory__factory.connect(this.factoryAddress, this.provider);
    this.accountAddress = await this.factory.getAddress(
      this.entryPointAddress,
      this.services.walletService.walletAddress,
      this.index,
    );
    return this.accountAddress;
  }

  async getNonce(): Promise<BigNumber> {
    console.log('checking nonce...');
    if (await this.checkAccountPhantom()) {
      return BigNumber.from(0);
    }
    const accountContract = await this._getAccountContract();
    return await accountContract.getNonce();
  }

  /**
   * encode a method call from entryPoint to our contract
   * @param target
   * @param value
   * @param data
   */
  async encodeExecute(target: string, value: BigNumberish, data: string): Promise<string> {
    const accountContract = await this._getAccountContract();
    return accountContract.interface.encodeFunctionData('execute', [target, value, data]);
  }

  async signUserOpHash(userOpHash: string): Promise<string> {
    return await this.services.walletService.signMessage(arrayify(userOpHash));
  }

  async updateEntryPoint(newEntryPoint: string) {
    const accountContract = await this._getAccountContract();
    return accountContract.updateEntryPoint(newEntryPoint);
  }

  get epView() {
    return this.entryPointView;
  }

  async encodeBatch(targets: string[], values: BigNumberish[], datas: string[]): Promise<string> {
    const accountContract = await this._getAccountContract();
    return accountContract.interface.encodeFunctionData('executeBatch', [targets, values, datas]);
  }
}
