import type { ComponentType } from "react";
import React from "react";
import { Pressable, View } from "react-native";

interface IconButtonProps {
  Icon: ComponentType<any>;
  name: string;
  size?: number;
  color?: string;
  className?: string;
  onPress?: () => void;
}

export default function IconButton({
  Icon,
  name,
  size = 26,
  color = "#fff",
  className = "",
  onPress,
}: IconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <View
        className={`bg-primary border border-border rounded-lg w-16 h-16 justify-center items-center ${className}`}
      >
        <Icon name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}
