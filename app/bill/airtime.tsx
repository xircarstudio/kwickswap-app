import { colors } from "@/assets/styles/styles";
import IconButtonGrid, { IconButtonItem } from "@/components/ui/IconButtonGrid";
import React from "react";
import { Text, View } from "react-native";

const BUTTONS: IconButtonItem[] = [
  {
    label: "MTN",
    image: require("@/assets/images/icon.png"),
    route: "/",
    color: colors.warning,
  },

  {
    label: "GLO",
    image: require("@/assets/images/icon.png"),
    route: "/(sub)/buy",
    color: colors.success,
  },

  {
    label: "Airtel",
    image: require("@/assets/images/icon.png"),
    route: "/(sub)/buy",
    color: colors.danger,
  },

  {
    label: "9mobile",
    image: require("@/assets/images/icon.png"),
    route: "/(sub)/buy",
    color: colors.success,
  },
];

const Airtime = () => {
  return (
    <View className="flex-1 bg-primary py-6 px-container">
      <Text className="text-white font-semibold text-lg mb-4">
        Select Network
      </Text>
      <IconButtonGrid buttons={BUTTONS} columns={2} itemSize={170} />
    </View>
  );
};

export default Airtime;
