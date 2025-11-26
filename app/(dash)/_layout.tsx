import { createTab } from "@/utils/dashTab";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: {
          backgroundColor: "#020408",
          height: 101,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#ffffff0a",
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 25,
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
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "700",
            color: "#fff",
            position: "absolute",
            top: 38,
          },
          tabBarButton: (props) => {
            const { accessibilityState, onPress } = props;
            const focused = accessibilityState?.selected;

            return (
              <>
                <View className="absolute top-[-10]">
                  <Shadow
                    distance={5}
                    startColor={"#00D68Fd8"}
                    endColor={"#00D68F10"}
                    offset={[0, 0]}
                  >
                    <TouchableOpacity
                      onPress={onPress}
                      activeOpacity={0.85}
                      style={[
                        styles.fabButton,
                        { backgroundColor: focused ? "#FF9900" : "#00D68F" },
                      ]}
                    >
                      <AntDesign name="swap" size={30} color="#003322" />
                    </TouchableOpacity>
                  </Shadow>
                </View>
                <Text
                  style={[
                    styles.fabLabel,
                    { color: focused ? "#FF9900" : "#666" },
                  ]}
                >
                  Swap
                </Text>
              </>
            );
          },
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
    marginTop: 12,
  },
});
