// lib/SettingItems.ts
import { colors } from "@/assets/styles/styles";
import {
  FontAwesome,
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

export const AccountSettingsItems: SettingItem[] = [
  {
    id: 1,
    title: "Profile",
    color: colors.info,
    icon: <Ionicons name="person-circle-sharp" size={20} color={colors.info} />,
    route: "/profile",
  },
  {
    id: 2,
    title: "Manage Subscriptions",
    color: colors.purple,
    icon: (
      <MaterialIcons name="subscriptions" size={20} color={colors.purple} />
    ),
    route: "/",
  },
  {
    id: 3,
    title: "KYC Verification",
    color: colors.secondary,
    icon: <MaterialIcons name="verified" size={20} color={colors.secondary} />,
    route: "/",
  },
];

export const PreferenceSettingsItems: SettingItem[] = [
  {
    id: 1,
    title: "Notification Settings",
    color: colors.pink,
    icon: <Ionicons name="notifications" size={20} color={colors.pink} />,
    route: "/",
  },
  {
    id: 2,
    title: "Currency & Language",
    color: colors.warning,
    icon: <Ionicons name="cash" size={20} color={colors.warning} />,
    route: "/",
  },
];

export const SupportSettingsItems: SettingItem[] = [
  {
    id: 1,
    title: "Help & Support",
    color: colors.warning,
    icon: (
      <Ionicons name="help-circle-sharp" size={20} color={colors.warning} />
    ),
    route: "/",
  },
];
export const SecuritySettingsItems: SettingItem[] = [
  {
    id: 1,
    title: "Security",
    color: colors.danger,
    icon: <Ionicons name="lock-closed" size={20} color={colors.danger} />,
    route: "/",
  },
];

export const FinanceSettingsItems: SettingItem[] = [
  {
    id: 1,
    title: "Connected Banks",
    color: colors.info,
    icon: (
      <MaterialCommunityIcons
        name="bank-transfer"
        size={20}
        color={colors.info}
      />
    ),
    route: "/",
  },
  {
    id: 2,
    title: "Virtual Cards",
    color: colors.purple,
    icon: (
      <FontAwesome name="credit-card-alt" size={20} color={colors.purple} />
    ),
    route: "/",
  },
];
