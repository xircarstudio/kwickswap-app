// app/components/TabScreen.tsx
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  name: string;
  title: string;
  icon: (color: string, size: number) => React.ReactNode;
};

export default function TabScreen({ name, title, icon }: Props) {
  return (
    <Tabs.Screen
      name={name}
      options={{
        title,
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (
          <View className="items-center justify-center">
            {/* Icon */}
            {icon(focused ? "#00cc00" : color, size)}

            {/* Label */}
            <Text
              className={
                focused
                  ? "text-[#00cc00] text-[11px]"
                  : "text-gray-400 text-[11px]"
              }
            >
              {title}
            </Text>
          </View>
        ),
      }}
    />
  );
}
