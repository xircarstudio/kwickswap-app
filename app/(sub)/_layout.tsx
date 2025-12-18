import { colors } from "@/assets/styles/styles";
import { createTab } from "@/utils/dashTab";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LayoutSub() {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Tabs
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarStyle: {
            backgroundColor: colors.primary,
            height: 59,
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1,
            borderTopColor: "#ffffff0a",
          },

          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          },
        }}
      >
        {createTab("send", "Send", (color, size, focused) => (
          <FontAwesome
            name={focused ? "send" : "send-o"}
            size={size}
            color={color}
          />
        ))}

        {createTab("receive", "Receive", (color, size, focused) => (
          <Ionicons
            name={focused ? "download" : "download-outline"}
            size={size}
            color={color}
          />
        ))}

        {createTab("bills", "Bills", (color, size, focused) => (
          <Ionicons
            name={focused ? "receipt" : "receipt-outline"}
            size={size}
            color={color}
          />
        ))}

        {createTab("buy", "Buy", (color, size, focused) => (
          <Ionicons
            name={focused ? "cart-sharp" : "cart-outline"}
            size={size}
            color={color}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fabButton: {
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    elevation: 12, // Android shadow
  },

  fabLabel: {
    fontSize: 12,
    fontWeight: "700",
    marginTop: 28,
  },
});
