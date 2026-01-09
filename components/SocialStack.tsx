import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";
const socials = [
  { icon: "logo-facebook", onPress: () => {} },
  { icon: "logo-twitter", onPress: () => {} },
  { icon: "logo-instagram", onPress: () => {} },
  { icon: "logo-linkedin", onPress: () => {} },
] as const;
const SocialStack = () => {
  return (
    <View className="flex-row gap-4 mt-4 justify-center items-center">
      {socials.map(({ icon, onPress }) => (
        <Pressable
          key={icon}
          onPress={onPress}
          className="rounded-full p-3"
          style={{ backgroundColor: colors.muted + "20" }}
        >
          <Ionicons name={icon} size={20} color={colors.muted} />
        </Pressable>
      ))}
    </View>
  );
};

export default SocialStack;
