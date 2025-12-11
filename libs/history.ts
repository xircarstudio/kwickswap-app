import { ImageSourcePropType } from "react-native";

export type ActivityItem = {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  amountColor?: string;
  type: string;
  image: ImageSourcePropType;
};

export const activities: ActivityItem[] = [
  {
    id: 1,
    title: "Netflix Subscription",
    subtitle: "Today, 09:41 AM",
    amount: "-N5,000.00",
    amountColor: "#ff4d4d",
    type: "Payment",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 2,
    title: "Money Received",
    subtitle: "Today, 08:20 AM",
    amount: "+N40,000.00",
    amountColor: "#00c853",
    type: "Transfer",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 3,
    title: "Airtime Purchase",
    subtitle: "Yesterday, 07:33 PM",
    amount: "-N1,000.00",
    type: "Bills",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 4,
    title: "Uber Ride",
    subtitle: "Yesterday, 04:10 PM",
    amount: "-N3,200.00",
    type: "Transport",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 5,
    title: "Salary Credit",
    subtitle: "Mon, 01:13 PM",
    amount: "+N120,000.00",
    amountColor: "#00c853",
    type: "Income",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: 6,
    title: "DSTV Subscription",
    subtitle: "Mon, 10:00 AM",
    amount: "-N7,000.00",
    type: "Bills",
    image: require("@/assets/images/icon.png"),
  },
];
