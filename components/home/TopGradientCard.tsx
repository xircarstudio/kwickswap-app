import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

interface StatItem {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  text: string;
  bg?: string;
  border?: string;
  textColor?: string;
}

interface TopGradientCardProps {
  gradientColors?: any;
  balance: string;
  label?: string;
  labelIcon?: keyof typeof Ionicons.glyphMap;
  stats?: StatItem[];
}

export default function TopGradientCard({
  gradientColors = colors.gradients.top,
  balance,
  label = "Total Balance",
  labelIcon = "wallet-outline",
  stats = [],
}: TopGradientCardProps) {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 29,
      }}
      className="gap-4 border border-muted/20 p-8 items-center relative"
    >
      <View className="flex-row gap-5 items-center bg-muted/10 border border-muted/40 rounded-3xl px-8 py-2">
        <Text className="text-muted">{label}</Text>
        <Ionicons name={labelIcon} size={15} color={colors.muted} />
      </View>

      <Text className="text-light text-4xl">{balance}</Text>

      <View className="flex-row gap-3">
        {stats.map((item, index) => (
          <View
            key={index}
            className="gap-3 flex-row justify-center items-center rounded-2xl p-3"
            style={{
              backgroundColor: item.bg || "rgba(255,255,255,0.1)",
              borderColor: item.border || "rgba(255,255,255,0.1)",
              borderWidth: 1,
            }}
          >
            <Ionicons
              name={item.icon}
              size={14}
              color={item.iconColor || colors.muted}
            />
            <Text
              className="text-sm"
              style={{ color: item.textColor || colors.muted }}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}
