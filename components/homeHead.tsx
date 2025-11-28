import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import IconButton from "./iconButtons";

const HomeHead = () => {
  return (
    <View className="h-[88px] bg-primary flex-row justify-between items-start mt-2">
      <View className="flex-row ">
        <View className="pr-4">
          <Image
            source={require("@/assets/img/profile.png")}
            className="rounded-full w-10 h-10"
          />
        </View>
        <View>
          <Text className="text-muted">Good Morning</Text>
          <Text className="text-white font-extrabold">Alex Morgan</Text>
        </View>
      </View>
      <View className="flex-row gap-5">
        <IconButton
          Icon={Ionicons}
          name="notifications"
          variant="sm"
          size={20}
          color={colors.muted}
        />
        <IconButton
          Icon={Ionicons}
          name="settings"
          variant="sm"
          size={20}
          color={colors.muted}
        />
      </View>
    </View>
  );
};

export default HomeHead;

const styles = StyleSheet.create({});
