import { colors } from "@/assets/styles/styles";
import React from "react";
import { Image, ImageSourcePropType, Pressable, View } from "react-native";

interface ProfileImageProps {
  source: ImageSourcePropType;
  size?: number;
  onPress?: () => void;
}

export default function ProfileImage({
  source,
  size = 40,
  onPress,
}: ProfileImageProps) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 2,
          borderColor: colors.success,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={source}
          style={{
            width: size - 4,
            height: size - 4,
            borderRadius: (size - 4) / 2,
          }}
        />
      </View>
    </Pressable>
  );
}
