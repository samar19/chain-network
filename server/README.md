# browser

to surf http://localhost:3000/api/v1/chainlist

* or use curl

```bash
curl http://localhost:3000/api/v1/chainlist  | jq
```

result 

```bash
[
  {
    "id": 0,
    "meta": {
      "id": 42161,
      "name": "Arbitrum One",
      "network": "arbitrum",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://arb-mainnet.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://arb-mainnet.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://arbitrum-mainnet.infura.io/v3"
          ],
          "webSocket": [
            "wss://arbitrum-mainnet.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://arb1.arbitrum.io/rpc"
          ]
        },
        "public": {
          "http": [
            "https://arb1.arbitrum.io/rpc"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Arbiscan",
          "url": "https://arbiscan.io"
        },
        "default": {
          "name": "Arbiscan",
          "url": "https://arbiscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 7654707
        }
      }
    }
  },
  {
    "id": 1,
    "meta": {
      "id": 421613,
      "name": "Arbitrum Goerli",
      "network": "arbitrum-goerli",
      "nativeCurrency": {
        "name": "Arbitrum Goerli Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://arb-goerli.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://arb-goerli.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://arbitrum-goerli.infura.io/v3"
          ],
          "webSocket": [
            "wss://arbitrum-goerli.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://goerli-rollup.arbitrum.io/rpc"
          ]
        },
        "public": {
          "http": [
            "https://goerli-rollup.arbitrum.io/rpc"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Arbiscan",
          "url": "https://goerli.arbiscan.io"
        },
        "default": {
          "name": "Arbiscan",
          "url": "https://goerli.arbiscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 88114
        }
      },
      "testnet": true
    }
  },
  {
    "id": 2,
    "meta": {
      "id": 42170,
      "name": "Arbitrum Nova",
      "network": "arbitrum-nova",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "blast": {
          "http": [
            "https://arbitrum-nova.public.blastapi.io"
          ],
          "webSocket": [
            "wss://arbitrum-nova.public.blastapi.io"
          ]
        },
        "default": {
          "http": [
            "https://nova.arbitrum.io/rpc"
          ]
        },
        "public": {
          "http": [
            "https://nova.arbitrum.io/rpc"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Arbiscan",
          "url": "https://nova.arbiscan.io"
        },
        "blockScout": {
          "name": "BlockScout",
          "url": "https://nova-explorer.arbitrum.io/"
        },
        "default": {
          "name": "Arbiscan",
          "url": "https://nova.arbiscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 1746963
        }
      }
    }
  },
  {
    "id": 3,
    "meta": {
      "id": 421614,
      "name": "Arbitrum Sepolia",
      "network": "arbitrum-sepolia",
      "nativeCurrency": {
        "name": "Arbitrum Sepolia Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sepolia-rollup.arbitrum.io/rpc"
          ]
        },
        "public": {
          "http": [
            "https://sepolia-rollup.arbitrum.io/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Blockscout",
          "url": "https://sepolia-explorer.arbitrum.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 81930
        }
      },
      "testnet": true
    }
  },
  {
    "id": 4,
    "meta": {
      "id": 592,
      "name": "Astar",
      "network": "astar-mainnet",
      "nativeCurrency": {
        "name": "Astar",
        "symbol": "ASTR",
        "decimals": 18
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://astar.api.onfinality.io/public"
          ]
        },
        "default": {
          "http": [
            "https://astar.api.onfinality.io/public"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Astar Subscan",
          "url": "https://astar.subscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 761794
        }
      },
      "testnet": false
    }
  },
  {
    "id": 5,
    "meta": {
      "id": 1261120,
      "name": "Astar zkEVM Testnet zKatana",
      "network": "zKatana",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.zkatana.gelato.digital",
            "https://rpc.startale.com/zkatana"
          ]
        },
        "public": {
          "http": [
            "https://rpc.zkatana.gelato.digital",
            "https://rpc.startale.com/zkatana"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "Blockscout zKatana chain explorer",
          "url": "https://zkatana.blockscout.com"
        },
        "default": {
          "name": "zKatana Explorer",
          "url": "https://zkatana.explorer.startale.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 31317
        }
      },
      "testnet": true
    }
  },
  {
    "id": 6,
    "meta": {
      "id": 1313161554,
      "name": "Aurora",
      "network": "aurora",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Ether",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "infura": {
          "http": [
            "https://aurora-mainnet.infura.io/v3"
          ]
        },
        "default": {
          "http": [
            "https://mainnet.aurora.dev"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.aurora.dev"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Aurorascan",
          "url": "https://aurorascan.dev"
        },
        "default": {
          "name": "Aurorascan",
          "url": "https://aurorascan.dev"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 62907816
        }
      }
    }
  },
  {
    "id": 7,
    "meta": {
      "id": 1313161555,
      "name": "Aurora Testnet",
      "network": "aurora-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Ether",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "infura": {
          "http": [
            "https://aurora-testnet.infura.io/v3"
          ]
        },
        "default": {
          "http": [
            "https://testnet.aurora.dev"
          ]
        },
        "public": {
          "http": [
            "https://testnet.aurora.dev"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Aurorascan",
          "url": "https://testnet.aurorascan.dev"
        },
        "default": {
          "name": "Aurorascan",
          "url": "https://testnet.aurorascan.dev"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 8,
    "meta": {
      "id": 43114,
      "name": "Avalanche",
      "network": "avalanche",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Avalanche",
        "symbol": "AVAX"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.avax.network/ext/bc/C/rpc"
          ]
        },
        "public": {
          "http": [
            "https://api.avax.network/ext/bc/C/rpc"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "SnowTrace",
          "url": "https://snowtrace.io"
        },
        "default": {
          "name": "SnowTrace",
          "url": "https://snowtrace.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 11907934
        }
      }
    }
  },
  {
    "id": 9,
    "meta": {
      "id": 43113,
      "name": "Avalanche Fuji",
      "network": "avalanche-fuji",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Avalanche Fuji",
        "symbol": "AVAX"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.avax-test.network/ext/bc/C/rpc"
          ]
        },
        "public": {
          "http": [
            "https://api.avax-test.network/ext/bc/C/rpc"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "SnowTrace",
          "url": "https://testnet.snowtrace.io"
        },
        "default": {
          "name": "SnowTrace",
          "url": "https://testnet.snowtrace.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 7096959
        }
      },
      "testnet": true
    }
  },
  {
    "id": 10,
    "meta": {
      "id": 8453,
      "network": "base",
      "name": "Base",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://base-mainnet.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://base-mainnet.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://base-mainnet.infura.io/v3"
          ],
          "webSocket": [
            "wss://base-mainnet.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://mainnet.base.org"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.base.org"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "Basescout",
          "url": "https://base.blockscout.com"
        },
        "default": {
          "name": "Basescan",
          "url": "https://basescan.org"
        },
        "etherscan": {
          "name": "Basescan",
          "url": "https://basescan.org"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 5022
        }
      },
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 11,
    "meta": {
      "id": 84531,
      "network": "base-goerli",
      "name": "Base Goerli",
      "nativeCurrency": {
        "name": "Goerli Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://base-goerli.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://base-goerli.g.alchemy.com/v2"
          ]
        },
        "default": {
          "http": [
            "https://goerli.base.org"
          ]
        },
        "public": {
          "http": [
            "https://goerli.base.org"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Basescan",
          "url": "https://goerli.basescan.org"
        },
        "default": {
          "name": "Basescan",
          "url": "https://goerli.basescan.org"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 1376988
        }
      },
      "testnet": true,
      "sourceId": 5,
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 12,
    "meta": {
      "id": 84532,
      "network": "base-sepolia",
      "name": "Base Sepolia",
      "nativeCurrency": {
        "name": "Sepolia Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sepolia.base.org"
          ]
        },
        "public": {
          "http": [
            "https://sepolia.base.org"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "Blockscout",
          "url": "https://base-sepolia.blockscout.com"
        },
        "default": {
          "name": "Blockscout",
          "url": "https://base-sepolia.blockscout.com"
        }
      },
      "testnet": true,
      "sourceId": 11155111,
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 13,
    "meta": {
      "id": 641230,
      "name": "Bear Network Chain Mainnet",
      "network": "BearNetworkChainMainnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "BearNetworkChain",
        "symbol": "BRNKC"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://brnkc-mainnet.bearnetwork.net"
          ]
        },
        "default": {
          "http": [
            "https://brnkc-mainnet.bearnetwork.net"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "BrnkScan",
          "url": "https://brnkscan.bearnetwork.net"
        }
      }
    }
  },
  {
    "id": 14,
    "meta": {
      "id": 751230,
      "name": "Bear Network Chain Testnet",
      "network": "BearNetworkChainTestnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "tBRNKC",
        "symbol": "tBRNKC"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://brnkc-test.bearnetwork.net"
          ]
        },
        "default": {
          "http": [
            "https://brnkc-test.bearnetwork.net"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "BrnkTestScan",
          "url": "https://brnktest-scan.bearnetwork.net"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 15,
    "meta": {
      "id": 288,
      "name": "Boba Network",
      "network": "boba",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Boba",
        "symbol": "BOBA"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.boba.network"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.boba.network"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "BOBAScan",
          "url": "https://bobascan.com"
        },
        "default": {
          "name": "BOBAScan",
          "url": "https://bobascan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 446859
        }
      }
    }
  },
  {
    "id": 16,
    "meta": {
      "id": 1039,
      "name": "Bronos",
      "network": "bronos",
      "nativeCurrency": {
        "decimals": 18,
        "name": "BRO",
        "symbol": "BRO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://evm.bronos.org"
          ]
        },
        "public": {
          "http": [
            "https://evm.bronos.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "BronoScan",
          "url": "https://broscan.bronos.org"
        }
      }
    }
  },
  {
    "id": 17,
    "meta": {
      "id": 1038,
      "name": "Bronos Testnet",
      "network": "bronos-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Bronos Coin",
        "symbol": "tBRO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://evm-testnet.bronos.org"
          ]
        },
        "public": {
          "http": [
            "https://evm-testnet.bronos.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "BronoScan",
          "url": "https://tbroscan.bronos.org"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 18,
    "meta": {
      "id": 56,
      "name": "BNB Smart Chain",
      "network": "bsc",
      "nativeCurrency": {
        "decimals": 18,
        "name": "BNB",
        "symbol": "BNB"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.ankr.com/bsc"
          ]
        },
        "public": {
          "http": [
            "https://rpc.ankr.com/bsc"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "BscScan",
          "url": "https://bscscan.com"
        },
        "default": {
          "name": "BscScan",
          "url": "https://bscscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 15921452
        }
      }
    }
  },
  {
    "id": 19,
    "meta": {
      "id": 97,
      "name": "Binance Smart Chain Testnet",
      "network": "bsc-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "BNB",
        "symbol": "tBNB"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://data-seed-prebsc-1-s1.bnbchain.org:8545"
          ]
        },
        "public": {
          "http": [
            "https://data-seed-prebsc-1-s1.bnbchain.org:8545"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "BscScan",
          "url": "https://testnet.bscscan.com"
        },
        "default": {
          "name": "BscScan",
          "url": "https://testnet.bscscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 17422483
        }
      },
      "testnet": true
    }
  },
  {
    "id": 20,
    "meta": {
      "id": 4999,
      "name": "BlackFort Exchange Network",
      "network": "bxn",
      "nativeCurrency": {
        "name": "BlackFort Token",
        "symbol": "BXN",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.blackfort.network/rpc"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.blackfort.network/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Blockscout",
          "url": "https://explorer.blackfort.network"
        }
      }
    }
  },
  {
    "id": 21,
    "meta": {
      "id": 4777,
      "name": "BlackFort Exchange Network Testnet",
      "network": "bxnTestnet",
      "nativeCurrency": {
        "name": "BlackFort Testnet Token",
        "symbol": "TBXN",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://testnet.blackfort.network/rpc"
          ]
        },
        "public": {
          "http": [
            "https://testnet.blackfort.network/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Blockscout",
          "url": "https://testnet-explorer.blackfort.network"
        }
      }
    }
  },
  {
    "id": 22,
    "meta": {
      "id": 7700,
      "name": "Canto",
      "network": "canto",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Canto",
        "symbol": "CANTO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://canto.gravitychain.io"
          ]
        },
        "public": {
          "http": [
            "https://canto.gravitychain.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Tuber.Build (Blockscout)",
          "url": "https://tuber.build"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 2905789
        }
      }
    }
  },
  {
    "id": 23,
    "meta": {
      "id": 42220,
      "name": "Celo",
      "network": "celo",
      "nativeCurrency": {
        "decimals": 18,
        "name": "CELO",
        "symbol": "CELO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://forno.celo.org"
          ]
        },
        "infura": {
          "http": [
            "https://celo-mainnet.infura.io/v3"
          ]
        },
        "public": {
          "http": [
            "https://forno.celo.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Celo Explorer",
          "url": "https://explorer.celo.org/mainnet"
        },
        "etherscan": {
          "name": "CeloScan",
          "url": "https://celoscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 13112599
        }
      },
      "testnet": false,
      "formatters": {
        "block": {
          "exclude": [
            "difficulty",
            "gasLimit",
            "mixHash",
            "nonce",
            "uncles"
          ],
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        },
        "transactionRequest": {
          "type": "transactionRequest"
        }
      },
      "serializers": {}
    }
  },
  {
    "id": 24,
    "meta": {
      "id": 44787,
      "name": "Alfajores",
      "network": "celo-alfajores",
      "nativeCurrency": {
        "decimals": 18,
        "name": "CELO",
        "symbol": "A-CELO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://alfajores-forno.celo-testnet.org"
          ]
        },
        "infura": {
          "http": [
            "https://celo-alfajores.infura.io/v3"
          ]
        },
        "public": {
          "http": [
            "https://alfajores-forno.celo-testnet.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Celo Explorer",
          "url": "https://explorer.celo.org/alfajores"
        },
        "etherscan": {
          "name": "CeloScan",
          "url": "https://alfajores.celoscan.io/"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 14569001
        }
      },
      "testnet": true,
      "formatters": {
        "block": {
          "exclude": [
            "difficulty",
            "gasLimit",
            "mixHash",
            "nonce",
            "uncles"
          ],
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        },
        "transactionRequest": {
          "type": "transactionRequest"
        }
      },
      "serializers": {}
    }
  },
  {
    "id": 25,
    "meta": {
      "id": 17323,
      "name": "Cannoli",
      "network": "celo-cannoli",
      "nativeCurrency": {
        "decimals": 18,
        "name": "CELO",
        "symbol": "C-CELO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://forno.cannoli.celo-testnet.org"
          ]
        },
        "public": {
          "http": [
            "https://forno.cannoli.celo-testnet.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Celo Explorer",
          "url": "https://explorer.celo.org/cannoli"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0x5Acb0aa8BF4E8Ff0d882Ee187140713C12BF9718",
          "blockCreated": 87429
        }
      },
      "testnet": true,
      "formatters": {
        "block": {
          "exclude": [
            "difficulty",
            "gasLimit",
            "mixHash",
            "nonce",
            "uncles"
          ],
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        },
        "transactionRequest": {
          "type": "transactionRequest"
        }
      },
      "serializers": {}
    }
  },
  {
    "id": 26,
    "meta": {
      "id": 88888,
      "name": "Chiliz Chain",
      "network": "chiliz-chain",
      "nativeCurrency": {
        "decimals": 18,
        "name": "CHZ",
        "symbol": "CHZ"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.ankr.com/chiliz",
            "https://chiliz.publicnode.com"
          ]
        },
        "public": {
          "http": [
            "https://rpc.ankr.com/chiliz",
            "https://chiliz.publicnode.com"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Chiliz Explorer",
          "url": "https://scan.chiliz.com"
        }
      }
    }
  },
  {
    "id": 27,
    "meta": {
      "id": 61,
      "name": "Ethereum Classic",
      "network": "classic",
      "nativeCurrency": {
        "decimals": 18,
        "name": "ETC",
        "symbol": "ETC"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://etc.rivet.link"
          ]
        },
        "public": {
          "http": [
            "https://etc.rivet.link"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Blockscout",
          "url": "https://blockscout.com/etc/mainnet"
        }
      }
    }
  },
  {
    "id": 28,
    "meta": {
      "id": 1030,
      "name": "Conflux eSpace",
      "network": "cfx-espace",
      "nativeCurrency": {
        "name": "Conflux",
        "symbol": "CFX",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://evm.confluxrpc.org"
          ],
          "webSocket": [
            "wss://evm.confluxrpc.org/ws"
          ]
        },
        "public": {
          "http": [
            "https://evm.confluxrpc.org"
          ],
          "webSocket": [
            "wss://evm.confluxrpc.org/ws"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "ConfluxScan",
          "url": "https://evm.confluxscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
          "blockCreated": 68602935
        }
      }
    }
  },
  {
    "id": 29,
    "meta": {
      "id": 71,
      "name": "Conflux eSpace Testnet",
      "network": "cfx-espace-testnet",
      "testnet": true,
      "nativeCurrency": {
        "name": "Conflux",
        "symbol": "CFX",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://evmtestnet.confluxrpc.org"
          ],
          "webSocket": [
            "wss://evmtestnet.confluxrpc.org/ws"
          ]
        },
        "public": {
          "http": [
            "https://evmtestnet.confluxrpc.org"
          ],
          "webSocket": [
            "wss://evmtestnet.confluxrpc.org/ws"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "ConfluxScan",
          "url": "https://evmtestnet.confluxscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
          "blockCreated": 117499050
        }
      }
    }
  },
  {
    "id": 30,
    "meta": {
      "id": 1116,
      "name": "Core Dao",
      "network": "coreDao",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Core",
        "symbol": "CORE"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://rpc.coredao.org"
          ]
        },
        "default": {
          "http": [
            "https://rpc.coredao.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "CoreDao",
          "url": "https://scan.coredao.org"
        },
        "etherscan": {
          "name": "CoreDao",
          "url": "https://scan.coredao.org"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 11907934
        }
      },
      "testnet": false
    }
  },
  {
    "id": 31,
    "meta": {
      "id": 25,
      "name": "Cronos Mainnet",
      "network": "cronos",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Cronos",
        "symbol": "CRO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://evm.cronos.org"
          ]
        },
        "public": {
          "http": [
            "https://evm.cronos.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Cronoscan",
          "url": "https://cronoscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 1963112
        }
      }
    }
  },
  {
    "id": 32,
    "meta": {
      "id": 338,
      "name": "Cronos Testnet",
      "network": "cronos-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "CRO",
        "symbol": "tCRO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://evm-t3.cronos.org"
          ]
        },
        "public": {
          "http": [
            "https://evm-t3.cronos.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Cronos Explorer",
          "url": "https://cronos.org/explorer/testnet3"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 10191251
        }
      },
      "testnet": true
    }
  },
  {
    "id": 33,
    "meta": {
      "id": 3737,
      "network": "crossbell",
      "name": "Crossbell",
      "nativeCurrency": {
        "decimals": 18,
        "name": "CSB",
        "symbol": "CSB"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.crossbell.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.crossbell.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "CrossScan",
          "url": "https://scan.crossbell.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 38246031
        }
      }
    }
  },
  {
    "id": 34,
    "meta": {
      "id": 53935,
      "name": "DFK Chain",
      "network": "dfk",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Jewel",
        "symbol": "JEWEL"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
          ]
        },
        "public": {
          "http": [
            "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "DFKSubnetScan",
          "url": "https://subnets.avax.network/defi-kingdoms"
        },
        "default": {
          "name": "DFKSubnetScan",
          "url": "https://subnets.avax.network/defi-kingdoms"
        }
      }
    }
  },
  {
    "id": 35,
    "meta": {
      "id": 2000,
      "name": "Dogechain",
      "network": "dogechain",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Dogechain",
        "symbol": "DC"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.dogechain.dog"
          ]
        },
        "public": {
          "http": [
            "https://rpc.dogechain.dog"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "DogeChainExplorer",
          "url": "https://explorer.dogechain.dog"
        },
        "default": {
          "name": "DogeChainExplorer",
          "url": "https://explorer.dogechain.dog"
        }
      }
    }
  },
  {
    "id": 36,
    "meta": {
      "id": 2021,
      "name": "Edgeware EdgeEVM Mainnet",
      "network": "edgeware",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Edgeware",
        "symbol": "EDG"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://edgeware-evm.jelliedowl.net"
          ]
        },
        "public": {
          "http": [
            "https://edgeware-evm.jelliedowl.net"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Edgscan by Bharathcoorg",
          "url": "https://edgscan.live"
        },
        "default": {
          "name": "Edgscan by Bharathcoorg",
          "url": "https://edgscan.live"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 18117872
        }
      }
    }
  },
  {
    "id": 37,
    "meta": {
      "id": 2022,
      "name": "Beresheet BereEVM Testnet",
      "network": "edgewareTestnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Testnet EDG",
        "symbol": "tEDG"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://beresheet-evm.jelliedowl.net"
          ]
        },
        "public": {
          "http": [
            "https://beresheet-evm.jelliedowl.net"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Edgscan by Bharathcoorg",
          "url": "https://testnet.edgscan.live"
        },
        "default": {
          "name": "Edgscan by Bharathcoorg",
          "url": "https://testnet.edgscan.live"
        }
      }
    }
  },
  {
    "id": 38,
    "meta": {
      "id": 1994,
      "name": "Ekta",
      "network": "ekta",
      "nativeCurrency": {
        "decimals": 18,
        "name": "EKTA",
        "symbol": "EKTA"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://main.ekta.io"
          ]
        },
        "default": {
          "http": [
            "https://main.ekta.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Ektascan",
          "url": "https://ektascan.io"
        }
      }
    }
  },
  {
    "id": 39,
    "meta": {
      "id": 1004,
      "name": "Ekta Testnet",
      "network": "ekta-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "EKTA",
        "symbol": "EKTA"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://test.ekta.io:8545"
          ]
        },
        "default": {
          "http": [
            "https://test.ekta.io:8545"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Test Ektascan",
          "url": "https://test.ektascan.io"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 40,
    "meta": {
      "id": 17777,
      "name": "EOS EVM",
      "network": "eos",
      "nativeCurrency": {
        "decimals": 18,
        "name": "EOS",
        "symbol": "EOS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.evm.eosnetwork.com"
          ]
        },
        "public": {
          "http": [
            "https://api.evm.eosnetwork.com"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "EOS EVM Explorer",
          "url": "https://explorer.evm.eosnetwork.com"
        },
        "default": {
          "name": "EOS EVM Explorer",
          "url": "https://explorer.evm.eosnetwork.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 7943933
        }
      }
    }
  },
  {
    "id": 41,
    "meta": {
      "id": 15557,
      "name": "EOS EVM Testnet",
      "network": "eos",
      "nativeCurrency": {
        "decimals": 18,
        "name": "EOS",
        "symbol": "EOS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.testnet.evm.eosnetwork.com"
          ]
        },
        "public": {
          "http": [
            "https://api.testnet.evm.eosnetwork.com"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "EOS EVM Testnet Explorer",
          "url": "https://explorer.testnet.evm.eosnetwork.com"
        },
        "default": {
          "name": "EOS EVM Testnet Explorer",
          "url": "https://explorer.testnet.evm.eosnetwork.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 9067940
        }
      },
      "testnet": true
    }
  },
  {
    "id": 42,
    "meta": {
      "id": 9001,
      "name": "Evmos",
      "network": "evmos",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Evmos",
        "symbol": "EVMOS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://eth.bd.evmos.org:8545"
          ]
        },
        "public": {
          "http": [
            "https://eth.bd.evmos.org:8545"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Evmos Block Explorer",
          "url": "https://escan.live"
        }
      }
    }
  },
  {
    "id": 43,
    "meta": {
      "id": 9000,
      "name": "Evmos Testnet",
      "network": "evmos-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Evmos",
        "symbol": "EVMOS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://eth.bd.evmos.dev:8545"
          ]
        },
        "public": {
          "http": [
            "https://eth.bd.evmos.dev:8545"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Evmos Testnet Block Explorer",
          "url": "https://evm.evmos.dev/"
        }
      }
    }
  },
  {
    "id": 44,
    "meta": {
      "id": 250,
      "name": "Fantom",
      "network": "fantom",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Fantom",
        "symbol": "FTM"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.ankr.com/fantom"
          ]
        },
        "public": {
          "http": [
            "https://rpc.ankr.com/fantom"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "FTMScan",
          "url": "https://ftmscan.com"
        },
        "default": {
          "name": "FTMScan",
          "url": "https://ftmscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 33001987
        }
      }
    }
  },
  {
    "id": 45,
    "meta": {
      "id": 4002,
      "name": "Fantom Testnet",
      "network": "fantom-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Fantom",
        "symbol": "FTM"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.testnet.fantom.network"
          ]
        },
        "public": {
          "http": [
            "https://rpc.testnet.fantom.network"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "FTMScan",
          "url": "https://testnet.ftmscan.com"
        },
        "default": {
          "name": "FTMScan",
          "url": "https://testnet.ftmscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 8328688
        }
      }
    }
  },
  {
    "id": 46,
    "meta": {
      "id": 12306,
      "name": "Fibo Chain",
      "network": "fibochain",
      "nativeCurrency": {
        "decimals": 18,
        "name": "fibo",
        "symbol": "FIBO"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://network.hzroc.art"
          ]
        },
        "public": {
          "http": [
            "https://network.hzroc.art"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "FiboScan",
          "url": "https://scan.fibochain.org"
        }
      }
    }
  },
  {
    "id": 47,
    "meta": {
      "id": 314,
      "name": "Filecoin Mainnet",
      "network": "filecoin-mainnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "filecoin",
        "symbol": "FIL"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.node.glif.io/rpc/v1"
          ]
        },
        "public": {
          "http": [
            "https://api.node.glif.io/rpc/v1"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Filfox",
          "url": "https://filfox.info/en"
        },
        "filscan": {
          "name": "Filscan",
          "url": "https://filscan.io"
        },
        "filscout": {
          "name": "Filscout",
          "url": "https://filscout.io/en"
        },
        "glif": {
          "name": "Glif",
          "url": "https://explorer.glif.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 3328594
        }
      }
    }
  },
  {
    "id": 48,
    "meta": {
      "id": 314159,
      "name": "Filecoin Calibration",
      "network": "filecoin-calibration",
      "nativeCurrency": {
        "decimals": 18,
        "name": "testnet filecoin",
        "symbol": "tFIL"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.calibration.node.glif.io/rpc/v1"
          ]
        },
        "public": {
          "http": [
            "https://api.calibration.node.glif.io/rpc/v1"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Filscan",
          "url": "https://calibration.filscan.io"
        }
      }
    }
  },
  {
    "id": 49,
    "meta": {
      "id": 3141,
      "name": "Filecoin Hyperspace",
      "network": "filecoin-hyperspace",
      "nativeCurrency": {
        "decimals": 18,
        "name": "testnet filecoin",
        "symbol": "tFIL"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.hyperspace.node.glif.io/rpc/v1"
          ]
        },
        "public": {
          "http": [
            "https://api.hyperspace.node.glif.io/rpc/v1"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Filfox",
          "url": "https://hyperspace.filfox.info/en"
        },
        "filscan": {
          "name": "Filscan",
          "url": "https://hyperspace.filscan.io"
        }
      }
    }
  },
  {
    "id": 50,
    "meta": {
      "id": 14,
      "name": "Flare Mainnet",
      "network": "flare-mainnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "flare",
        "symbol": "FLR"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://flare-api.flare.network/ext/C/rpc"
          ]
        },
        "public": {
          "http": [
            "https://flare-api.flare.network/ext/C/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Flare Explorer",
          "url": "https://flare-explorer.flare.network"
        }
      }
    }
  },
  {
    "id": 51,
    "meta": {
      "id": 114,
      "name": "Coston2",
      "network": "coston2",
      "nativeCurrency": {
        "decimals": 18,
        "name": "coston2flare",
        "symbol": "C2FLR"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://coston2-api.flare.network/ext/C/rpc"
          ]
        },
        "public": {
          "http": [
            "https://coston2-api.flare.network/ext/C/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Coston2 Explorer",
          "url": "https://coston2-explorer.flare.network"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 52,
    "meta": {
      "id": 31337,
      "name": "Foundry",
      "network": "foundry",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Ether",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "http://127.0.0.1:8545"
          ],
          "webSocket": [
            "ws://127.0.0.1:8545"
          ]
        },
        "public": {
          "http": [
            "http://127.0.0.1:8545"
          ],
          "webSocket": [
            "ws://127.0.0.1:8545"
          ]
        }
      }
    }
  },
  {
    "id": 53,
    "meta": {
      "id": 122,
      "name": "Fuse",
      "network": "fuse",
      "nativeCurrency": {
        "name": "Fuse",
        "symbol": "FUSE",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.fuse.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.fuse.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Fuse Explorer",
          "url": "https://explorer.fuse.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 16146628
        }
      }
    }
  },
  {
    "id": 54,
    "meta": {
      "id": 123,
      "name": "Fuse Sparknet",
      "network": "fuse",
      "nativeCurrency": {
        "name": "Spark",
        "symbol": "SPARK",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.fusespark.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.fusespark.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Sparkent Explorer",
          "url": "https://explorer.fusespark.io"
        }
      }
    }
  },
  {
    "id": 55,
    "meta": {
      "id": 100,
      "name": "Gnosis",
      "network": "gnosis",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Gnosis",
        "symbol": "xDAI"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.gnosischain.com"
          ],
          "webSocket": [
            "wss://rpc.gnosischain.com/wss"
          ]
        },
        "public": {
          "http": [
            "https://rpc.gnosischain.com"
          ],
          "webSocket": [
            "wss://rpc.gnosischain.com/wss"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Gnosisscan",
          "url": "https://gnosisscan.io"
        },
        "default": {
          "name": "Gnosis Chain Explorer",
          "url": "https://blockscout.com/xdai/mainnet"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 21022491
        }
      }
    }
  },
  {
    "id": 56,
    "meta": {
      "id": 10200,
      "name": "Gnosis Chiado",
      "network": "chiado",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Gnosis",
        "symbol": "xDAI"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.chiadochain.net"
          ],
          "webSocket": [
            "wss://rpc.chiadochain.net/wss"
          ]
        },
        "public": {
          "http": [
            "https://rpc.chiadochain.net"
          ],
          "webSocket": [
            "wss://rpc.chiadochain.net/wss"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Blockscout",
          "url": "https://blockscout.chiadochain.net"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 4967313
        }
      },
      "testnet": true
    }
  },
  {
    "id": 57,
    "meta": {
      "id": 1663,
      "name": "Horizen Gobi Testnet",
      "network": "gobi",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Test ZEN",
        "symbol": "tZEN"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://gobi-testnet.horizenlabs.io/ethv1"
          ]
        },
        "default": {
          "http": [
            "https://gobi-testnet.horizenlabs.io/ethv1"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Gobi Explorer",
          "url": "https://gobi-explorer.horizen.io"
        }
      },
      "contracts": {},
      "testnet": true
    }
  },
  {
    "id": 58,
    "meta": {
      "id": 5,
      "network": "goerli",
      "name": "Goerli",
      "nativeCurrency": {
        "name": "Goerli Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://eth-goerli.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://eth-goerli.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://goerli.infura.io/v3"
          ],
          "webSocket": [
            "wss://goerli.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://rpc.ankr.com/eth_goerli"
          ]
        },
        "public": {
          "http": [
            "https://rpc.ankr.com/eth_goerli"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Etherscan",
          "url": "https://goerli.etherscan.io"
        },
        "default": {
          "name": "Etherscan",
          "url": "https://goerli.etherscan.io"
        }
      },
      "contracts": {
        "ensRegistry": {
          "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        "ensUniversalResolver": {
          "address": "0x56522D00C410a43BFfDF00a9A569489297385790",
          "blockCreated": 8765204
        },
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 6507670
        }
      },
      "testnet": true
    }
  },
  {
    "id": 59,
    "meta": {
      "id": 11235,
      "name": "HAQQ Mainnet",
      "network": "haqq-mainnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Islamic Coin",
        "symbol": "ISLM"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.eth.haqq.network"
          ]
        },
        "public": {
          "http": [
            "https://rpc.eth.haqq.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "HAQQ Explorer",
          "url": "https://explorer.haqq.network"
        }
      }
    }
  },
  {
    "id": 60,
    "meta": {
      "id": 54211,
      "name": "HAQQ Testedge 2",
      "network": "haqq-testedge-2",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Islamic Coin",
        "symbol": "ISLMT"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.eth.testedge2.haqq.network"
          ]
        },
        "public": {
          "http": [
            "https://rpc.eth.testedge2.haqq.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "HAQQ Explorer",
          "url": "https://explorer.testedge2.haqq.network"
        }
      }
    }
  },
  {
    "id": 61,
    "meta": {
      "id": 31337,
      "name": "Hardhat",
      "network": "hardhat",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Ether",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "http://127.0.0.1:8545"
          ]
        },
        "public": {
          "http": [
            "http://127.0.0.1:8545"
          ]
        }
      }
    }
  },
  {
    "id": 62,
    "meta": {
      "id": 1666600000,
      "name": "Harmony One",
      "network": "harmony",
      "nativeCurrency": {
        "name": "Harmony",
        "symbol": "ONE",
        "decimals": 18
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://rpc.ankr.com/harmony"
          ]
        },
        "default": {
          "http": [
            "https://rpc.ankr.com/harmony"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Harmony Explorer",
          "url": "https://explorer.harmony.one"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 24185753
        }
      }
    }
  },
  {
    "id": 63,
    "meta": {
      "id": 17000,
      "network": "holesky",
      "name": "Holesky",
      "nativeCurrency": {
        "name": "Holesky Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://ethereum-holesky.publicnode.com"
          ]
        },
        "public": {
          "http": [
            "https://ethereum-holesky.publicnode.com"
          ]
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 77
        }
      },
      "testnet": true
    }
  },
  {
    "id": 64,
    "meta": {
      "id": 4689,
      "name": "IoTeX",
      "network": "iotex",
      "nativeCurrency": {
        "decimals": 18,
        "name": "IoTeX",
        "symbol": "IOTX"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://babel-api.mainnet.iotex.io"
          ],
          "webSocket": [
            "wss://babel-api.mainnet.iotex.io"
          ]
        },
        "public": {
          "http": [
            "https://babel-api.mainnet.iotex.io"
          ],
          "webSocket": [
            "wss://babel-api.mainnet.iotex.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "IoTeXScan",
          "url": "https://iotexscan.io"
        }
      }
    }
  },
  {
    "id": 65,
    "meta": {
      "id": 4690,
      "name": "IoTeX Testnet",
      "network": "iotex-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "IoTeX",
        "symbol": "IOTX"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://babel-api.testnet.iotex.io"
          ],
          "webSocket": [
            "wss://babel-api.testnet.iotex.io"
          ]
        },
        "public": {
          "http": [
            "https://babel-api.testnet.iotex.io"
          ],
          "webSocket": [
            "wss://babel-api.testnet.iotex.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "IoTeXScan",
          "url": "https://testnet.iotexscan.io"
        }
      }
    }
  },
  {
    "id": 66,
    "meta": {
      "id": 2222,
      "name": "Kava EVM",
      "network": "kava-mainnet",
      "nativeCurrency": {
        "name": "Kava",
        "symbol": "KAVA",
        "decimals": 18
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://evm.kava.io"
          ]
        },
        "default": {
          "http": [
            "https://evm.kava.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Kava EVM Explorer",
          "url": "https://kavascan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 3661165
        }
      },
      "testnet": false
    }
  },
  {
    "id": 67,
    "meta": {
      "id": 2221,
      "name": "Kava EVM Testnet",
      "network": "kava-testnet",
      "nativeCurrency": {
        "name": "Kava",
        "symbol": "KAVA",
        "decimals": 18
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://evm.testnet.kava.io"
          ]
        },
        "default": {
          "http": [
            "https://evm.testnet.kava.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Kava EVM Testnet Explorer",
          "url": "https://testnet.kavascan.com/"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
          "blockCreated": 7242179
        }
      },
      "testnet": true
    }
  },
  {
    "id": 68,
    "meta": {
      "id": 8217,
      "name": "Klaytn",
      "network": "klaytn",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Klaytn",
        "symbol": "KLAY"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://klaytn.drpc.org"
          ]
        },
        "public": {
          "http": [
            "https://klaytn.drpc.org"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "KlaytnScope",
          "url": "https://scope.klaytn.com"
        },
        "default": {
          "name": "KlaytnScope",
          "url": "https://scope.klaytn.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 96002415
        }
      }
    }
  },
  {
    "id": 69,
    "meta": {
      "id": 1001,
      "name": "Klaytn Baobab Testnet",
      "network": "klaytn-baobab",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Baobab Klaytn",
        "symbol": "KLAY"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://public-en-baobab.klaytn.net"
          ]
        },
        "public": {
          "http": [
            "https://public-en-baobab.klaytn.net"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "KlaytnScope",
          "url": "https://baobab.klaytnscope.com"
        },
        "default": {
          "name": "KlaytnScope",
          "url": "https://baobab.klaytnscope.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 123390593
        }
      },
      "testnet": true
    }
  },
  {
    "id": 70,
    "meta": {
      "id": 255,
      "network": "kroma",
      "name": "Kroma",
      "nativeCurrency": {
        "name": "ETH",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.kroma.network"
          ]
        },
        "public": {
          "http": [
            "https://api.kroma.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Kroma Explorer",
          "url": "https://blockscout.kroma.network"
        }
      },
      "testnet": false
    }
  },
  {
    "id": 71,
    "meta": {
      "id": 2358,
      "network": "kroma-sepolia",
      "name": "Kroma Sepolia",
      "nativeCurrency": {
        "name": "Sepolia Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.sepolia.kroma.network"
          ]
        },
        "public": {
          "http": [
            "https://api.sepolia.kroma.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Kroma Sepolia Explorer",
          "url": "https://blockscout.sepolia.kroma.network"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 72,
    "meta": {
      "id": 59144,
      "name": "Linea Mainnet",
      "network": "linea-mainnet",
      "nativeCurrency": {
        "name": "Linea Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "infura": {
          "http": [
            "https://linea-mainnet.infura.io/v3"
          ],
          "webSocket": [
            "wss://linea-mainnet.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://rpc.linea.build"
          ],
          "webSocket": [
            "wss://rpc.linea.build"
          ]
        },
        "public": {
          "http": [
            "https://rpc.linea.build"
          ],
          "webSocket": [
            "wss://rpc.linea.build"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Etherscan",
          "url": "https://lineascan.build"
        },
        "etherscan": {
          "name": "Etherscan",
          "url": "https://lineascan.build"
        },
        "blockscout": {
          "name": "Blockscout",
          "url": "https://explorer.linea.build"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 42
        }
      },
      "testnet": false
    }
  },
  {
    "id": 73,
    "meta": {
      "id": 59140,
      "name": "Linea Goerli Testnet",
      "network": "linea-testnet",
      "nativeCurrency": {
        "name": "Linea Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "infura": {
          "http": [
            "https://linea-goerli.infura.io/v3"
          ],
          "webSocket": [
            "wss://linea-goerli.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://rpc.goerli.linea.build"
          ],
          "webSocket": [
            "wss://rpc.goerli.linea.build"
          ]
        },
        "public": {
          "http": [
            "https://rpc.goerli.linea.build"
          ],
          "webSocket": [
            "wss://rpc.goerli.linea.build"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Etherscan",
          "url": "https://goerli.lineascan.build"
        },
        "etherscan": {
          "name": "Etherscan",
          "url": "https://goerli.lineascan.build"
        },
        "blockscout": {
          "name": "Blockscout",
          "url": "https://explorer.goerli.linea.build"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 498623
        }
      },
      "testnet": true
    }
  },
  {
    "id": 74,
    "meta": {
      "id": 1337,
      "name": "Localhost",
      "network": "localhost",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Ether",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "http://127.0.0.1:8545"
          ]
        },
        "public": {
          "http": [
            "http://127.0.0.1:8545"
          ]
        }
      }
    }
  },
  {
    "id": 75,
    "meta": {
      "id": 42,
      "network": "lukso",
      "name": "LUKSO",
      "nativeCurrency": {
        "name": "LUKSO",
        "symbol": "LYX",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.mainnet.lukso.network"
          ],
          "webSocket": [
            "wss://ws-rpc.mainnet.lukso.network"
          ]
        },
        "public": {
          "http": [
            "https://rpc.mainnet.lukso.network"
          ],
          "webSocket": [
            "wss://ws-rpc.mainnet.lukso.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "LUKSO Mainnet Explorer",
          "url": "https://explorer.execution.mainnet.lukso.network"
        }
      }
    }
  },
  {
    "id": 76,
    "meta": {
      "id": 1,
      "network": "homestead",
      "name": "Ethereum",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://eth-mainnet.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://eth-mainnet.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://mainnet.infura.io/v3"
          ],
          "webSocket": [
            "wss://mainnet.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://cloudflare-eth.com"
          ]
        },
        "public": {
          "http": [
            "https://cloudflare-eth.com"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Etherscan",
          "url": "https://etherscan.io"
        },
        "default": {
          "name": "Etherscan",
          "url": "https://etherscan.io"
        }
      },
      "contracts": {
        "ensRegistry": {
          "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        "ensUniversalResolver": {
          "address": "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
          "blockCreated": 16966585
        },
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 14353601
        }
      }
    }
  },
  {
    "id": 77,
    "meta": {
      "id": 169,
      "name": "Manta Pacific Mainnet",
      "network": "manta",
      "nativeCurrency": {
        "decimals": 18,
        "name": "ETH",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://pacific-rpc.manta.network/http"
          ]
        },
        "public": {
          "http": [
            "https://pacific-rpc.manta.network/http"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Manta Explorer",
          "url": "https://pacific-explorer.manta.network"
        },
        "default": {
          "name": "Manta Explorer",
          "url": "https://pacific-explorer.manta.network"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 332890
        }
      }
    }
  },
  {
    "id": 78,
    "meta": {
      "id": 3441005,
      "name": "Manta Pacific Testnet",
      "network": "manta-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "ETH",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://manta-testnet.calderachain.xyz/http"
          ]
        },
        "public": {
          "http": [
            "https://manta-testnet.calderachain.xyz/http"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Manta Testnet Explorer",
          "url": "https://pacific-explorer.testnet.manta.network"
        },
        "default": {
          "name": "Manta Testnet Explorer",
          "url": "https://pacific-explorer.testnet.manta.network"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
          "blockCreated": 419915
        }
      },
      "testnet": true
    }
  },
  {
    "id": 79,
    "meta": {
      "id": 5000,
      "name": "Mantle",
      "network": "mantle",
      "nativeCurrency": {
        "decimals": 18,
        "name": "MNT",
        "symbol": "MNT"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.mantle.xyz"
          ]
        },
        "public": {
          "http": [
            "https://rpc.mantle.xyz"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Mantle Explorer",
          "url": "https://explorer.mantle.xyz"
        },
        "default": {
          "name": "Mantle Explorer",
          "url": "https://explorer.mantle.xyz"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 304717
        }
      }
    }
  },
  {
    "id": 80,
    "meta": {
      "id": 5001,
      "name": "Mantle Testnet",
      "network": "mantle",
      "nativeCurrency": {
        "decimals": 18,
        "name": "MNT",
        "symbol": "MNT"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.testnet.mantle.xyz"
          ]
        },
        "public": {
          "http": [
            "https://rpc.testnet.mantle.xyz"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Mantle Testnet Explorer",
          "url": "https://explorer.testnet.mantle.xyz"
        },
        "default": {
          "name": "Mantle Testnet Explorer",
          "url": "https://explorer.testnet.mantle.xyz"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 81,
    "meta": {
      "id": 82,
      "name": "Meter",
      "network": "meter",
      "nativeCurrency": {
        "decimals": 18,
        "name": "MTR",
        "symbol": "MTR"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.meter.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.meter.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "MeterScan",
          "url": "https://scan.meter.io"
        }
      }
    }
  },
  {
    "id": 82,
    "meta": {
      "id": 83,
      "name": "Meter Testnet",
      "network": "meter-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "MTR",
        "symbol": "MTR"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpctest.meter.io"
          ]
        },
        "public": {
          "http": [
            "https://rpctest.meter.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "MeterTestnetScan",
          "url": "https://scan-warringstakes.meter.io"
        }
      }
    }
  },
  {
    "id": 83,
    "meta": {
      "id": 1088,
      "name": "Metis",
      "network": "andromeda",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Metis",
        "symbol": "METIS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://andromeda.metis.io/?owner=1088"
          ]
        },
        "public": {
          "http": [
            "https://andromeda.metis.io/?owner=1088"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Andromeda Explorer",
          "url": "https://andromeda-explorer.metis.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 2338552
        }
      }
    }
  },
  {
    "id": 84,
    "meta": {
      "id": 599,
      "name": "Metis Goerli",
      "network": "metis-goerli",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Metis Goerli",
        "symbol": "METIS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://goerli.gateway.metisdevops.link"
          ]
        },
        "public": {
          "http": [
            "https://goerli.gateway.metisdevops.link"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Metis Goerli Explorer",
          "url": "https://goerli.explorer.metisdevops.link"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 1006207
        }
      }
    }
  },
  {
    "id": 85,
    "meta": {
      "id": 7518,
      "network": "MEVerse",
      "name": "MEVerse Chain Mainnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "MEVerse",
        "symbol": "MEV"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.meversemainnet.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.meversemainnet.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Explorer",
          "url": "https://www.meversescan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 86881340
        }
      }
    }
  },
  {
    "id": 86,
    "meta": {
      "id": 4759,
      "network": "MEVerse Testnet",
      "name": "MEVerse Chain Testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "MEVerse",
        "symbol": "MEV"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.meversetestnet.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.meversetestnet.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Explorer",
          "url": "https://testnet.meversescan.io/"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 64371115
        }
      },
      "testnet": true
    }
  },
  {
    "id": 87,
    "meta": {
      "id": 919,
      "name": "Mode Testnet",
      "network": "mode-testnet",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sepolia.mode.network"
          ]
        },
        "public": {
          "http": [
            "https://sepolia.mode.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Blockscout",
          "url": "https://sepolia.explorer.mode.network"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
          "blockCreated": 3019007
        }
      },
      "testnet": true
    }
  },
  {
    "id": 88,
    "meta": {
      "id": 1287,
      "name": "Moonbase Alpha",
      "network": "moonbase-alpha",
      "nativeCurrency": {
        "decimals": 18,
        "name": "DEV",
        "symbol": "DEV"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.api.moonbase.moonbeam.network"
          ],
          "webSocket": [
            "wss://wss.api.moonbase.moonbeam.network"
          ]
        },
        "public": {
          "http": [
            "https://rpc.api.moonbase.moonbeam.network"
          ],
          "webSocket": [
            "wss://wss.api.moonbase.moonbeam.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Moonscan",
          "url": "https://moonbase.moonscan.io"
        },
        "etherscan": {
          "name": "Moonscan",
          "url": "https://moonbase.moonscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 1850686
        }
      },
      "testnet": true
    }
  },
  {
    "id": 89,
    "meta": {
      "id": 1284,
      "name": "Moonbeam",
      "network": "moonbeam",
      "nativeCurrency": {
        "decimals": 18,
        "name": "GLMR",
        "symbol": "GLMR"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://moonbeam.public.blastapi.io"
          ],
          "webSocket": [
            "wss://moonbeam.public.blastapi.io"
          ]
        },
        "default": {
          "http": [
            "https://moonbeam.public.blastapi.io"
          ],
          "webSocket": [
            "wss://moonbeam.public.blastapi.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Moonscan",
          "url": "https://moonscan.io"
        },
        "etherscan": {
          "name": "Moonscan",
          "url": "https://moonscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 609002
        }
      },
      "testnet": false
    }
  },
  {
    "id": 90,
    "meta": {
      "id": 1281,
      "name": "Moonbeam Development Node",
      "network": "development",
      "nativeCurrency": {
        "decimals": 18,
        "name": "DEV",
        "symbol": "DEV"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "http://127.0.0.1:9944"
          ],
          "webSocket": [
            "wss://127.0.0.1:9944"
          ]
        },
        "public": {
          "http": [
            "http://127.0.0.1:9944"
          ],
          "webSocket": [
            "wss://127.0.0.1:9944"
          ]
        }
      }
    }
  },
  {
    "id": 91,
    "meta": {
      "id": 1285,
      "name": "Moonriver",
      "network": "moonriver",
      "nativeCurrency": {
        "decimals": 18,
        "name": "MOVR",
        "symbol": "MOVR"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://moonriver.public.blastapi.io"
          ],
          "webSocket": [
            "wss://moonriver.public.blastapi.io"
          ]
        },
        "default": {
          "http": [
            "https://moonriver.public.blastapi.io"
          ],
          "webSocket": [
            "wss://moonriver.public.blastapi.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Moonscan",
          "url": "https://moonriver.moonscan.io"
        },
        "etherscan": {
          "name": "Moonscan",
          "url": "https://moonriver.moonscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 1597904
        }
      },
      "testnet": false
    }
  },
  {
    "id": 92,
    "meta": {
      "id": 245022926,
      "network": "neonDevnet",
      "name": "Neon EVM DevNet",
      "nativeCurrency": {
        "name": "NEON",
        "symbol": "NEON",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://devnet.neonevm.org"
          ]
        },
        "public": {
          "http": [
            "https://devnet.neonevm.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Neonscan",
          "url": "https://devnet.neonscan.org"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 205206112
        }
      },
      "testnet": true
    }
  },
  {
    "id": 93,
    "meta": {
      "id": 245022934,
      "network": "neonMainnet",
      "name": "Neon EVM MainNet",
      "nativeCurrency": {
        "name": "NEON",
        "symbol": "NEON",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://neon-proxy-mainnet.solana.p2p.org"
          ]
        },
        "public": {
          "http": [
            "https://neon-proxy-mainnet.solana.p2p.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Neonscan",
          "url": "https://neonscan.org"
        }
      },
      "contracts": {},
      "testnet": false
    }
  },
  {
    "id": 94,
    "meta": {
      "id": 4242,
      "name": "Nexi",
      "network": "nexi",
      "nativeCurrency": {
        "name": "Nexi",
        "symbol": "NEXI",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.chain.nexi.technology"
          ]
        },
        "public": {
          "http": [
            "https://rpc.chain.nexi.technology"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "NexiScan",
          "url": "https://www.nexiscan.com"
        },
        "default": {
          "name": "NexiScan",
          "url": "https://www.nexiscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
          "blockCreated": 25770160
        }
      }
    }
  },
  {
    "id": 95,
    "meta": {
      "id": 240,
      "name": "Nexilix Smart Chain",
      "network": "nexilix",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Nexilix",
        "symbol": "NEXILIX"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpcurl.pos.nexilix.com"
          ]
        },
        "public": {
          "http": [
            "https://rpcurl.pos.nexilix.com"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "NexilixScan",
          "url": "https://scan.nexilix.com"
        },
        "default": {
          "name": "NexilixScan",
          "url": "https://scan.nexilix.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
          "blockCreated": 74448
        }
      }
    }
  },
  {
    "id": 96,
    "meta": {
      "id": 248,
      "name": "Oasys",
      "network": "oasys",
      "nativeCurrency": {
        "name": "Oasys",
        "symbol": "OAS",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.mainnet.oasys.games"
          ]
        },
        "public": {
          "http": [
            "https://rpc.mainnet.oasys.games"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "OasysScan",
          "url": "https://scan.oasys.games"
        }
      }
    }
  },
  {
    "id": 97,
    "meta": {
      "id": 66,
      "name": "OKC",
      "network": "okc",
      "nativeCurrency": {
        "decimals": 18,
        "name": "OKT",
        "symbol": "OKT"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://exchainrpc.okex.org"
          ]
        },
        "public": {
          "http": [
            "https://exchainrpc.okex.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "oklink",
          "url": "https://www.oklink.com/okc"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 10364792
        }
      }
    }
  },
  {
    "id": 98,
    "meta": {
      "id": 204,
      "name": "opBNB",
      "network": "opBNB Mainnet",
      "nativeCurrency": {
        "name": "BNB",
        "symbol": "BNB",
        "decimals": 18
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://opbnb-mainnet-rpc.bnbchain.org"
          ]
        },
        "default": {
          "http": [
            "https://opbnb-mainnet-rpc.bnbchain.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "opbnbscan",
          "url": "https://mainnet.opbnbscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 512881
        }
      }
    }
  },
  {
    "id": 99,
    "meta": {
      "id": 5611,
      "name": "opBNB Testnet",
      "network": "opBNB Testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "tBNB",
        "symbol": "tBNB"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://opbnb-testnet-rpc.bnbchain.org"
          ]
        },
        "default": {
          "http": [
            "https://opbnb-testnet-rpc.bnbchain.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "opbnbscan",
          "url": "https://opbnbscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 3705108
        }
      },
      "testnet": true
    }
  },
  {
    "id": 100,
    "meta": {
      "id": 10,
      "name": "OP Mainnet",
      "network": "optimism",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://opt-mainnet.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://opt-mainnet.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://optimism-mainnet.infura.io/v3"
          ],
          "webSocket": [
            "wss://optimism-mainnet.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://mainnet.optimism.io"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.optimism.io"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Etherscan",
          "url": "https://optimistic.etherscan.io"
        },
        "default": {
          "name": "Optimism Explorer",
          "url": "https://explorer.optimism.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 4286263
        }
      },
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 101,
    "meta": {
      "id": 420,
      "name": "Optimism Goerli",
      "network": "optimism-goerli",
      "nativeCurrency": {
        "name": "Goerli Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://opt-goerli.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://opt-goerli.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://optimism-goerli.infura.io/v3"
          ],
          "webSocket": [
            "wss://optimism-goerli.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://goerli.optimism.io"
          ]
        },
        "public": {
          "http": [
            "https://goerli.optimism.io"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Etherscan",
          "url": "https://goerli-optimism.etherscan.io"
        },
        "default": {
          "name": "Etherscan",
          "url": "https://goerli-optimism.etherscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 49461
        }
      },
      "testnet": true,
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 102,
    "meta": {
      "id": 11155420,
      "name": "Optimism Sepolia",
      "network": "optimism-sepolia",
      "nativeCurrency": {
        "name": "Sepolia Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sepolia.optimism.io"
          ]
        },
        "public": {
          "http": [
            "https://sepolia.optimism.io"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "Blockscout",
          "url": "https://optimism-sepolia.blockscout.com"
        },
        "default": {
          "name": "Blockscout",
          "url": "https://optimism-sepolia.blockscout.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 1620204
        }
      },
      "testnet": true,
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 103,
    "meta": {
      "id": 424,
      "network": "pgn",
      "name": "PGN",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.publicgoods.network"
          ]
        },
        "public": {
          "http": [
            "https://rpc.publicgoods.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "PGN Explorer",
          "url": "https://explorer.publicgoods.network"
        },
        "blocksout": {
          "name": "PGN Explorer",
          "url": "https://explorer.publicgoods.network"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 3380209
        }
      },
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 104,
    "meta": {
      "id": 58008,
      "network": "pgn-testnet",
      "name": "PGN ",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sepolia.publicgoods.network"
          ]
        },
        "public": {
          "http": [
            "https://sepolia.publicgoods.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "PGN Testnet Explorer",
          "url": "https://explorer.sepolia.publicgoods.network"
        },
        "blocksout": {
          "name": "PGN Testnet Explorer",
          "url": "https://explorer.sepolia.publicgoods.network"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 3754925
        }
      },
      "testnet": true,
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 105,
    "meta": {
      "id": 242,
      "name": "Plinga",
      "network": "plinga",
      "nativeCurrency": {
        "name": "Plinga",
        "symbol": "PLINGA",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpcurl.mainnet.plgchain.com"
          ]
        },
        "public": {
          "http": [
            "https://rpcurl.mainnet.plgchain.com"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Plgscan",
          "url": "https://www.plgscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0x0989576160f2e7092908BB9479631b901060b6e4",
          "blockCreated": 204489
        }
      }
    }
  },
  {
    "id": 106,
    "meta": {
      "id": 137,
      "name": "Polygon",
      "network": "matic",
      "nativeCurrency": {
        "name": "MATIC",
        "symbol": "MATIC",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://polygon-mainnet.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://polygon-mainnet.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://polygon-mainnet.infura.io/v3"
          ],
          "webSocket": [
            "wss://polygon-mainnet.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://polygon-rpc.com"
          ]
        },
        "public": {
          "http": [
            "https://polygon-rpc.com"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "PolygonScan",
          "url": "https://polygonscan.com"
        },
        "default": {
          "name": "PolygonScan",
          "url": "https://polygonscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 25770160
        }
      }
    }
  },
  {
    "id": 107,
    "meta": {
      "id": 80001,
      "name": "Polygon Mumbai",
      "network": "maticmum",
      "nativeCurrency": {
        "name": "MATIC",
        "symbol": "MATIC",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://polygon-mumbai.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://polygon-mumbai.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://polygon-mumbai.infura.io/v3"
          ],
          "webSocket": [
            "wss://polygon-mumbai.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://rpc.ankr.com/polygon_mumbai"
          ]
        },
        "public": {
          "http": [
            "https://rpc.ankr.com/polygon_mumbai"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "PolygonScan",
          "url": "https://mumbai.polygonscan.com"
        },
        "default": {
          "name": "PolygonScan",
          "url": "https://mumbai.polygonscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 25770160
        }
      },
      "testnet": true
    }
  },
  {
    "id": 108,
    "meta": {
      "id": 1101,
      "name": "Polygon zkEVM",
      "network": "polygon-zkevm",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://zkevm-rpc.com"
          ]
        },
        "public": {
          "http": [
            "https://zkevm-rpc.com"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "PolygonScan",
          "url": "https://zkevm.polygonscan.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 57746
        }
      }
    }
  },
  {
    "id": 109,
    "meta": {
      "id": 1442,
      "name": "Polygon zkEVM Testnet",
      "network": "polygon-zkevm-testnet",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.public.zkevm-test.net"
          ]
        },
        "public": {
          "http": [
            "https://rpc.public.zkevm-test.net"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "Blockscout",
          "url": "https://explorer.public.zkevm-test.net"
        },
        "default": {
          "name": "PolygonScan",
          "url": "https://testnet-zkevm.polygonscan.com"
        }
      },
      "testnet": true,
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 525686
        }
      }
    }
  },
  {
    "id": 110,
    "meta": {
      "id": 369,
      "network": "pulsechain",
      "name": "PulseChain",
      "nativeCurrency": {
        "name": "Pulse",
        "symbol": "PLS",
        "decimals": 18
      },
      "testnet": false,
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.pulsechain.com"
          ],
          "webSocket": [
            "wss://ws.pulsechain.com"
          ]
        },
        "public": {
          "http": [
            "https://rpc.pulsechain.com"
          ],
          "webSocket": [
            "wss://ws.pulsechain.com"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "PulseScan",
          "url": "https://scan.pulsechain.com"
        }
      },
      "contracts": {
        "ensRegistry": {
          "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 14353601
        }
      }
    }
  },
  {
    "id": 111,
    "meta": {
      "id": 943,
      "network": "pulsechainV4",
      "name": "PulseChain V4",
      "testnet": true,
      "nativeCurrency": {
        "name": "V4 Pulse",
        "symbol": "v4PLS",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.v4.testnet.pulsechain.com"
          ],
          "webSocket": [
            "wss://ws.v4.testnet.pulsechain.com"
          ]
        },
        "public": {
          "http": [
            "https://rpc.v4.testnet.pulsechain.com"
          ],
          "webSocket": [
            "wss://ws.v4.testnet.pulsechain.com"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "PulseScan",
          "url": "https://scan.v4.testnet.pulsechain.com"
        }
      },
      "contracts": {
        "ensRegistry": {
          "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 14353601
        }
      }
    }
  },
  {
    "id": 112,
    "meta": {
      "id": 35441,
      "name": "Q Mainnet",
      "network": "q-mainnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Q",
        "symbol": "Q"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.q.org"
          ]
        },
        "public": {
          "http": [
            "https://rpc.q.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Q Mainnet Explorer",
          "url": "https://explorer.q.org"
        }
      }
    }
  },
  {
    "id": 113,
    "meta": {
      "id": 35443,
      "name": "Q Testnet",
      "network": "q-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Q",
        "symbol": "Q"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.qtestnet.org"
          ]
        },
        "public": {
          "http": [
            "https://rpc.qtestnet.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Q Testnet Explorer",
          "url": "https://explorer.qtestnet.org"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 114,
    "meta": {
      "id": 570,
      "name": "Rollux Mainnet",
      "network": "rollux",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Syscoin",
        "symbol": "SYS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.rollux.com"
          ],
          "webSocket": [
            "wss://rpc.rollux.com/wss"
          ]
        },
        "public": {
          "http": [
            "https://rollux.public-rpc.com"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "RolluxExplorer",
          "url": "https://explorer.rollux.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 119222
        }
      }
    }
  },
  {
    "id": 115,
    "meta": {
      "id": 57000,
      "name": "Rollux Testnet",
      "network": "rollux-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Syscoin",
        "symbol": "SYS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc-tanenbaum.rollux.com/"
          ],
          "webSocket": [
            "wss://rpc-tanenbaum.rollux.com/wss"
          ]
        },
        "public": {
          "http": [
            "https://rpc-tanenbaum.rollux.com/"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "RolluxTestnetExplorer",
          "url": "https://rollux.tanenbaum.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 1813675
        }
      }
    }
  },
  {
    "id": 116,
    "meta": {
      "id": 2020,
      "name": "Ronin",
      "network": "ronin",
      "nativeCurrency": {
        "name": "RON",
        "symbol": "RON",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://api.roninchain.com/rpc"
          ]
        },
        "public": {
          "http": [
            "https://api.roninchain.com/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Ronin Explorer",
          "url": "https://app.roninchain.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 26023535
        }
      }
    }
  },
  {
    "id": 117,
    "meta": {
      "id": 30,
      "name": "Rootstock Mainnet",
      "network": "rootstock",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Rootstock Bitcoin",
        "symbol": "RBTC"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://public-node.rsk.co"
          ]
        },
        "default": {
          "http": [
            "https://public-node.rsk.co"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "Blockscout",
          "url": "https://rootstock.blockscout.com"
        },
        "default": {
          "name": "RSK Explorer",
          "url": "https://explorer.rsk.co"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 4249540
        }
      }
    }
  },
  {
    "id": 118,
    "meta": {
      "id": 2021,
      "name": "Saigon Testnet",
      "network": "saigon",
      "nativeCurrency": {
        "name": "RON",
        "symbol": "RON",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://saigon-testnet.roninchain.com/rpc"
          ]
        },
        "public": {
          "http": [
            "https://saigon-testnet.roninchain.com/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Saigon Explorer",
          "url": "https://saigon-explorer.roninchain.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 18736871
        }
      },
      "testnet": true
    }
  },
  {
    "id": 119,
    "meta": {
      "id": 23294,
      "name": "Oasis Sapphire",
      "network": "sapphire",
      "nativeCurrency": {
        "name": "Sapphire Rose",
        "symbol": "ROSE",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sapphire.oasis.io"
          ],
          "webSocket": [
            "wss://sapphire.oasis.io/ws"
          ]
        },
        "public": {
          "http": [
            "https://sapphire.oasis.io"
          ],
          "webSocket": [
            "wss://sapphire.oasis.io/ws"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Oasis Sapphire Explorer",
          "url": "https://explorer.sapphire.oasis.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 734531
        }
      }
    }
  },
  {
    "id": 120,
    "meta": {
      "id": 23295,
      "name": "Oasis Sapphire Testnet",
      "network": "sapphire-testnet",
      "nativeCurrency": {
        "name": "Sapphire Test Rose",
        "symbol": "TEST",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://testnet.sapphire.oasis.dev"
          ],
          "webSocket": [
            "wss://testnet.sapphire.oasis.dev/ws"
          ]
        },
        "public": {
          "http": [
            "https://testnet.sapphire.oasis.dev"
          ],
          "webSocket": [
            "wss://testnet.sapphire.oasis.dev/ws"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Oasis Sapphire Testnet Explorer",
          "url": "https://testnet.explorer.sapphire.oasis.dev"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 121,
    "meta": {
      "id": 534352,
      "name": "Scroll",
      "network": "scroll",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.scroll.io"
          ],
          "webSocket": [
            "wss://wss-rpc.scroll.io/ws"
          ]
        },
        "public": {
          "http": [
            "https://rpc.scroll.io"
          ],
          "webSocket": [
            "wss://wss-rpc.scroll.io/ws"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Scrollscan",
          "url": "https://scrollscan.com"
        },
        "blockscout": {
          "name": "Blockscout",
          "url": "https://blockscout.scroll.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 14
        }
      },
      "testnet": false
    }
  },
  {
    "id": 122,
    "meta": {
      "id": 534351,
      "name": "Scroll Sepolia",
      "network": "scroll-sepolia",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sepolia-rpc.scroll.io"
          ]
        },
        "public": {
          "http": [
            "https://sepolia-rpc.scroll.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Blockscout",
          "url": "https://sepolia-blockscout.scroll.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 9473
        }
      },
      "testnet": true
    }
  },
  {
    "id": 123,
    "meta": {
      "id": 534353,
      "name": "Scroll Testnet",
      "network": "scroll-testnet",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://alpha-rpc.scroll.io/l2"
          ],
          "webSocket": [
            "wss://alpha-rpc.scroll.io/l2/ws"
          ]
        },
        "public": {
          "http": [
            "https://alpha-rpc.scroll.io/l2"
          ],
          "webSocket": [
            "wss://alpha-rpc.scroll.io/l2/ws"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Blockscout",
          "url": "https://blockscout.scroll.io"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 124,
    "meta": {
      "id": 11155111,
      "network": "sepolia",
      "name": "Sepolia",
      "nativeCurrency": {
        "name": "Sepolia Ether",
        "symbol": "SEP",
        "decimals": 18
      },
      "rpcUrls": {
        "alchemy": {
          "http": [
            "https://eth-sepolia.g.alchemy.com/v2"
          ],
          "webSocket": [
            "wss://eth-sepolia.g.alchemy.com/v2"
          ]
        },
        "infura": {
          "http": [
            "https://sepolia.infura.io/v3"
          ],
          "webSocket": [
            "wss://sepolia.infura.io/ws/v3"
          ]
        },
        "default": {
          "http": [
            "https://rpc.sepolia.org"
          ]
        },
        "public": {
          "http": [
            "https://rpc.sepolia.org"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Etherscan",
          "url": "https://sepolia.etherscan.io"
        },
        "default": {
          "name": "Etherscan",
          "url": "https://sepolia.etherscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xca11bde05977b3631167028862be2a173976ca11",
          "blockCreated": 751532
        },
        "ensRegistry": {
          "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        "ensUniversalResolver": {
          "address": "0x21B000Fd62a880b2125A61e36a284BB757b76025",
          "blockCreated": 3914906
        }
      },
      "testnet": true
    }
  },
  {
    "id": 125,
    "meta": {
      "id": 8082,
      "name": "Shardeum Sphinx",
      "network": "shmSphinx",
      "nativeCurrency": {
        "name": "SHARDEUM",
        "symbol": "SHM",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sphinx.shardeum.org"
          ]
        },
        "public": {
          "http": [
            "https://sphinx.shardeum.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Shardeum Explorer",
          "url": "https://explorer-sphinx.shardeum.org"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 126,
    "meta": {
      "id": 109,
      "name": "Shibarium",
      "network": "shibarium",
      "nativeCurrency": {
        "name": "Bone",
        "symbol": "BONE",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.shibrpc.com"
          ]
        },
        "public": {
          "http": [
            "https://rpc.shibrpc.com"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "Blockscout",
          "url": "https://shibariumscan.io"
        },
        "default": {
          "name": "Blockscout",
          "url": "https://shibariumscan.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0x864Bf681ADD6052395188A89101A1B37d3B4C961",
          "blockCreated": 265900
        }
      }
    }
  },
  {
    "id": 127,
    "meta": {
      "id": 148,
      "name": "Shimmer",
      "network": "shimmer",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Shimmer",
        "symbol": "SMR"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://json-rpc.evm.shimmer.network"
          ]
        },
        "default": {
          "http": [
            "https://json-rpc.evm.shimmer.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Shimmer Network Explorer",
          "url": "https://explorer.evm.shimmer.network"
        }
      }
    }
  },
  {
    "id": 128,
    "meta": {
      "id": 1073,
      "name": "Shimmer Testnet",
      "network": "shimmer-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Shimmer",
        "symbol": "SMR"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://json-rpc.evm.testnet.shimmer.network"
          ]
        },
        "default": {
          "http": [
            "https://json-rpc.evm.testnet.shimmer.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Shimmer Network Explorer",
          "url": "https://explorer.evm.testnet.shimmer.network"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 129,
    "meta": {
      "id": 391845894,
      "name": "SKALE | Block Brawlers",
      "network": "skale-brawl",
      "nativeCurrency": {
        "name": "BRAWL",
        "symbol": "BRAWL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/frayed-decent-antares"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/frayed-decent-antares"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {}
    }
  },
  {
    "id": 130,
    "meta": {
      "id": 1564830818,
      "name": "SKALE | Calypso NFT Hub",
      "network": "skale-calypso",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 3107626
        }
      }
    }
  },
  {
    "id": 131,
    "meta": {
      "id": 344106930,
      "name": "SKALE | Calypso NFT Hub Testnet",
      "network": "skale-calypso-testnet",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar"
          ]
        },
        "public": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 2131424
        }
      },
      "testnet": true
    }
  },
  {
    "id": 132,
    "meta": {
      "id": 1351057110,
      "name": "SKALE | Chaos Testnet",
      "network": "skale-chaos-testnet",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix"
          ]
        },
        "public": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 1192202
        }
      },
      "testnet": true
    }
  },
  {
    "id": 133,
    "meta": {
      "id": 1026062157,
      "name": "SKALE | CryptoBlades",
      "network": "skale-cryptoblades",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {}
    }
  },
  {
    "id": 134,
    "meta": {
      "id": 2046399126,
      "name": "SKALE | Crypto Colosseum",
      "network": "skale-crypto-coloseeum",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {}
    }
  },
  {
    "id": 135,
    "meta": {
      "id": 2046399126,
      "name": "SKALE | Europa Liquidity Hub",
      "network": "skale-europa",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/elated-tan-skat"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/elated-tan-skat"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 3113495
        }
      }
    }
  },
  {
    "id": 136,
    "meta": {
      "id": 476158412,
      "name": "SKALE | Europa Liquidity Hub Testnet",
      "network": "skale-europa-testnet",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor"
          ]
        },
        "public": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 2071911
        }
      },
      "testnet": true
    }
  },
  {
    "id": 137,
    "meta": {
      "id": 2139927552,
      "name": "SKALE | Exorde",
      "network": "skale-exorde",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/light-vast-diphda"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/light-vast-diphda"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {}
    }
  },
  {
    "id": 138,
    "meta": {
      "id": 1273227453,
      "name": "SKALE | Human Protocol",
      "network": "skale-human-protocol",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/wan-red-ain"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/wan-red-ain"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://wan-red-ain.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://wan-red-ain.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {}
    }
  },
  {
    "id": 139,
    "meta": {
      "id": 1482601649,
      "name": "SKALE | Nebula Gaming Hub",
      "network": "skale-nebula",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/green-giddy-denebola"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/green-giddy-denebola"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 2372986
        }
      }
    }
  },
  {
    "id": 140,
    "meta": {
      "id": 503129905,
      "name": "SKALE | Nebula Gaming Hub Testnet",
      "network": "skale-nebula-testnet",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"
          ]
        },
        "public": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 2205882
        }
      },
      "testnet": true
    }
  },
  {
    "id": 141,
    "meta": {
      "id": 278611351,
      "name": "SKALE | Razor Network",
      "network": "skale-razor",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {}
    }
  },
  {
    "id": 142,
    "meta": {
      "id": 1350216234,
      "name": "SKALE | Titan Community Hub",
      "network": "skale-titan",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.skalenodes.com/v1/parallel-stormy-spica"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.skalenodes.com/v1/parallel-stormy-spica"
          ],
          "webSocket": [
            "wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 2076458
        }
      }
    }
  },
  {
    "id": 143,
    "meta": {
      "id": 1517929550,
      "name": "SKALE | Titan Community Hub Testnet",
      "network": "skale-titan-testnet",
      "nativeCurrency": {
        "name": "sFUEL",
        "symbol": "sFUEL",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar"
          ]
        },
        "public": {
          "http": [
            "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"
          ],
          "webSocket": [
            "wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar"
          ]
        }
      },
      "blockExplorers": {
        "blockscout": {
          "name": "SKALE Explorer",
          "url": "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com"
        },
        "default": {
          "name": "SKALE Explorer",
          "url": "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 2085155
        }
      },
      "testnet": true
    }
  },
  {
    "id": 144,
    "meta": {
      "id": 19,
      "name": "Songbird Mainnet",
      "network": "songbird-mainnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "songbird",
        "symbol": "SGB"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://songbird-api.flare.network/ext/C/rpc"
          ]
        },
        "public": {
          "http": [
            "https://songbird-api.flare.network/ext/C/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Songbird Explorer",
          "url": "https://songbird-explorer.flare.network"
        }
      }
    }
  },
  {
    "id": 145,
    "meta": {
      "id": 16,
      "name": "Coston",
      "network": "coston",
      "nativeCurrency": {
        "decimals": 18,
        "name": "costonflare",
        "symbol": "CFLR"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://coston-api.flare.network/ext/C/rpc"
          ]
        },
        "public": {
          "http": [
            "https://coston-api.flare.network/ext/C/rpc"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Coston Explorer",
          "url": "https://coston-explorer.flare.network"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 146,
    "meta": {
      "id": 88882,
      "name": "Chiliz Spicy Testnet",
      "network": "chiliz-spicy-Testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "CHZ",
        "symbol": "CHZ"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://spicy-rpc.chiliz.com",
            "https://chiliz-spicy.publicnode.com"
          ],
          "webSocket": [
            "wss://spicy-rpc-ws.chiliz.com",
            "wss://chiliz-spicy.publicnode.com"
          ]
        },
        "public": {
          "http": [
            "https://spicy-rpc.chiliz.com",
            "https://chiliz-spicy.publicnode.com"
          ],
          "webSocket": [
            "wss://spicy-rpc-ws.chiliz.com",
            "wss://chiliz-spicy.publicnode.com"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Chiliz Explorer",
          "url": "http://spicy-explorer.chiliz.com"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 147,
    "meta": {
      "id": 57,
      "name": "Syscoin Mainnet",
      "network": "syscoin",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Syscoin",
        "symbol": "SYS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.syscoin.org"
          ],
          "webSocket": [
            "wss://rpc.syscoin.org/wss"
          ]
        },
        "public": {
          "http": [
            "https://rpc.syscoin.org"
          ],
          "webSocket": [
            "wss://rpc.syscoin.org/wss"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "SyscoinExplorer",
          "url": "https://explorer.syscoin.org"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 287139
        }
      }
    }
  },
  {
    "id": 148,
    "meta": {
      "id": 5700,
      "name": "Syscoin Tanenbaum Testnet",
      "network": "syscoin-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Syscoin",
        "symbol": "SYS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.tanenbaum.io"
          ],
          "webSocket": [
            "wss://rpc.tanenbaum.io/wss"
          ]
        },
        "public": {
          "http": [
            "https://rpc.tanenbaum.io"
          ],
          "webSocket": [
            "wss://rpc.tanenbaum.io/wss"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "SyscoinTestnetExplorer",
          "url": "https://tanenbaum.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 271288
        }
      }
    }
  },
  {
    "id": 149,
    "meta": {
      "id": 167007,
      "name": "Taiko Jolnir L2",
      "network": "tko-jolnir",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://jolnir.taiko.xyz"
          ]
        },
        "public": {
          "http": [
            "https://jolnir.taiko.xyz"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "blockscout",
          "url": "https://explorer.jolnir.taiko.xyz"
        }
      }
    }
  },
  {
    "id": 150,
    "meta": {
      "id": 167005,
      "name": "Taiko (Alpha-3 Testnet)",
      "network": "taiko-sepolia",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.test.taiko.xyz"
          ]
        },
        "public": {
          "http": [
            "https://rpc.test.taiko.xyz"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "blockscout",
          "url": "https://explorer.test.taiko.xyz"
        }
      }
    }
  },
  {
    "id": 151,
    "meta": {
      "id": 841,
      "name": "Taraxa Mainnet",
      "network": "taraxa",
      "nativeCurrency": {
        "name": "Tara",
        "symbol": "TARA",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.mainnet.taraxa.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.mainnet.taraxa.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Taraxa Explorer",
          "url": "https://explorer.mainnet.taraxa.io"
        }
      }
    }
  },
  {
    "id": 152,
    "meta": {
      "id": 842,
      "name": "Taraxa Testnet",
      "network": "taraxa-testnet",
      "nativeCurrency": {
        "name": "Tara",
        "symbol": "TARA",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.testnet.taraxa.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.testnet.taraxa.io"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Taraxa Explorer",
          "url": "https://explorer.testnet.taraxa.io"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 153,
    "meta": {
      "id": 40,
      "name": "Telos",
      "network": "telos",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Telos",
        "symbol": "TLOS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.telos.net/evm"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.telos.net/evm"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Teloscan",
          "url": "https://www.teloscan.io/"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 246530709
        }
      }
    }
  },
  {
    "id": 154,
    "meta": {
      "id": 41,
      "name": "Telos",
      "network": "telosTestnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Telos",
        "symbol": "TLOS"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://testnet.telos.net/evm"
          ]
        },
        "public": {
          "http": [
            "https://testnet.telos.net/evm"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Teloscan (testnet)",
          "url": "https://testnet.teloscan.io/"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 155,
    "meta": {
      "id": 1559,
      "name": "Tenet",
      "network": "tenet-mainnet",
      "nativeCurrency": {
        "name": "TENET",
        "symbol": "TENET",
        "decimals": 18
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://rpc.tenet.org"
          ]
        },
        "default": {
          "http": [
            "https://rpc.tenet.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "TenetScan Mainnet",
          "url": "https://tenetscan.io"
        }
      },
      "testnet": false
    }
  },
  {
    "id": 156,
    "meta": {
      "id": 997,
      "name": "5ireChain Thunder Testnet",
      "network": "5ireChain",
      "nativeCurrency": {
        "name": "5ire Token",
        "symbol": "5IRE",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc-testnet.5ire.network"
          ]
        },
        "public": {
          "http": [
            "https://rpc-testnet.5ire.network"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "5ireChain Explorer",
          "url": "https://explorer.5ire.network"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 157,
    "meta": {
      "id": 100009,
      "name": "Vechain",
      "network": "vechain",
      "nativeCurrency": {
        "name": "VeChain",
        "symbol": "VET",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.vechain.org"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.vechain.org"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Vechain Explorer",
          "url": "https://explore.vechain.org"
        },
        "vechainStats": {
          "name": "Vechain Stats",
          "url": "https://vechainstats.com"
        }
      }
    }
  },
  {
    "id": 158,
    "meta": {
      "id": 888,
      "name": "Wanchain",
      "network": "wanchain",
      "nativeCurrency": {
        "name": "WANCHAIN",
        "symbol": "WAN",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://gwan-ssl.wandevs.org:56891",
            "https://gwan2-ssl.wandevs.org"
          ]
        },
        "public": {
          "http": [
            "https://gwan-ssl.wandevs.org:56891",
            "https://gwan2-ssl.wandevs.org"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "WanScan",
          "url": "https://wanscan.org"
        },
        "default": {
          "name": "WanScan",
          "url": "https://wanscan.org"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
          "blockCreated": 25312390
        }
      }
    }
  },
  {
    "id": 159,
    "meta": {
      "id": 999,
      "name": "Wanchain Testnet",
      "network": "wanchainTestnet",
      "nativeCurrency": {
        "name": "WANCHAIN",
        "symbol": "WANt",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://gwan-ssl.wandevs.org:46891"
          ]
        },
        "public": {
          "http": [
            "https://gwan-ssl.wandevs.org:46891"
          ]
        }
      },
      "blockExplorers": {
        "etherscan": {
          "name": "WanScanTest",
          "url": "https://wanscan.org"
        },
        "default": {
          "name": "WanScanTest",
          "url": "https://wanscan.org"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
          "blockCreated": 24743448
        }
      },
      "testnet": true
    }
  },
  {
    "id": 160,
    "meta": {
      "id": 50,
      "name": "XinFin Network",
      "network": "xdc",
      "nativeCurrency": {
        "decimals": 18,
        "name": "XDC",
        "symbol": "XDC"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.xinfin.network"
          ]
        },
        "public": {
          "http": [
            "https://rpc.xinfin.network"
          ]
        }
      },
      "blockExplorers": {
        "xinfin": {
          "name": "XinFin",
          "url": "https://explorer.xinfin.network"
        },
        "default": {
          "name": "Blocksscan",
          "url": "https://xdc.blocksscan.io"
        }
      }
    }
  },
  {
    "id": 161,
    "meta": {
      "id": 51,
      "name": "Apothem Network",
      "network": "xdc-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "TXDC",
        "symbol": "TXDC"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://erpc.apothem.network"
          ]
        },
        "public": {
          "http": [
            "https://erpc.apothem.network"
          ]
        }
      },
      "blockExplorers": {
        "xinfin": {
          "name": "XinFin",
          "url": "https://explorer.apothem.network"
        },
        "default": {
          "name": "Blocksscan",
          "url": "https://apothem.blocksscan.io"
        }
      }
    }
  },
  {
    "id": 162,
    "meta": {
      "id": 7001,
      "name": "ZetaChain Athens Testnet",
      "network": "zetachain-athens-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Zeta",
        "symbol": "aZETA"
      },
      "rpcUrls": {
        "public": {
          "http": [
            "https://zetachain-athens-evm.blockpi.network/v1/rpc/public"
          ]
        },
        "default": {
          "http": [
            "https://zetachain-athens-evm.blockpi.network/v1/rpc/public"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "ZetaScan",
          "url": "https://athens3.explorer.zetachain.com"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 163,
    "meta": {
      "id": 1337803,
      "network": "zhejiang",
      "name": "Zhejiang",
      "nativeCurrency": {
        "name": "Zhejiang Ether",
        "symbol": "ZhejETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.zhejiang.ethpandaops.io"
          ]
        },
        "public": {
          "http": [
            "https://rpc.zhejiang.ethpandaops.io"
          ]
        }
      },
      "blockExplorers": {
        "beaconchain": {
          "name": "Etherscan",
          "url": "https://zhejiang.beaconcha.in"
        },
        "blockscout": {
          "name": "Blockscout",
          "url": "https://blockscout.com/eth/zhejiang-testnet"
        },
        "default": {
          "name": "Beaconchain",
          "url": "https://zhejiang.beaconcha.in"
        }
      },
      "testnet": true
    }
  },
  {
    "id": 164,
    "meta": {
      "id": 324,
      "name": "zkSync Era",
      "network": "zksync-era",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Ether",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://mainnet.era.zksync.io"
          ],
          "webSocket": [
            "wss://mainnet.era.zksync.io/ws"
          ]
        },
        "public": {
          "http": [
            "https://mainnet.era.zksync.io"
          ],
          "webSocket": [
            "wss://mainnet.era.zksync.io/ws"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "zkExplorer",
          "url": "https://explorer.zksync.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xF9cda624FBC7e059355ce98a31693d299FACd963"
        }
      },
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        },
        "transactionRequest": {
          "exclude": [
            "customSignature",
            "factoryDeps",
            "gasPerPubdata",
            "paymaster",
            "paymasterInput"
          ],
          "type": "transactionRequest"
        }
      },
      "serializers": {}
    }
  },
  {
    "id": 165,
    "meta": {
      "id": 280,
      "name": "zkSync Era Testnet",
      "network": "zksync-era-testnet",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://testnet.era.zksync.dev"
          ],
          "webSocket": [
            "wss://testnet.era.zksync.dev/ws"
          ]
        },
        "public": {
          "http": [
            "https://testnet.era.zksync.dev"
          ],
          "webSocket": [
            "wss://testnet.era.zksync.dev/ws"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "zkExplorer",
          "url": "https://goerli.explorer.zksync.io"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xF9cda624FBC7e059355ce98a31693d299FACd963"
        }
      },
      "testnet": true,
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        },
        "transactionRequest": {
          "exclude": [
            "customSignature",
            "factoryDeps",
            "gasPerPubdata",
            "paymaster",
            "paymasterInput"
          ],
          "type": "transactionRequest"
        }
      },
      "serializers": {}
    }
  },
  {
    "id": 166,
    "meta": {
      "id": 7777777,
      "name": "Zora",
      "network": "zora",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Ether",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://rpc.zora.energy"
          ],
          "webSocket": [
            "wss://rpc.zora.energy"
          ]
        },
        "public": {
          "http": [
            "https://rpc.zora.energy"
          ],
          "webSocket": [
            "wss://rpc.zora.energy"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Explorer",
          "url": "https://explorer.zora.energy"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 5882
        }
      },
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 167,
    "meta": {
      "id": 999999999,
      "name": "Zora Sepolia",
      "network": "zora-sepolia",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Zora Sepolia",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://sepolia.rpc.zora.energy"
          ],
          "webSocket": [
            "wss://sepolia.rpc.zora.energy"
          ]
        },
        "public": {
          "http": [
            "https://sepolia.rpc.zora.energy"
          ],
          "webSocket": [
            "wss://sepolia.rpc.zora.energy"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Zora Sepolia Explorer",
          "url": "https://sepolia.explorer.zora.energy/"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 83160
        }
      },
      "testnet": true,
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  },
  {
    "id": 168,
    "meta": {
      "id": 999,
      "name": "Zora Goerli Testnet",
      "network": "zora-testnet",
      "nativeCurrency": {
        "decimals": 18,
        "name": "Zora Goerli",
        "symbol": "ETH"
      },
      "rpcUrls": {
        "default": {
          "http": [
            "https://testnet.rpc.zora.energy"
          ],
          "webSocket": [
            "wss://testnet.rpc.zora.energy"
          ]
        },
        "public": {
          "http": [
            "https://testnet.rpc.zora.energy"
          ],
          "webSocket": [
            "wss://testnet.rpc.zora.energy"
          ]
        }
      },
      "blockExplorers": {
        "default": {
          "name": "Explorer",
          "url": "https://testnet.explorer.zora.energy"
        }
      },
      "contracts": {
        "multicall3": {
          "address": "0xcA11bde05977b3631167028862bE2a173976CA11",
          "blockCreated": 189123
        }
      },
      "testnet": true,
      "formatters": {
        "block": {
          "type": "block"
        },
        "transaction": {
          "type": "transaction"
        },
        "transactionReceipt": {
          "type": "transactionReceipt"
        }
      }
    }
  }
]
```

# server run

```bash
cd server
bun i
bun run dev
```
