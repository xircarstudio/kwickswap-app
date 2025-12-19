import { colors } from "@/assets/styles/styles";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  ViewStyle,
} from "react-native";

type ItemCardProps = {
  title?: string;
  subtitle?: string;
  amount?: string;
  amountColor?: string;
  type?: string;

  image?: ImageSourcePropType;

  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;

  onPress?: () => void;
  containerStyle?: ViewStyle;
};

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  subtitle,
  amount,
  amountColor,
  type,
  image,
  leftSlot,
  rightSlot,
  onPress,
  containerStyle,
}) => {
  const Wrapper: any = onPress ? Pressable : View;

  return (
    <Wrapper
      onPress={onPress}
      className="flex-row justify-between items-center border border-muted/30 rounded-2xl p-4 bg-muted/5"
      style={containerStyle}
    >
      {/* LEFT */}
      <View className="flex-row gap-3 items-center flex-1">
        {leftSlot ? (
          leftSlot
        ) : image ? (
          <View className="bg-muted rounded-full w-14 h-14 p-3 overflow-hidden">
            <Image
              source={image}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />
          </View>
        ) : null}

        <View className="justify-center">
          <Text className="text-text font-bold">{title}</Text>
          {subtitle && <Text className="text-muted">{subtitle}</Text>}
        </View>
      </View>

      {/* RIGHT */}
      {rightSlot ? (
        rightSlot
      ) : (
        <View className="justify-center items-end">
          {amount && (
            <Text
              className="font-bold text-right"
              style={{ color: amountColor || colors.text }}
            >
              {amount}
            </Text>
          )}
          {type && <Text className="text-muted text-right">{type}</Text>}
        </View>
      )}
    </Wrapper>
  );
};

export default ItemCard;
