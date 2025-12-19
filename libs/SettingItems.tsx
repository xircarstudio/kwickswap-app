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
};

export const AccountItems: SettingItem[] = [
  {
    id: 1,
    title: "Personal Info",
    subtitle: "Manage your details",
    color: colors.secondary,
    icon: <Ionicons name="person" size={20} color={colors.secondary} />,
    route: "/",
  },
  {
    id: 2,
    title: "Security",
    subtitle: "Password & PIN",
    color: colors.secondary,
    icon: <Ionicons name="lock-closed" size={20} color={colors.secondary} />,
    route: "/",
  },
];

export const PreferenceItems: SettingItem[] = [
  {
    id: 1,
    title: "Currency",
    subtitle: "USD - US Dollar",
    color: colors.secondary,
    icon: <Ionicons name="cash" size={20} color={colors.secondary} />,
    route: "/",
  },
  {
    id: 2,
    title: "Language",
    subtitle: "English",
    color: colors.secondary,
    icon: <Ionicons name="language" size={20} color={colors.secondary} />,
    route: "/",
  },
];
