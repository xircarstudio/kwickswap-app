import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

interface HeaderActionIconProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  route?: Href;
  onPress?: () => void;
}

export default function HeaderActionIcon({
  name,
  size = 20,
  color = colors.muted,
  route,
  onPress,
}: HeaderActionIconProps) {
  const router = useRouter();

  const handlePress = () => {
    if (route) router.push(route);
    else onPress?.();
  };

  return (
    <Pressable onPress={handlePress} hitSlop={10}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}
