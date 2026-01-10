import TierVerification from "@/components/KycTier";
import React from "react";
import { ScrollView, View } from "react-native";

const kyc = () => {
  return (
    <View className="flex-1">
      <ScrollView>
        <TierVerification />
      </ScrollView>
    </View>
  );
};

export default kyc;
