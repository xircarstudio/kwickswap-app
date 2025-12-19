import { Href, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const AView = Animated.createAnimatedComponent(View);

export type IconButtonItem = {
  label: string;
  Icon?: React.ComponentType<any>;
  name?: string;
  image?: ImageSourcePropType;
  color?: string;
  route: Href;
};

interface IconButtonGridProps {
  buttons: IconButtonItem[];
  columns?: number;
  itemSize?: number;
}

export default function IconButtonGrid({
  buttons,
  columns = 3,
  itemSize = 60,
}: IconButtonGridProps) {
  const router = useRouter();

  const mountValues = useRef(buttons.map(() => new Animated.Value(0))).current;

  const scaleValues = useRef(buttons.map(() => new Animated.Value(1))).current;

  useEffect(() => {
    const animations = mountValues.map((v, i) =>
      Animated.timing(v, {
        toValue: 1,
        duration: 320,
        delay: i * 80,
        useNativeDriver: true,
      })
    );

    Animated.stagger(60, animations).start();
  }, []);

  const handlePressIn = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 0.92,
      useNativeDriver: true,
      friction: 8,
      tension: 200,
    }).start();
  };

  const handlePressOut = (index: number) => {
    Animated.spring(scaleValues[index], {
      toValue: 1,
      useNativeDriver: true,
      friction: 8,
      tension: 200,
    }).start();
  };

  const itemWidth = (width - 60) / columns;

  return (
    <View className="flex-row flex-wrap justify-between gap-4 items-center mt-3">
      {buttons.map((btn, i) => {
        const translateY = mountValues[i].interpolate({
          inputRange: [0, 1],
          outputRange: [12, 0],
        });

        const color = btn.color ?? "#ffffff";

        return (
          <AView
            key={btn.label}
            className="items-center "
            style={{
              width: itemWidth,
              transform: [{ translateY }, { scale: scaleValues[i] }],
              opacity: mountValues[i],
            }}
          >
            <TouchableWithoutFeedback
              onPressIn={() => handlePressIn(i)}
              onPressOut={() => handlePressOut(i)}
              onPress={() => router.push(btn.route)}
            >
              <View
                className="rounded-2xl justify-center gap-2  items-center  bg-muted/5 border border-muted/10"
                style={{ width: itemSize, height: itemSize }}
              >
                <View
                  className="justify-center items-center  rounded-2xl p-3"
                  style={{
                    backgroundColor: `${color}35`,
                    borderColor: `${color}40`,
                    borderWidth: 1,
                  }}
                >
                  {btn.image ? (
                    <Image
                      source={btn.image}
                      style={{ width: 26, height: 26, resizeMode: "contain" }}
                    />
                  ) : btn.Icon ? (
                    <btn.Icon
                      name={btn.name as any}
                      size={23}
                      color={btn.color}
                    />
                  ) : null}
                </View>
                <Text className="text-muted text-center">{btn.label}</Text>
              </View>
            </TouchableWithoutFeedback>
          </AView>
        );
      })}
    </View>
  );
}
