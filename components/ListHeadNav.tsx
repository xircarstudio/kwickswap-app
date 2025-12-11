import { colors } from "@/assets/styles/styles";
import type { LinkProps } from "expo-router";
import { Link } from "expo-router";
import React from "react";
import { GestureResponderEvent, Pressable, Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  rightText?: string;

  rightHref?: LinkProps["href"];
  onRightPress?: (e: GestureResponderEvent) => void;
  rightComponent?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  rightClassName?: string;
  showDivider?: boolean;
};

const ListHeadNav: React.FC<SectionHeaderProps> = ({
  title,
  rightText = "View All",
  rightHref,
  onRightPress,
  rightComponent,
  className = "flex-row mb-5 justify-between items-center",
  titleClassName = "text-light text-base font-semibold",
  rightClassName = "text-secondary font-medium",
  showDivider = false,
}) => {
  const Right = () => {
    if (rightComponent) return <>{rightComponent}</>;

    if (rightHref) {
      return (
        <Link href={rightHref} asChild>
          <Pressable accessibilityRole="link" className={rightClassName}>
            <Text>{rightText}</Text>
          </Pressable>
        </Link>
      );
    }

    if (onRightPress) {
      return (
        <Pressable onPress={onRightPress} className={rightClassName}>
          <Text style={{ color: colors.secondary }}>{rightText}</Text>
        </Pressable>
      );
    }

    return <Text className={rightClassName}>{rightText}</Text>;
  };

  return (
    <View className={className}>
      <Text className={titleClassName}>{title}</Text>
      <Right />
      {showDivider && (
        <View className="h-px bg-muted/10 absolute left-0 right-0 bottom-[-14px]" />
      )}
    </View>
  );
};

export default ListHeadNav;
