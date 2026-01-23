import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
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
  rightButton?: RightButtonProps;
};

const TextInputs = ({
  label,
  rightButton,
  style,
  ...props
}: AppTextInputProps) => {
  return (
    <View className="mb-4">
      {label && <Text className="text-text text-sm mb-2">{label}</Text>}

      <View className="flex-row items-center bg-[#0B0F14] rounded-xl px-4">
        <TextInput
          {...props}
          className="flex-1 text-text py-4"
          placeholderTextColor="#6B7280"
        />

        {rightButton && (
          <TouchableOpacity
            onPress={rightButton.onPress}
            className="flex-row items-center gap-1 pl-3"
            disabled={!rightButton.onPress}
          >
            {rightButton.text && (
              <View>
                <Text className="text-primary font-semibold">
                  {rightButton.text}
                </Text>
              </View>
            )}

            {rightButton.icon && (
              <View className="bg-primary rounded-xl">
                <Ionicons
                  name={rightButton.icon}
                  size={18}
                  color={colors.secondary}
                  className="m-2"
                />
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputs;
