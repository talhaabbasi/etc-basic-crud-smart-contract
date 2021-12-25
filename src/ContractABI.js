export const ContractABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_firstName",
        type: "string",
      },
      {
        name: "_lastName",
        type: "string",
      },
    ],
    name: "addPerson",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "peopleCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_index",
        type: "uint256",
      },
    ],
    name: "addFunding",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_index",
        type: "uint256",
      },
      {
        name: "_firstName",
        type: "string",
      },
    ],
    name: "updateFirstName",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "people",
    outputs: [
      {
        name: "_address",
        type: "address",
      },
      {
        name: "_firstName",
        type: "string",
      },
      {
        name: "_lastName",
        type: "string",
      },
      {
        name: "_donation",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_index",
        type: "uint256",
      },
    ],
    name: "removePerson",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
]
