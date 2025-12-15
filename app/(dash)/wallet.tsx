import { colors } from "@/assets/styles/styles";
import HomeHead from "@/components/home/homeHead";
import TopGradientCard from "@/components/home/TopGradientCard";
import WalletItems from "@/components/wallet/WalletItems";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const wallet = () => {
  return (
    <SafeAreaView className="flex-1 justify-start  bg-primary px-container">
      <HomeHead />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-8">
          <TopGradientCard
            balance="$42,593.40"
            label="Portfolio Value"
            labelIcon="briefcase-sharp"
            stats={[
              {
                icon: "trending-up",
                iconColor: colors.secondary,
                text: "+12.3%",
                subText: "24H",
                bg: colors.secondary + 20,
                border: colors.secondary + 40,
                textColor: colors.secondary,
              },
            ]}
          />
        </View>
        <WalletItems />
      </ScrollView>
    </SafeAreaView>
  );
};

export default wallet;

const styles = StyleSheet.create({});
