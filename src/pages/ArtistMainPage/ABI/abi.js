export default [
    {
       "inputs": [],
       "name": "endVoting",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "to",
             "type": "uint256"
          },
          {
             "internalType": "uint256",
             "name": "votes",
             "type": "uint256"
          }
       ],
       "name": "masterVote",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "contract Token",
             "name": "tokenCA",
             "type": "address"
          }
       ],
       "stateMutability": "nonpayable",
       "type": "constructor"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "owner",
             "type": "address"
          }
       ],
       "name": "OwnableInvalidOwner",
       "type": "error"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "account",
             "type": "address"
          }
       ],
       "name": "OwnableUnauthorizedAccount",
       "type": "error"
    },
    {
       "anonymous": false,
       "inputs": [
          {
             "indexed": true,
             "internalType": "address",
             "name": "previousOwner",
             "type": "address"
          },
          {
             "indexed": true,
             "internalType": "address",
             "name": "newOwner",
             "type": "address"
          }
       ],
       "name": "OwnershipTransferred",
       "type": "event"
    },
    {
       "inputs": [],
       "name": "renounceOwnership",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "startVoting",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "newOwner",
             "type": "address"
          }
       ],
       "name": "transferOwnership",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "to",
             "type": "uint256"
          },
          {
             "internalType": "uint256",
             "name": "votes",
             "type": "uint256"
          }
       ],
       "name": "vote",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "_currentStatus",
       "outputs": [
          {
             "internalType": "enum Voting.VotingStatus",
             "name": "",
             "type": "uint8"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          },
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "name": "_myVotedIdolsAndVotes",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          },
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "name": "_myVotersAndVotes",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          },
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "name": "_votedIdolsList",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          },
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "name": "_voterList",
       "outputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "n",
             "type": "uint256"
          }
       ],
       "name": "getTotalVotesUpTo",
       "outputs": [
          {
             "internalType": "uint256[]",
             "name": "",
             "type": "uint256[]"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "owner",
       "outputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "RAPPO",
       "outputs": [
          {
             "internalType": "contract Token",
             "name": "",
             "type": "address"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "num",
             "type": "uint256"
          }
       ],
       "name": "totalVotes",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    }
 ]