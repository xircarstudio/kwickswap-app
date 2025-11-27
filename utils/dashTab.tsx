import { colors } from "@/assets/styles/styles";
import { Tabs } from "expo-router";
import React from "react";

export function createTab(
  name: string,
  title: string,
  icon: (color: string, size: number, focused: boolean) => React.ReactNode
) {
  return (
    <Tabs.Screen
      key={name}
      name={name}
      options={{
        title,
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ size, focused }) =>
          icon(focused ? colors.secondary : colors.muted, size, focused),
      }}
    />
  );
}
