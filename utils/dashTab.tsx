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
        tabBarActiveTintColor: "#00D68F",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarIcon: ({ size, focused }) =>
          icon(focused ? "#00D68F" : "#94A3B8", size, focused),
      }}
    />
  );
}
