/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../../common';

export interface TestCounterInterface extends utils.Interface {
  functions: {
    'count()': FunctionFragment;
    'countFail()': FunctionFragment;
    'counters(address)': FunctionFragment;
    'gasWaster(uint256,string)': FunctionFragment;
    'justemit()': FunctionFragment;
    'offset()': FunctionFragment;
    'xxx(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'count' | 'countFail' | 'counters' | 'gasWaster' | 'justemit' | 'offset' | 'xxx',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'count', values?: undefined): string;
  encodeFunctionData(functionFragment: 'countFail', values?: undefined): string;
  encodeFunctionData(functionFragment: 'counters', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'gasWaster',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'justemit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'offset', values?: undefined): string;
  encodeFunctionData(functionFragment: 'xxx', values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: 'count', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'countFail', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'counters', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'gasWaster', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'justemit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'offset', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'xxx', data: BytesLike): Result;

  events: {
    'CalledFrom(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CalledFrom'): EventFragment;
}

export interface CalledFromEventObject {
  sender: string;
}
export type CalledFromEvent = TypedEvent<[string], CalledFromEventObject>;

export type CalledFromEventFilter = TypedEventFilter<CalledFromEvent>;

export interface TestCounter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestCounterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    count(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    countFail(overrides?: CallOverrides): Promise<[void]>;

    counters(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    gasWaster(
      repeat: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    justemit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    offset(overrides?: CallOverrides): Promise<[BigNumber]>;

    xxx(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  count(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  countFail(overrides?: CallOverrides): Promise<void>;

  counters(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  gasWaster(
    repeat: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  justemit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  offset(overrides?: CallOverrides): Promise<BigNumber>;

  xxx(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    count(overrides?: CallOverrides): Promise<void>;

    countFail(overrides?: CallOverrides): Promise<void>;

    counters(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    gasWaster(
      repeat: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    justemit(overrides?: CallOverrides): Promise<void>;

    offset(overrides?: CallOverrides): Promise<BigNumber>;

    xxx(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'CalledFrom(address)'(sender?: null): CalledFromEventFilter;
    CalledFrom(sender?: null): CalledFromEventFilter;
  };

  estimateGas: {
    count(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    countFail(overrides?: CallOverrides): Promise<BigNumber>;

    counters(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    gasWaster(
      repeat: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    justemit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    offset(overrides?: CallOverrides): Promise<BigNumber>;

    xxx(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    count(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    countFail(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    counters(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasWaster(
      repeat: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    justemit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    offset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    xxx(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
