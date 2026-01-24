export type CryptoAsset = {
  id: string;
  name: string;
  symbol: string;
  network: string;
  fee: string;
  estimatedTime: string;
  changeUsd: number;
  price: number; // token price in USD
  usdValue: number; // 1 token = USD
  icon: any;
};

export const cryptoAssets: CryptoAsset[] = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    network: "Bitcoin Network",
    fee: "0.00025 BTC",
    estimatedTime: "10 – 30 mins",
    changeUsd: 1.84,
    price: 43250.75,
    usdValue: 43250.75,
    icon: require("@/assets/images/bitcoin.png"),
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    network: "Ethereum (ERC20)",
    fee: "0.003 ETH",
    estimatedTime: "2 – 5 mins",
    changeUsd: -0.62,
    price: 2385.4,
    usdValue: 2385.4,
    icon: require("@/assets/images/ethereum.png"),
  },
  {
    id: "usdt",
    name: "Tether",
    symbol: "USDT",
    network: "Ethereum (ERC20)",
    fee: "5 USDT",
    estimatedTime: "2 – 5 mins",
    changeUsd: 0.01,
    price: 1.0,
    usdValue: 1.0,
    icon: require("@/assets/images/usdt.png"),
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    network: "Solana Network",
    fee: "0.0005 SOL",
    estimatedTime: "5 – 10 secs",
    changeUsd: 2.37,
    price: 98.62,
    usdValue: 98.62,
    icon: require("@/assets/images/solana.png"),
  },
];
