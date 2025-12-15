import React from "react";
import { Text, View } from "react-native";

const EmptyState = () => {
  return (
    <View className="flex-1 items-center justify-center mt-20">
      <Text className="text-light text-base font-semibold mb-2">
        No activity yet
      </Text>
      <Text className="text-muted text-sm text-center px-8">
        Your transactions will appear here once you start using your wallet.
      </Text>
    </View>
  );
};

export default EmptyState;
