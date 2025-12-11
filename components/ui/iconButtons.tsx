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

  variant?: "lg" | "sm";
}

export default function IconButton({
  Icon,
  name,
  size = 26,
  color = "#fff",
  className = "",
  onPress,
  variant = "lg",
}: IconButtonProps) {
  const variants = {
    lg: "w-16 h-16 rounded-lg",
    sm: "w-12 h-12 rounded-full",
  };

  return (
    <Pressable onPress={onPress}>
      <View
        className={`bg-primary border border-border justify-center items-center ${variants[variant]} ${className}`}
      >
        <Icon name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}
