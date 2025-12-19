// lib/SettingItems.ts
import { colors } from "@/assets/styles/styles";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
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
    color: colors.info,
    icon: <Ionicons name="person" size={20} color={colors.info} />,
    route: "/",
  },
  {
    id: 2,
    title: "KYC Verification",
    color: colors.secondary,
    icon: <MaterialIcons name="verified" size={20} color={colors.secondary} />,
    route: "/",
  },

  {
    id: 3,
    title: "Security",
    subtitle: "Password & PIN",
    color: colors.purple,
    icon: (
      <MaterialCommunityIcons
        name="shield-key"
        size={20}
        color={colors.purple}
      />
    ),
    route: "/",
  },
];

export const PreferenceItems: SettingItem[] = [
  {
    id: 1,
    title: "Currency",
    subtitle: "USD - US Dollar",
    color: colors.warning,
    icon: <Ionicons name="cash" size={20} color={colors.warning} />,
    route: "/",
  },
  {
    id: 2,
    title: "Language",
    subtitle: "English",
    color: colors.ocean,
    icon: <Ionicons name="language" size={20} color={colors.ocean} />,
    route: "/",
  },

  {
    id: 3,
    title: "Notifications",
    color: colors.pink,
    icon: <Ionicons name="notifications" size={20} color={colors.pink} />,
    route: "/",
  },
];

export const SupportItems: SettingItem[] = [
  {
    id: 1,
    title: "Help Center",
    color: colors.info,
    icon: <Ionicons name="help-circle-sharp" size={20} color={colors.info} />,
    route: "/",
  },
  {
    id: 2,
    title: "Contact Support",
    color: colors.secondary,
    icon: <Ionicons name="chatbox" size={20} color={colors.secondary} />,
    route: "/",
  },
];

export const LegalItems: SettingItem[] = [
  {
    id: 1,
    title: "Terms & Conditions",
    color: colors.purple,
    icon: <FontAwesome5 name="file-invoice" size={20} color={colors.purple} />,
    route: "/",
  },
  {
    id: 2,
    title: "Privacy Policy",
    color: colors.ocean,
    icon: <Ionicons name="lock-closed" size={20} color={colors.ocean} />,
    route: "/",
  },
];
