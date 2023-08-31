/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type { Owned, OwnedInterface } from '../../../src/access/Owned';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'removedOwner',
        type: 'address',
      },
    ],
    name: 'OwnerRemoved',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'isOwner',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

const _bytecode =
  '0x608060405234801561001057600080fd5b506101f0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80632f54bf6e14610030575b600080fd5b61004a60048036038101906100459190610157565b610060565b604051610057919061019f565b60405180910390f35b60006100766784c34e023fb786f860c01b6100f1565b61008a670d806432bac21d3b60c01b6100f1565b61009e679da5a6f8cf654dc360c01b6100f1565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610124826100f9565b9050919050565b61013481610119565b811461013f57600080fd5b50565b6000813590506101518161012b565b92915050565b60006020828403121561016d5761016c6100f4565b5b600061017b84828501610142565b91505092915050565b60008115159050919050565b61019981610184565b82525050565b60006020820190506101b46000830184610190565b9291505056fea2646970667358221220a72c37ab034de35d10fef38be9cb668671002397c86859815599a189df0f1f5564736f6c63430008110033';

type OwnedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: OwnedConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Owned__factory extends ContractFactory {
  constructor(...args: OwnedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<Owned> {
    return super.deploy(overrides || {}) as Promise<Owned>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Owned {
    return super.attach(address) as Owned;
  }
  override connect(signer: Signer): Owned__factory {
    return super.connect(signer) as Owned__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnedInterface {
    return new utils.Interface(_abi) as OwnedInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Owned {
    return new Contract(address, _abi, signerOrProvider) as Owned;
  }
}
