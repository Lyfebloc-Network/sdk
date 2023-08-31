/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../common';

export interface GuardedInterface extends utils.Interface {
  functions: {
    'isGuardian(address)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'isGuardian'): FunctionFragment;

  encodeFunctionData(functionFragment: 'isGuardian', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'isGuardian', data: BytesLike): Result;

  events: {
    'GuardianAdded(address)': EventFragment;
    'GuardianRemoved(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'GuardianAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GuardianRemoved'): EventFragment;
}

export interface GuardianAddedEventObject {
  newGuardian: string;
}
export type GuardianAddedEvent = TypedEvent<[string], GuardianAddedEventObject>;

export type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;

export interface GuardianRemovedEventObject {
  removedGuardian: string;
}
export type GuardianRemovedEvent = TypedEvent<[string], GuardianRemovedEventObject>;

export type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;

export interface Guarded extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GuardedInterface;

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
    isGuardian(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
  };

  isGuardian(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    isGuardian(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    'GuardianAdded(address)'(newGuardian?: null): GuardianAddedEventFilter;
    GuardianAdded(newGuardian?: null): GuardianAddedEventFilter;

    'GuardianRemoved(address)'(removedGuardian?: null): GuardianRemovedEventFilter;
    GuardianRemoved(removedGuardian?: null): GuardianRemovedEventFilter;
  };

  estimateGas: {
    isGuardian(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isGuardian(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
