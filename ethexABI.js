const ethexABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "takeFee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "buyOrderBalances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "makeFee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "cost",
				"type": "uint256"
			},
			{
				"name": "feeAmount",
				"type": "uint256"
			}
		],
		"name": "calculateFee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "sellOrderBalances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "totalCost",
				"type": "uint256"
			},
			{
				"name": "feeAmount",
				"type": "uint256"
			},
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "feeFromTotalCostForAccount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "totalCost",
				"type": "uint256"
			},
			{
				"name": "feeAmount",
				"type": "uint256"
			}
		],
		"name": "feeFromTotalCost",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "feeAccount",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "etxAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "cost",
				"type": "uint256"
			},
			{
				"name": "feeAmount",
				"type": "uint256"
			},
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "calculateFeeForAccount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastFreeBlock",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "etxAddress_",
				"type": "address"
			}
		],
		"name": "changeETXAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "fallback"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"name": "weiAmount",
				"type": "uint256"
			},
			{
				"name": "totalTokens",
				"type": "uint256"
			},
			{
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "takeBuyOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"name": "weiAmount",
				"type": "uint256"
			},
			{
				"name": "seller",
				"type": "address"
			}
		],
		"name": "takeSellOrder",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "weiAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "totalTransactionWei",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "seller",
				"type": "address"
			}
		],
		"name": "TakeSellOrder",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_lastFreeBlock",
				"type": "uint256"
			}
		],
		"name": "changeLastFreeBlock",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "weiAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "totalTransactionTokens",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "seller",
				"type": "address"
			}
		],
		"name": "TakeBuyOrder",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "makeFee_",
				"type": "uint256"
			}
		],
		"name": "changeMakeFee",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "weiAmount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "seller",
				"type": "address"
			}
		],
		"name": "MakeSellOrder",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"name": "weiAmount",
				"type": "uint256"
			}
		],
		"name": "cancelAllSellOrders",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "takeFee_",
				"type": "uint256"
			}
		],
		"name": "changeTakeFee",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "admin_",
				"type": "address"
			},
			{
				"name": "feeAccount_",
				"type": "address"
			},
			{
				"name": "makeFee_",
				"type": "uint256"
			},
			{
				"name": "takeFee_",
				"type": "uint256"
			},
			{
				"name": "etxAddress_",
				"type": "address"
			},
			{
				"name": "_lastFreeBlock",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "weiAmount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "CancelBuyOrder",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "weiAmount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "seller",
				"type": "address"
			}
		],
		"name": "CancelSellOrder",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "weiAmount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "MakeBuyOrder",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "makeBuyOrder",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"name": "weiAmount",
				"type": "uint256"
			}
		],
		"name": "cancelAllBuyOrders",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "admin_",
				"type": "address"
			}
		],
		"name": "changeAdmin",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "feeAccount_",
				"type": "address"
			}
		],
		"name": "changeFeeAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"name": "weiAmount",
				"type": "uint256"
			}
		],
		"name": "makeSellOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
module.exports = ethexABI;
