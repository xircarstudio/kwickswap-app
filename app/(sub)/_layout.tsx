import { colors } from "@/assets/styles/styles";
import CustomHeader from "@/components/ui/CustomHeader";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs, useSegments } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LayoutSub() {
  const segments = useSegments();
  const activeRoute = segments[segments.length - 1];

  const headerConfig: Record<string, { title: string; rightIcon?: any }> = {
    send: { title: "Send Money", rightIcon: "scan-outline" },
    receive: { title: "Receive Funds", rightIcon: "share-outline" },
    bills: { title: "Pay Bills" },
    buy: { title: "Buy Crypto", rightIcon: "help-circle-outline" },
  };

  const currentHeader = headerConfig[activeRoute as string] ?? {
    title: "Wallet",
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {/* 🔥 Dynamic Header */}
      <CustomHeader
        title={currentHeader.title}
        rightIcon={currentHeader.rightIcon}
        onRightPress={() => console.log("Right action")}
      />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.muted,
          tabBarStyle: {
            backgroundColor: colors.primary,
            height: 59,
            borderTopWidth: 1,
            borderTopColor: "#ffffff0a",
          },
          tabBarLabelStyle: { fontSize: 10 },
        }}
      >
        <Tabs.Screen
          name="send"
          options={{
            title: "Send",
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
                name={focused ? "send" : "send-o"}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="receive"
          options={{
            title: "Receive",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "download" : "download-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bills"
          options={{
            title: "Bills",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "receipt" : "receipt-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="buy"
          options={{
            title: "Buy",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "cart-sharp" : "cart-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
