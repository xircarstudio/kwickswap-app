// lib/SettingItems.ts
import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { Href } from "expo-router";
import React from "react";

export type SettingItem = {
  id: number;
  title: string;
  subtitle?: string;
  color: string;
  icon: React.ReactNode;
  route?: Href;
  default?: boolean;
};

export const Nots: SettingItem[] = [
  {
    id: 1,
    title: "Push Notifications",
    subtitle: "Enable or disable push notifications",
    color: colors.pink,
    icon: <Ionicons name="notifications" color={colors.pink} size={20} />,
    default: true,
  },
  {
    id: 2,
    title: "Transaction Alerts",
    subtitle: "Get notified about account activity",
    color: colors.ocean,
    icon: <Ionicons name="notifications" color={colors.ocean} size={20} />,
    default: false,
  },
  {
    id: 3,
    title: "Price Alerts",
    subtitle: "Get notified about price changes",
    color: colors.secondary,
    icon: <Ionicons name="bar-chart" color={colors.secondary} size={20} />,
    default: false,
  },
  {
    id: 4,
    title: "Bill Payment Reminders",
    subtitle: "Remind me of upcoming bills",
    color: colors.purple,
    icon: (
      <Ionicons name="calendar-clear-sharp" color={colors.purple} size={20} />
    ),
    default: false,
  },
  {
    id: 5,
    title: "Security Alerts",
    subtitle: "Important security notifications",
    color: colors.danger,
    icon: <Ionicons name="shield-half-sharp" color={colors.danger} size={20} />,
    default: false,
  },
  {
    id: 6,
    title: "Promotional Updates",
    subtitle: "Offers and new features",
    color: colors.warning,
    icon: <Ionicons name="newspaper" color={colors.warning} size={20} />,
    default: false,
  },
];
