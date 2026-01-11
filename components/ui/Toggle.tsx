import { Pressable, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export type ToggleValue = "Crypto" | "Fiat";

interface ToggleProps {
  value: ToggleValue;
  onChange: (val: ToggleValue) => void;
}

const OPTIONS = ["Crypto", "Fiat"] as const;

export default function Toggle({ value, onChange }: ToggleProps) {
  return (
    <View className="flex-row bg-[#0B0F14] rounded-full p-1 mb-6">
      {OPTIONS.map((item) => {
        const active = value === item;

        return (
          <Pressable
            key={item}
            onPress={() => onChange(item)}
            className="flex-1"
          >
            {active ? (
              <Animated.View
                entering={FadeIn.duration(150)}
                exiting={FadeOut.duration(150)}
                className="py-2 rounded-full bg-emerald-400"
              >
                <Text className="text-center font-semibold text-black">
                  {item}
                </Text>
              </Animated.View>
            ) : (
              <View className="py-2 rounded-full">
                <Text className="text-center font-semibold text-gray-400">
                  {item}
                </Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
