/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { IOracle, IOracleInterface } from '../../../../src/aa-4337/samples/IOracle';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'ethOutput',
        type: 'uint256',
      },
    ],
    name: 'getTokenValueOfEth',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenInput',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export class IOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleInterface {
    return new utils.Interface(_abi) as IOracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IOracle {
    return new Contract(address, _abi, signerOrProvider) as IOracle;
  }
}
