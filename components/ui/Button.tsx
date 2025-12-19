import { colors } from "@/assets/styles/styles";
import React, { useRef } from "react";
import { Animated, Pressable, Text, ViewStyle } from "react-native";

type ButtonVariant = "primary" | "success" | "info" | "warning" | "danger";

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  Icon?: React.ComponentType<any>;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

const VARIANT_COLORS: Record<ButtonVariant, string> = {
  primary: colors.secondary,
  success: colors.success,
  info: colors.info,
  warning: colors.warning,
  danger: colors.danger + 25,
};

const BD_COLORS: Record<ButtonVariant, string> = {
  primary: colors.transparent,
  success: colors.transparent,
  info: colors.transparent,
  warning: colors.transparent,
  danger: colors.danger + 50,
};

export default function Button({
  title,
  onPress,
  variant = "primary",
  Icon,
  iconName,
  iconSize = 18,
  iconColor,
  disabled,
  containerStyle,
}: AppButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const bgColor = VARIANT_COLORS[variant];
  const borderColor = BD_COLORS[variant];

  return (
    <Animated.View
      style={[
        {
          transform: [{ scale }],
          opacity: disabled ? 0.5 : 1,
        },
        containerStyle,
      ]}
    >
      <Pressable
        disabled={disabled}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className="rounded-2xl px-5 py-4 flex-row items-center justify-center gap-2"
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: 1,
        }}
      >
        {Icon && iconName && (
          <Icon name={iconName as any} size={iconSize} color={iconColor} />
        )}

        <Text className=" font-bold text-base" style={{ color: iconColor }}>
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
}
