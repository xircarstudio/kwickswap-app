import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

type RightButtonProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  text?: string;
  onPress?: () => void;
};

type AppTextInputProps = TextInputProps & {
  label?: string;
  error?: string;
  isNumber?: boolean;
  rightButton?: RightButtonProps;
};

const TextInputs = ({
  label,
  error,
  isNumber = false,
  rightButton,
  onChangeText,
  ...props
}: AppTextInputProps) => {
  const [focused, setFocused] = useState(false);
  const borderAnim = useRef(new Animated.Value(0)).current;

  const borderColor = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      error ? colors.danger : "#0B0F14",
      error ? colors.danger : colors.primary,
    ],
  });

  const handleFocus = () => {
    setFocused(true);
    Animated.timing(borderAnim, {
      toValue: 1,
      duration: 180,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setFocused(false);
    Animated.timing(borderAnim, {
      toValue: 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  };

  const handleChange = (text: string) => {
    if (isNumber) {
      const cleaned = text.replace(/[^0-9.]/g, "");
      onChangeText?.(cleaned);
    } else {
      onChangeText?.(text);
    }
  };

  return (
    <View className="mb-4">
      {label && <Text className="text-text text-sm mb-2">{label}</Text>}

      <Animated.View
        style={{ borderColor }}
        className="flex-row items-center rounded-xl px-4 border bg-input"
      >
        <TextInput
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChange}
          keyboardType={isNumber ? "decimal-pad" : props.keyboardType}
          className="flex-1 text-text py-6 text-lg"
          placeholderTextColor="#6B7280"
        />

        {rightButton && (
          <TouchableOpacity
            onPress={rightButton.onPress}
            className="flex-row items-center gap-1 pl-3"
            disabled={!rightButton.onPress}
          >
            {rightButton.text && (
              <View
                className="rounded-xl bg-secondary/10"
                style={{ borderRadius: 8 }}
              >
                <Text
                  className="text-secondary font-semibold"
                  style={{ marginVertical: 6, marginHorizontal: 10 }}
                >
                  {rightButton.text}
                </Text>
              </View>
            )}

            {rightButton.icon && (
              <View className="bg-primary rounded-xl ml-1">
                <Ionicons
                  name={rightButton.icon}
                  size={18}
                  color={colors.secondary}
                  style={{ margin: 8 }}
                />
              </View>
            )}
          </TouchableOpacity>
        )}
      </Animated.View>

      {error && <Text className="text-error text-xs mt-1">{error}</Text>}
    </View>
  );
};

export default TextInputs;
