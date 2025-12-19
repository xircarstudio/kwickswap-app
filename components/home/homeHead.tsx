import React from "react";
import { ImageSourcePropType, Text, View } from "react-native";
import HeaderActionIcon from "../ui/HeaderActionIcon";
import ProfileImage from "../ui/ProfileImage";

interface HeaderAction {
  icon: keyof typeof import("@expo/vector-icons").Ionicons.glyphMap;
  route?: any;
  onPress?: () => void;
}

interface HomeHeaderProps {
  title: string;
  subtitle?: string;
  profileImage?: ImageSourcePropType;
  onProfilePress?: () => void;
  actions?: HeaderAction[];
}

export default function HomeHead({
  title,
  subtitle = "Good Morning",
  profileImage,
  onProfilePress,
  actions = [],
}: HomeHeaderProps) {
  return (
    <View className="h-[50px] bg-primary flex-row justify-between items-start mt-2">
      <View className="flex-row items-center">
        {profileImage && (
          <View className="pr-4">
            <ProfileImage
              source={profileImage}
              size={40}
              onPress={onProfilePress}
            />
          </View>
        )}

        <View>
          <Text className="text-muted">{subtitle}</Text>
          <Text className="text-white font-extrabold">{title}</Text>
        </View>
      </View>

      <View className="flex-row gap-5">
        {actions.map((action, index) => (
          <HeaderActionIcon
            key={index}
            name={action.icon}
            route={action.route}
            onPress={action.onPress}
          />
        ))}
      </View>
    </View>
  );
}
