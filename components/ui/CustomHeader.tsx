import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
  showBack?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
};

export default function CustomHeader({
  title,
  showBack = true,
  rightIcon,
  onRightPress,
}: Props) {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="bg-primary">
      <View className="">
        <View className="relative h-14 flex-row items-center justify-center px-4 border-b border-muted/10">
          <View className="absolute top-0 left-5 bottom-0 justify-center">
            {showBack && (
              <Pressable onPress={() => router.push("/")} className="mr-3">
                <Ionicons
                  name="arrow-back-sharp"
                  size={26}
                  color={colors.text}
                />
              </Pressable>
            )}
          </View>
          <Text className="text-text text-lg font-bold">{title}</Text>
          <View className="absolute top-0 right-5 bottom-0 justify-center">
            {rightIcon ? (
              <Pressable onPress={onRightPress}>
                <Ionicons name={rightIcon} size={22} color={colors.text} />
              </Pressable>
            ) : (
              <View style={{ width: 22 }} />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
