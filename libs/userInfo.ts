import { ImageSourcePropType } from "react-native";

export interface UserInfo {
  id: string;
  name: string;
  username?: string;
  email: string;

  // Account
  accountBalance: number;
  currency: string;
  formattedBalance: string;

  // Profile
  avatar?: ImageSourcePropType; // local path or remote URL
  phone?: string;
  country?: string;
  isVerified?: boolean;

  // Wallet / App status
  walletId?: string;
  kycLevel?: "none" | "basic" | "full";
  lastLogin?: string;

  notificationsEnabled?: boolean;
}

export const userInfo: UserInfo = {
  id: "usr_001",
  name: "Alex Morgan",
  username: "wallet",
  email: "favourvanderwaal@gmail.com",

  accountBalance: 42593.4,
  currency: "USD",
  formattedBalance: "$42,593.40",

  avatar: require("@/assets/img/profile.png"),
  phone: "+234 800 000 0000",
  country: "Nigeria",
  isVerified: true,

  walletId: "wallet_9X82KD",
  kycLevel: "basic",
  lastLogin: "2025-01-10T08:32:00Z",

  notificationsEnabled: true,
};
