export const TICKET_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_eventCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "_eventImg",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_maxTicket",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_publicTicketPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_vipTicketPrice",
        type: "uint256",
      },
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "deleteEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEvents",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "eventName",
            type: "string",
          },
          {
            internalType: "string",
            name: "ticketImg",
            type: "string",
          },
        ],
        internalType: "struct EventManager.Event[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserEvent",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "eventName",
            type: "string",
          },
          {
            internalType: "string",
            name: "ticketImg",
            type: "string",
          },
        ],
        internalType: "struct EventManager.Event[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
