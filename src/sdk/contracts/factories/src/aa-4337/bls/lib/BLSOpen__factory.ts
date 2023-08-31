/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../../../common';
import type { BLSOpen, BLSOpenInterface } from '../../../../../src/aa-4337/bls/lib/BLSOpen';

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'domain',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'message',
        type: 'bytes',
      },
    ],
    name: 'hashToPoint',
    outputs: [
      {
        internalType: 'uint256[2]',
        name: '',
        type: 'uint256[2]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[4]',
        name: 'blsKey',
        type: 'uint256[4]',
      },
    ],
    name: 'isZeroBLSKey',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[2]',
        name: 'signature',
        type: 'uint256[2]',
      },
      {
        internalType: 'uint256[4][]',
        name: 'pubkeys',
        type: 'uint256[4][]',
      },
      {
        internalType: 'uint256[2][]',
        name: 'messages',
        type: 'uint256[2][]',
      },
    ],
    name: 'verifyMultiple',
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
  {
    inputs: [
      {
        internalType: 'uint256[2]',
        name: 'signature',
        type: 'uint256[2]',
      },
      {
        internalType: 'uint256[4]',
        name: 'pubkey',
        type: 'uint256[4]',
      },
      {
        internalType: 'uint256[2]',
        name: 'message',
        type: 'uint256[2]',
      },
    ],
    name: 'verifySingle',
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
  '0x614252610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c8063914137631461005b578063a850a9091461008b578063c2ad5b98146100bb578063ebbdac91146100eb575b600080fd5b610075600480360381019061007091906139bf565b61011b565b6040516100829190613a65565b60405180910390f35b6100a560048036038101906100a09190613b6b565b6101a8565b6040516100b29190613c72565b60405180910390f35b6100d560048036038101906100d09190613c8d565b6101fe565b6040516100e29190613a65565b60405180910390f35b61010560048036038101906101009190613cba565b6102f5565b6040516101129190613a65565b60405180910390f35b600061013167a7527153006500cb60c01b6104ee565b61014567931d5180b799c0d560c01b6104ee565b6101596743db604679649f8360c01b6104ee565b6000806101678686866104f1565b9150915061017f674a6e7be9d3391a0d60c01b6104ee565b6101936767599c6c7275a66a60c01b6104ee565b80801561019d5750815b925050509392505050565b6101b0613591565b6101c467d7916bf107d113d760c01b6104ee565b6101d867c09037a62d86179960c01b6104ee565b6101ec67d858806f6bc76c3460c01b6104ee565b6101f68383610da7565b905092915050565b6000610214672b64b980eb5a6ea560c01b6104ee565b6102286748154cc51ec58cff60c01b6104ee565b61023c6708a97827b7310cc460c01b6104ee565b60006001905061025667314e721e6fbb9f0a60c01b6104ee565b61026a673fb8179617deb25560c01b6104ee565b60005b81801561027a5750600481105b156102c35761029367049e6b94b9b3561a60c01b6104ee565b60008482600481106102a8576102a7613d0e565b5b602002015114915080806102bb90613d6c565b91505061026d565b506102d8670ea95737af3b0d9760c01b6104ee565b6102ec67609c82ac84fa22b760c01b6104ee565b80915050919050565b600061030b677774487e957d1e5c60c01b6104ee565b61031f67b3442cc927a2a41060c01b6104ee565b61033367dcf65e1addf60eaa60c01b6104ee565b6000600167ffffffffffffffff8111156103505761034f613621565b5b60405190808252806020026020018201604052801561038957816020015b6103766135b3565b81526020019060019003908161036e5790505b5090506103a06729a9d324a0d1407b60c01b6104ee565b6103b467f3f017e3b386bccd60c01b6104ee565b6000600167ffffffffffffffff8111156103d1576103d0613621565b5b60405190808252806020026020018201604052801561040a57816020015b6103f7613591565b8152602001906001900390816103ef5790505b50905061042167bd05db37b2ad740760c01b6104ee565b848260008151811061043657610435613d0e565b5b60200260200101819052506104556738c01c3000d7899d60c01b6104ee565b838160008151811061046a57610469613d0e565b5b6020026020010181905250610489677b67ae027b39fc4a60c01b6104ee565b61049d67a5604658f1d0a75b60c01b6104ee565b6000806104ab8885856104f1565b915091506104c367960fb8827c2ff42060c01b6104ee565b6104d767d2be36fd23aec6aa60c01b6104ee565b8080156104e15750815b9450505050509392505050565b50565b60008061050867dd68e15a9f2eb39360c01b61110b565b61051c672db2c8d11ef1a02960c01b61110b565b6105306765a7e0e159cb8c1a60c01b61110b565b60008451905061054a67ed9057d97598bce860c01b61110b565b61055e67cad1507fd672135560c01b61110b565b610572678f6d336ab310a85860c01b61110b565b600081116105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac90613e37565b60405180910390fd5b6105c9672d3c98c4e6fb9aeb60c01b61110b565b6105dd674e26ceefc92ed50c60c01b61110b565b6105f167d8f2efd643b4d6ab60c01b61110b565b610605679896b0a386d3f99f60c01b61110b565b83518114610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063f90613ec9565b60405180910390fd5b61065c67f3bc9ad8719efc0260c01b61110b565b61067067f10ef8e2f5a90efc60c01b61110b565b610684671fbebd516605699d60c01b61110b565b600060066001836106959190613ee9565b61069f9190613f1d565b90506106b567cf9c01721cd327c160c01b61110b565b6106c96780962f202c274ed160c01b61110b565b60008167ffffffffffffffff8111156106e5576106e4613621565b5b6040519080825280602002602001820160405280156107135781602001602082028036833780820191505090505b50905061072a6714710377f82568fe60c01b61110b565b8760006002811061073e5761073d613d0e565b5b60200201518160008151811061075757610756613d0e565b5b60200260200101818152505061077767b1d9c0d552c0f3cd60c01b61110b565b8760016002811061078b5761078a613d0e565b5b6020020151816001815181106107a4576107a3613d0e565b5b6020026020010181815250506107c467779f6af9db8b38c860c01b61110b565b7f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c2816002815181106107f9576107f8613d0e565b5b60200260200101818152505061081967a52ec47314ab4ed960c01b61110b565b7f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed8160038151811061084e5761084d613d0e565b5b60200260200101818152505061086e6738feb9252385556360c01b61110b565b7f275dc4a288d1afb3cbb1ac09187524c7db36395df7be3b99e673b13a075a65ec816004815181106108a3576108a2613d0e565b5b6020026020010181815250506108c367e72debd56602a91e60c01b61110b565b7f1d9befcd05a5323e6da4d435f3b617cdb3af83285c2df711ef39c01571827f9d816005815181106108f8576108f7613d0e565b5b60200260200101818152505061091867e216d329f3c1dfc060c01b61110b565b61092c67d79e9f35ee9b8fad60c01b61110b565b60005b83811015610c3d5761094b677c9724cde2da029460c01b61110b565b86818151811061095e5761095d613d0e565b5b602002602001015160006002811061097957610978613d0e565b5b6020020151826006808461098d9190613f1d565b6109979190613ee9565b815181106109a8576109a7613d0e565b5b6020026020010181815250506109c86749442457989fcbd260c01b61110b565b8681815181106109db576109da613d0e565b5b60200260200101516001600281106109f6576109f5613d0e565b5b6020020151826007600684610a0b9190613f1d565b610a159190613ee9565b81518110610a2657610a25613d0e565b5b602002602001018181525050610a4667a8379257657559b260c01b61110b565b878181518110610a5957610a58613d0e565b5b6020026020010151600160048110610a7457610a73613d0e565b5b6020020151826008600684610a899190613f1d565b610a939190613ee9565b81518110610aa457610aa3613d0e565b5b602002602001018181525050610ac4671936da2a4e74be2460c01b61110b565b878181518110610ad757610ad6613d0e565b5b6020026020010151600060048110610af257610af1613d0e565b5b6020020151826009600684610b079190613f1d565b610b119190613ee9565b81518110610b2257610b21613d0e565b5b602002602001018181525050610b4267ab4147d521c8084060c01b61110b565b878181518110610b5557610b54613d0e565b5b6020026020010151600360048110610b7057610b6f613d0e565b5b602002015182600a600684610b859190613f1d565b610b8f9190613ee9565b81518110610ba057610b9f613d0e565b5b602002602001018181525050610bc06719f9a477a3ce387760c01b61110b565b878181518110610bd357610bd2613d0e565b5b6020026020010151600260048110610bee57610bed613d0e565b5b602002015182600b600684610c039190613f1d565b610c0d9190613ee9565b81518110610c1e57610c1d613d0e565b5b6020026020010181815250508080610c3590613d6c565b91505061092f565b50610c52674af0302cd07136fa60c01b61110b565b610c6667cece592a8d14e20960c01b61110b565b610c6e6135d5565b610c82672259d903ccc0c86c60c01b61110b565b610c966754d79654e329cf5360c01b61110b565b60005a9050610caf6734ec5417ed705ce360c01b61110b565b6020826020860260208601600885fa9550610cd467ef2535194a9cd29d60c01b61110b565b610ce86797c0774da46fa01360c01b61110b565b85610d3a57610d01677fdea71a77c533c860c01b61110b565b610d1567b361e1e35f46f32060c01b61110b565b610d296701b4488fb028d3c960c01b61110b565b600080965096505050505050610d9f565b610d4e67d259a6b6af615bf060c01b61110b565b610d626731b0e6167c38ee2560c01b61110b565b610d76670f14612acd0d1d0d60c01b61110b565b600082600060018110610d8c57610d8b613d0e565b5b6020020151141560019650965050505050505b935093915050565b610daf613591565b610dc3674284dc6b7860f49e60c01b61110b565b610dd7677f9e763dafb6b75260c01b61110b565b610deb67b23d0256aa0a318560c01b61110b565b6000610df7848461110e565b9050610e0d67ee709a2dc1f40f8960c01b61110b565b610e2167551a1a21ae97758e60c01b61110b565b6000610e4482600060028110610e3a57610e39613d0e565b5b60200201516113b9565b9050610e5a673e651611e28b3f3560c01b61110b565b610e6e676b39aebdf868732560c01b61110b565b6000610e9183600160028110610e8757610e86613d0e565b5b60200201516113b9565b9050610ea76732ddd8dba2002f4f60c01b61110b565b610ebb67f47889d1f33453b360c01b61110b565b610ec36135b3565b610ed767c8cff1d4655e7dde60c01b61110b565b82600060028110610eeb57610eea613d0e565b5b602002015181600060048110610f0457610f03613d0e565b5b602002018181525050610f2167b610a1623611823f60c01b61110b565b82600160028110610f3557610f34613d0e565b5b602002015181600160048110610f4e57610f4d613d0e565b5b602002018181525050610f6b676cd957c11193863a60c01b61110b565b81600060028110610f7f57610f7e613d0e565b5b602002015181600260048110610f9857610f97613d0e565b5b602002018181525050610fb567a8313f34cae321dc60c01b61110b565b81600160028110610fc957610fc8613d0e565b5b602002015181600360048110610fe257610fe1613d0e565b5b602002018181525050610fff67651df4310ecd1cd260c01b61110b565b6110136729c275f6f2f0d2ec60c01b61110b565b6000611029670f5598ff1ab01da960c01b61110b565b60408460808460066107d05a03fa9050806000810361104457fe5b5061105967891a72516efa8a9c60c01b61110b565b61106d6720f068c8818b847360c01b61110b565b611081672225c4506951a85f60c01b61110b565b806110c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b890613fab565b60405180910390fd5b6110d5675a5a723656d318b960c01b61110b565b6110e967f876fd99bf13ac1d60c01b61110b565b6110fd67e096a6ba7d7bec1260c01b61110b565b839550505050505092915050565b50565b611116613591565b61112a67a44b8e88a912e7c560c01b61110b565b61113e6766f28a0babcb9dbd60c01b61110b565b611152677e2b1c0e4e7eb47860c01b61110b565b600061115e84846120da565b9050611174673c3e5ec317dc672860c01b61110b565b61118867654a791b2c4d63af60c01b61110b565b600061119e67c6066ee2a471774b60c01b61110b565b6111b26707096ad9e304b0a960c01b61110b565b60006111c867715796da7a12501560c01b61110b565b6111dc67856bf33c1d90afb460c01b61110b565b60006111f2674437c9c874060d6360c01b61110b565b61120667891c5bf63b35e1ea60c01b61110b565b600061121c67fb7eee92933bfd5d60c01b61110b565b6018850177ffffffffffffffffffffffffffffffffffffffffffffffff815116935060308601905077ffffffffffffffffffffffffffffffffffffffffffffffff81511694507f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47857f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd477801000000000000000000000000000000000000000000000000870908925060488601905077ffffffffffffffffffffffffffffffffffffffffffffffff815116935060608601905077ffffffffffffffffffffffffffffffffffffffffffffffff81511694507f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47857f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47780100000000000000000000000000000000000000000000000087090891505061138367aa230753ef8fb26060c01b61110b565b6113976773b2256d58d0631b60c01b61110b565b6040518060400160405280838152602001828152509550505050505092915050565b6113c1613591565b6113d567aaefbb996bea624f60c01b61110b565b6113e96737bbdc368c55fead60c01b61110b565b6113fd673f3ae430e3e5588760c01b61110b565b61141167aab6b2e7d605a93060c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478210611473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146a9061403d565b60405180910390fd5b61148767d4dfc74f95ee829860c01b61110b565b61149b67d51be9a70110655d60c01b61110b565b6114af67ef42b73e2a49401e60c01b61110b565b60008290506114c8678abd2139ea6d152360c01b61110b565b6114dc6748ee08bf11991c9a60c01b61110b565b60006114e7826125c6565b9150506114fe67d77afe6a81b51e9e60c01b61110b565b61151267ddf3f00204226aab60c01b61110b565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47806115435761154261405d565b5b838409905061155c670340bb23394abfba60c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478061158b5761158a61405d565b5b6004820890506115a567249112c3d167eead60c01b61110b565b6115b9676b225b5cd4d344bd60c01b61110b565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47806115ea576115e961405d565b5b77b3c4d79d41a91759a9e4c7e359b6b89eaec68e62effffffd8509905061161b67011aa61621a12d8860c01b61110b565b61162f6764cbd215267d65e960c01b61110b565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47806116605761165f61405d565b5b838309905061167967a6b633a9b376ddb660c01b61110b565b6116828161264b565b9050611698673ad1f38b712782bd60c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47806116c7576116c661405d565b5b82830991506116e06772e2aafc574a61d660c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478061170f5761170e61405d565b5b81830991506117286736c14167cbcc236460c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47806117575761175661405d565b5b828609915061177067dfdc6573dbb9438a60c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478061179f5761179e61405d565b5b827f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476117cb919061408c565b7759e26bcea0d48bacd4f263f1acdb5c4f5763473177fffffe0894506117fb6759e46a0dc9913c1760c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478061182a5761182961405d565b5b858609915061184367ce86e3190058563260c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47806118725761187161405d565b5b858309915061188b670fd1b229ee79b9cb60c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47806118ba576118b961405d565b5b6003830891506118d467d8b3f3fcf3eeecd760c01b61110b565b6118e867959160ebe214987560c01b61110b565b60006118fe67c52767af526ee8a460c01b61110b565b611907836125c6565b809250819450505061192367d01bf6dfd1eca60560c01b61110b565b61193767cdf9ccd73e55fa5160c01b61110b565b8015611a385761195167812fa882415dfefa60c01b61110b565b61196567f18c65a707f9c51860c01b61110b565b61197967a521e60773f85b9760c01b61110b565b846119d95761199267ea7593b91ccd20e660c01b61110b565b6119a6671b06e993e2d921d060c01b61110b565b827f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476119d2919061408c565b92506119ee565b6119ed671c9fc680fde25b1d60c01b61110b565b5b611a0267b8188475c4b4053060c01b61110b565b611a1667365b56a200df8c0a60c01b61110b565b60405180604001604052808781526020018481525096505050505050506120d5565b611a4c675de7a7cebd171ac660c01b61110b565b611a6067e0f1546fe029fea160c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611a8f57611a8e61405d565b5b600187087f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611abe919061408c565b9550611ad4678c4edab01c34954460c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611b0357611b0261405d565b5b8687099250611b1c670b4ca4d8948b862e60c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611b4b57611b4a61405d565b5b8684099250611b6467d2e49b30494bf3fc60c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611b9357611b9261405d565b5b600384089250611bad679d7324224907d65c60c01b61110b565b611bb6836125c6565b8092508194505050611bd267935357d4dc96c86260c01b61110b565b611be667b5a16c6267969f1360c01b61110b565b8015611ce757611c00673d34b51846fabec260c01b61110b565b611c1467b2d2d6c9e244532160c01b61110b565b611c2867fcbac62bc892b17360c01b61110b565b84611c8857611c4167ef04b6f135a799e560c01b61110b565b611c5567a88dc3f0c47c331a60c01b61110b565b827f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611c81919061408c565b9250611c9d565b611c9c67f0b00e56555a2a7c60c01b61110b565b5b611cb167abf7c13981ac41bf60c01b61110b565b611cc56725712a9d991cb91a60c01b61110b565b60405180604001604052808781526020018481525096505050505050506120d5565b611cfb678c6a4504b2c3939f60c01b61110b565b611d0f67c50863c9211fe67060c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611d3e57611d3d61405d565b5b8485099550611d576722d9e3cabb1ffe3360c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611d8657611d8561405d565b5b8687099550611d9f674466bb4ccc02f9b560c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611dce57611dcd61405d565b5b8287099550611de767924b27f1b25d88c560c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611e1657611e1561405d565b5b8287099550611e2f67762ad69f50b23b6160c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611e5e57611e5d61405d565b5b600187089550611e78678da9daebf388746960c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611ea757611ea661405d565b5b8687099250611ec06778ef7bfd4031985e60c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611eef57611eee61405d565b5b8684099250611f0867ca536b89ac11d47660c01b61110b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4780611f3757611f3661405d565b5b600384089250611f5167cf883d77802af6f860c01b61110b565b611f5a836125c6565b8092508194505050611f766739d3979531e2da6960c01b61110b565b611f8a67ac8d4d33e043f29960c01b61110b565b611f9e67236c718c4fd4328c60c01b61110b565b80611fde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fd590614132565b60405180910390fd5b611ff267b88611029e0e71b360c01b61110b565b61200667501677a255b6eb1060c01b61110b565b61201a67c80f8b89ceae645860c01b61110b565b8461207a57612033679cb6ec283bb43d3660c01b61110b565b61204767c267ab99e56690a660c01b61110b565b827f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47612073919061408c565b925061208f565b61208e674fad165486e1406460c01b61110b565b5b6120a36770bf77439f16c32660c01b61110b565b6120b767176199807602bc4960c01b61110b565b60405180604001604052808781526020018481525096505050505050505b919050565b60606120f0675d2932b545390a8760c01b61110b565b612104670b1695cfc6554efb60c01b61110b565b61211867c37a18987872890060c01b61110b565b6000825190506121326765dd7fecc62e84ff60c01b61110b565b61214667e50652d185bbeaaf60c01b61110b565b6000600460408360206121599190613ee9565b6121639190613ee9565b61216d9190613ee9565b67ffffffffffffffff81111561218657612185613621565b5b6040519080825280601f01601f1916602001820160405280156121b85781602001600182028036833780820191505090505b5090506121cf67ed3f527d4120dc7160c01b61110b565b6121e367a765020850fba2c560c01b61110b565b6000606067ffffffffffffffff811115612200576121ff613621565b5b6040519080825280601f01601f1916602001820160405280156122325781602001600182028036833780820191505090505b509050612249679a9e005673b410fc60c01b61110b565b6060820160005b8481101561226e576020810187015181830152602081019050612250565b50838101905060008153600181019050606081536001810190506000815360018101905086815260208101905060208153506122b46781c01dd4d034325b60c01b61110b565b6122c867fb9ad85c166d526260c01b61110b565b60006002836040516122da91906141c3565b602060405180830381855afa1580156122f7573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061231a91906141ef565b9050612330673ef877dd08e3298b60c01b61110b565b6123446797b5bc777e1553bc60c01b61110b565b600061235a67ff05c7af907acdd860c01b61110b565b6042945061237267ae4aaf74d0f4198c60c01b61110b565b8484526123896739879064dbc4203060c01b61110b565b81602085015260016040850153876041850152602060416020018501536123ba67c95974dd58c1788960c01b61110b565b6002846040516123ca91906141c3565b602060405180830381855afa1580156123e7573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061240a91906141ef565b905061242067d786953bd82869f260c01b61110b565b80602084015261243a675d2726dc2fdcf2b360c01b61110b565b80821880602086015260026040860153886041860152602060416020018601535061246f6751a84937cb311ba360c01b61110b565b60028460405161247f91906141c3565b602060405180830381855afa15801561249c573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906124bf91906141ef565b90506124d567f18b9dffcc3c5f5760c01b61110b565b8060408401526124ef67a93922cbfebf3e9a60c01b61110b565b808218806020860152600360408601538860418601526020604160200186015350612524679f422cf879f487f560c01b61110b565b60028460405161253491906141c3565b602060405180830381855afa158015612551573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061257491906141ef565b905061258a67112fcda320fb89bb60c01b61110b565b8060608401526125a467ba12de81836400e760c01b61110b565b6125b86790d1ff423fce368860c01b61110b565b829550505050505092915050565b6000806125dd67266659caffe148c060c01b61110b565b6125f1678968fda7986fba3d60c01b61110b565b6125fa83612699565b915061261067eb094f04d4ba252e60c01b61110b565b827f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47806126405761263f61405d565b5b838409149050915091565b600061266167af41109ce93e16be60c01b61110b565b612675673c1038b679f965bc60c01b61110b565b61268967914a6f495b3ecff560c01b61110b565b61269282612e09565b9050919050565b60006126af67e13abc9b1f46df7160c01b61358b565b6126c3676440c183ad7c5f6060c01b61358b565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478083840991508083830981838209828283098385830984848309858484098684850997508684840987858409945087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a0998505050505050505050919050565b6000612e1f672ea8a0581848f6ed60c01b61358e565b612e3367f32c8be630b1973c60c01b61358e565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd478083840991508083830981838209828283098385830984848309858484098684850997508684840987858409945087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a0998505050505050505050919050565b50565b50565b6040518060400160405280600290602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b6040518060200160405280600190602082028036833780820191505090505090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61365982613610565b810181811067ffffffffffffffff8211171561367857613677613621565b5b80604052505050565b600061368b6135f7565b90506136978282613650565b919050565b600067ffffffffffffffff8211156136b7576136b6613621565b5b602082029050919050565b600080fd5b6000819050919050565b6136da816136c7565b81146136e557600080fd5b50565b6000813590506136f7816136d1565b92915050565b600061371061370b8461369c565b613681565b9050806020840283018581111561372a576137296136c2565b5b835b81811015613753578061373f88826136e8565b84526020840193505060208101905061372c565b5050509392505050565b600082601f8301126137725761377161360b565b5b600261377f8482856136fd565b91505092915050565b600067ffffffffffffffff8211156137a3576137a2613621565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156137cf576137ce613621565b5b602082029050919050565b60006137ed6137e8846137b4565b613681565b90508060208402830185811115613807576138066136c2565b5b835b81811015613830578061381c88826136e8565b845260208401935050602081019050613809565b5050509392505050565b600082601f83011261384f5761384e61360b565b5b600461385c8482856137da565b91505092915050565b600061387861387384613788565b613681565b9050808382526020820190506080840283018581111561389b5761389a6136c2565b5b835b818110156138c457806138b0888261383a565b84526020840193505060808101905061389d565b5050509392505050565b600082601f8301126138e3576138e261360b565b5b81356138f3848260208601613865565b91505092915050565b600067ffffffffffffffff82111561391757613916613621565b5b602082029050602081019050919050565b600061393b613936846138fc565b613681565b9050808382526020820190506040840283018581111561395e5761395d6136c2565b5b835b818110156139875780613973888261375d565b845260208401935050604081019050613960565b5050509392505050565b600082601f8301126139a6576139a561360b565b5b81356139b6848260208601613928565b91505092915050565b6000806000608084860312156139d8576139d7613601565b5b60006139e68682870161375d565b935050604084013567ffffffffffffffff811115613a0757613a06613606565b5b613a13868287016138ce565b925050606084013567ffffffffffffffff811115613a3457613a33613606565b5b613a4086828701613991565b9150509250925092565b60008115159050919050565b613a5f81613a4a565b82525050565b6000602082019050613a7a6000830184613a56565b92915050565b6000819050919050565b613a9381613a80565b8114613a9e57600080fd5b50565b600081359050613ab081613a8a565b92915050565b600080fd5b600067ffffffffffffffff821115613ad657613ad5613621565b5b613adf82613610565b9050602081019050919050565b82818337600083830152505050565b6000613b0e613b0984613abb565b613681565b905082815260208101848484011115613b2a57613b29613ab6565b5b613b35848285613aec565b509392505050565b600082601f830112613b5257613b5161360b565b5b8135613b62848260208601613afb565b91505092915050565b60008060408385031215613b8257613b81613601565b5b6000613b9085828601613aa1565b925050602083013567ffffffffffffffff811115613bb157613bb0613606565b5b613bbd85828601613b3d565b9150509250929050565b600060029050919050565b600081905092915050565b6000819050919050565b613bf0816136c7565b82525050565b6000613c028383613be7565b60208301905092915050565b6000602082019050919050565b613c2481613bc7565b613c2e8184613bd2565b9250613c3982613bdd565b8060005b83811015613c6a578151613c518782613bf6565b9650613c5c83613c0e565b925050600181019050613c3d565b505050505050565b6000604082019050613c876000830184613c1b565b92915050565b600060808284031215613ca357613ca2613601565b5b6000613cb18482850161383a565b91505092915050565b60008060006101008486031215613cd457613cd3613601565b5b6000613ce28682870161375d565b9350506040613cf38682870161383a565b92505060c0613d048682870161375d565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613d77826136c7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613da957613da8613d3d565b5b600182019050919050565b600082825260208201905092915050565b7f424c533a206e756d626572206f66207075626c6963206b6579206973207a657260008201527f6f00000000000000000000000000000000000000000000000000000000000000602082015250565b6000613e21602183613db4565b9150613e2c82613dc5565b604082019050919050565b60006020820190508181036000830152613e5081613e14565b9050919050565b7f424c533a206e756d626572206f66207075626c6963206b65797320616e64206d60008201527f65737361676573206d75737420626520657175616c0000000000000000000000602082015250565b6000613eb3603583613db4565b9150613ebe82613e57565b604082019050919050565b60006020820190508181036000830152613ee281613ea6565b9050919050565b6000613ef4826136c7565b9150613eff836136c7565b9250828201905080821115613f1757613f16613d3d565b5b92915050565b6000613f28826136c7565b9150613f33836136c7565b9250828202613f41816136c7565b91508282048414831517613f5857613f57613d3d565b5b5092915050565b7f424c533a20626e206164642063616c6c206661696c6564000000000000000000600082015250565b6000613f95601783613db4565b9150613fa082613f5f565b602082019050919050565b60006020820190508181036000830152613fc481613f88565b9050919050565b7f6d6170546f506f696e7446543a20696e76616c6964206669656c6420656c656d60008201527f656e740000000000000000000000000000000000000000000000000000000000602082015250565b6000614027602383613db4565b915061403282613fcb565b604082019050919050565b600060208201905081810360008301526140568161401a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614097826136c7565b91506140a2836136c7565b92508282039050818111156140ba576140b9613d3d565b5b92915050565b7f424c533a20626164206674206d617070696e6720696d706c656d656e7461746960008201527f6f6e000000000000000000000000000000000000000000000000000000000000602082015250565b600061411c602283613db4565b9150614127826140c0565b604082019050919050565b6000602082019050818103600083015261414b8161410f565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561418657808201518184015260208101905061416b565b60008484015250505050565b600061419d82614152565b6141a7818561415d565b93506141b7818560208601614168565b80840191505092915050565b60006141cf8284614192565b915081905092915050565b6000815190506141e981613a8a565b92915050565b60006020828403121561420557614204613601565b5b6000614213848285016141da565b9150509291505056fea2646970667358221220987a01caa30312334ec41ab319e48ef09a165df32f14262e009718efd9ad095764736f6c63430008110033';

type BLSOpenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: BLSOpenConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class BLSOpen__factory extends ContractFactory {
  constructor(...args: BLSOpenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BLSOpen> {
    return super.deploy(overrides || {}) as Promise<BLSOpen>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BLSOpen {
    return super.attach(address) as BLSOpen;
  }
  override connect(signer: Signer): BLSOpen__factory {
    return super.connect(signer) as BLSOpen__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSOpenInterface {
    return new utils.Interface(_abi) as BLSOpenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BLSOpen {
    return new Contract(address, _abi, signerOrProvider) as BLSOpen;
  }
}
