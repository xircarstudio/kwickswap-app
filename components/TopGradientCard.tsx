import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const TopGradientCard = () => {
  return (
    <>
      <LinearGradient
        colors={colors.gradients.top}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: 29,
        }}
        className="gap-4 border border-muted/20  p-8 items-center relative "
      >
        <View className="flex-row gap-5 items-center bg-muted/10 border border-muted/40 rounded-3xl  px-8 py-2">
          <Text className="text-muted">Total Balance</Text>
          <Ionicons name="wallet-outline" size={15} color={colors.muted} />
        </View>
        <Text className="text-light text-4xl">$42,593.40</Text>
        <View className="flex-row gap-3">
          <View className="gap-3 flex-row justify-center items-center bg-primary/15 border border-purple/5 rounded-2xl p-3">
            <Ionicons name="logo-bitcoin" size={14} color={colors.warning} />
            <Text className="text-muted text-sm">1.24 BTC</Text>
          </View>
          <View className="gap-3 flex-row justify-center items-center bg-secondary/20 border border-secondary/40 rounded-2xl p-3">
            <Ionicons name="trending-up" size={14} color={colors.secondary} />
            <Text className="text-secondary text-sm font-bold ">1.24 BTC</Text>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default TopGradientCard;
