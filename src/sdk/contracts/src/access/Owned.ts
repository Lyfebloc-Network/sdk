/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from '../../common';

export interface OwnedInterface extends utils.Interface {
  functions: {
    'isOwner(address)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'isOwner'): FunctionFragment;

  encodeFunctionData(functionFragment: 'isOwner', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'isOwner', data: BytesLike): Result;

  events: {
    'OwnerAdded(address)': EventFragment;
    'OwnerRemoved(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnerAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerRemoved'): EventFragment;
}

export interface OwnerAddedEventObject {
  newOwner: string;
}
export type OwnerAddedEvent = TypedEvent<[string], OwnerAddedEventObject>;

export type OwnerAddedEventFilter = TypedEventFilter<OwnerAddedEvent>;

export interface OwnerRemovedEventObject {
  removedOwner: string;
}
export type OwnerRemovedEvent = TypedEvent<[string], OwnerRemovedEventObject>;

export type OwnerRemovedEventFilter = TypedEventFilter<OwnerRemovedEvent>;

export interface Owned extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OwnedInterface;

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
    isOwner(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
  };

  isOwner(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    isOwner(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    'OwnerAdded(address)'(newOwner?: null): OwnerAddedEventFilter;
    OwnerAdded(newOwner?: null): OwnerAddedEventFilter;

    'OwnerRemoved(address)'(removedOwner?: null): OwnerRemovedEventFilter;
    OwnerRemoved(removedOwner?: null): OwnerRemovedEventFilter;
  };

  estimateGas: {
    isOwner(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isOwner(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
