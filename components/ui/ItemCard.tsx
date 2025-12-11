import { colors } from "@/assets/styles/styles";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

type ItemCardProps = {
  title: string;
  subtitle: string;
  amount: string;
  amountColor?: string;
  type: string;
  image: ImageSourcePropType;
  onPress?: () => void;
};

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  subtitle,
  amount,
  amountColor,
  type,
  image,
  onPress,
}) => {
  const Wrapper = onPress ? Pressable : View;

  return (
    <Wrapper
      className="flex-row justify-between items-center border border-muted/30 rounded-2xl p-4 bg-muted/5"
      onPress={onPress}
    >
      <View className="flex-row gap-3">
        <View className="bg-muted rounded-full w-16 h-16 p-3 overflow-hidden">
          <Image
            source={image}
            className="w-full h-full rounded-xl"
            resizeMode="cover"
          />
        </View>

        <View className="justify-center items-start">
          <Text className="text-text font-bold">{title}</Text>
          <Text className="text-muted">{subtitle}</Text>
        </View>
      </View>

      <View className="justify-center items-end">
        <Text
          className="text-text font-bold text-right"
          style={{ color: amountColor || colors.text }}
        >
          {amount}
        </Text>
        <Text className="text-muted text-right">{type}</Text>
      </View>
    </Wrapper>
  );
};

export default ItemCard;
