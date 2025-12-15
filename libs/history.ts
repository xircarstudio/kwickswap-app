export type CurrencyType = "fiat" | "crypto";

export type CurrencyCode = "NGN" | "USD" | "BTC" | "ETH" | "USDT";

export interface ActivityItem {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  currencyAmount: number;
  currencyCode: CurrencyCode;
  currencyType: CurrencyType;
  change: number;
  amountColor?: string;
  type: string;
  image: any;
}

export const activities: ActivityItem[] = [
  {
    id: 1,
    title: "Netflix Subscriptions",
    subtitle: "Today, 09:41 AM",
    amount: "-₦5,000.00",
    currencyAmount: -5000,
    currencyCode: "NGN",
    currencyType: "fiat",
    change: -5000,
    amountColor: "#ff4d4d",
    type: "Payment",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 2,
    title: "Money Received",
    subtitle: "Today, 08:20 AM",
    amount: "+₦40,000.00",
    currencyAmount: 40000,
    currencyCode: "NGN",
    currencyType: "fiat",
    change: 40000,
    amountColor: "#00c853",
    type: "Transfer",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 3,
    title: "USDT Deposit",
    subtitle: "Today, 07:10 AM",
    amount: "+120.50 USDT",
    currencyAmount: 120.5,
    currencyCode: "USDT",
    currencyType: "crypto",
    change: 120.5,
    amountColor: "#00c853",
    type: "Crypto Deposit",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 4,
    title: "Airtime Purchase",
    subtitle: "Yesterday, 07:33 PM",
    amount: "-₦1,000.00",
    currencyAmount: -1000,
    currencyCode: "NGN",
    currencyType: "fiat",
    change: -1000,
    type: "Bills",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 5,
    title: "BTC Sent",
    subtitle: "Yesterday, 06:12 PM",
    amount: "-0.0023 BTC",
    currencyAmount: -0.0023,
    currencyCode: "BTC",
    currencyType: "crypto",
    change: -0.0023,
    amountColor: "#ff4d4d",
    type: "Crypto Transfer",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 6,
    title: "ETH Received",
    subtitle: "Yesterday, 04:55 PM",
    amount: "+0.85 ETH",
    currencyAmount: 0.85,
    currencyCode: "ETH",
    currencyType: "crypto",
    change: 0.85,
    amountColor: "#00c853",
    type: "Crypto Transfer",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 7,
    title: "Uber Ride",
    subtitle: "Mon, 04:10 PM",
    amount: "-₦3,200.00",
    currencyAmount: -3200,
    currencyCode: "NGN",
    currencyType: "fiat",
    change: -3200,
    type: "Transport",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 8,
    title: "Salary Credit",
    subtitle: "Mon, 01:13 PM",
    amount: "+₦120,000.00",
    currencyAmount: 120000,
    currencyCode: "NGN",
    currencyType: "fiat",
    change: 120000,
    amountColor: "#00c853",
    type: "Income",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 9,
    title: "Crypto Swap",
    subtitle: "Sun, 11:40 PM",
    amount: "-50 USDT → ETH",
    currencyAmount: -50,
    currencyCode: "USDT",
    currencyType: "crypto",
    change: -50,
    type: "Swap",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 10,
    title: "DSTV Subscription",
    subtitle: "Sun, 09:00 PM",
    amount: "-₦7,000.00",
    currencyAmount: -7000,
    currencyCode: "NGN",
    currencyType: "fiat",
    change: -7000,
    type: "Bills",
    image: require("@/assets/images/icon.png"),
  },
];
