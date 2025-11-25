import { createTab } from "@/utils/dashTab";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 11,
        },
        tabBarStyle: {
          backgroundColor: "#020408F2",
          height: 90,
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        },
      }}
    >
      {createTab("index", "Home", (color, size, focused) => (
        <Octicons
          name={focused ? "home-fill" : "home"}
          size={size}
          color={color}
        />
      ))}

      {createTab("wallet", "Wallet", (color, size, focused) => (
        <Ionicons
          name={focused ? "wallet" : "wallet-outline"}
          size={size}
          color={color}
        />
      ))}

      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",

          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign
              name={focused ? "swap" : "swap"}
              size={size + 4}
              color={focused ? "#FF9900" : "#666666"}
            />
          ),

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "700",
            color: "#FF9900",
            position: "absolute",
            top: 38,
          },

          tabBarIconStyle: {
            // React Native styles
            position: "absolute",
            top: -20,
            width: "100%",
            height: "100%",

            backgroundColor: "#fff",

            borderRadius: 160,
            // shadow (iOS)
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            // shadow (Android)
            elevation: 4,
          },

          headerShown: false,
        }}
      />

      {createTab("cards", "Cards", (color, size, focused) => (
        <Ionicons
          name={focused ? "card" : "card-outline"}
          size={size}
          color={color}
        />
      ))}

      {createTab("profile", "Profile", (color, size, focused) => (
        <FontAwesome5
          name={focused ? "user-alt" : "user"}
          size={size}
          color={color}
        />
      ))}
    </Tabs>
  );
}
