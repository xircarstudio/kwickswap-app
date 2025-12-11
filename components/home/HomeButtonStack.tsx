import { colors } from "@/assets/styles/styles";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const AView = Animated.createAnimatedComponent(View);

type ButtonItem = {
  label: string;
  Icon: any;
  name: string;
  color?: string;
};

const BUTTONS: ButtonItem[] = [
  { label: "Send", Icon: FontAwesome, name: "send", color: colors.secondary },
  {
    label: "Receive",
    Icon: Ionicons,
    name: "download",
    color: colors.info,
  },
  {
    label: "Swap",
    Icon: FontAwesome6,
    name: "arrows-rotate",
    color: colors.purple,
  },
  {
    label: "Bills",
    Icon: Ionicons,
    name: "receipt",
    color: colors.warning,
  },
  {
    label: "Cards",
    Icon: FontAwesome,
    name: "credit-card-alt",
    color: colors.pink,
  },
  {
    label: "Buy",
    Icon: FontAwesome5,
    name: "shopping-cart",
    color: colors.ocean,
  },
];

const HomeButtonStack: React.FC = () => {
  const mountValues = useRef(BUTTONS.map(() => new Animated.Value(0))).current;

  const scaleValues = useRef(BUTTONS.map(() => new Animated.Value(1))).current;

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
  }, [mountValues]);

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

  return (
    <View className="flex-row flex-wrap justify-between items-center gap-0 mt-5">
      {BUTTONS.map((btn, i) => {
        const translateY = mountValues[i].interpolate({
          inputRange: [0, 1],
          outputRange: [12, 0],
        });
        const opacity = mountValues[i];

        return (
          <AView
            key={btn.label}
            className="items-center"
            style={{
              width: (width - 60) / 3,
              transform: [{ translateY }, { scale: scaleValues[i] }],
              opacity,
              marginBottom: 30,
            }}
          >
            <TouchableWithoutFeedback
              onPressIn={() => handlePressIn(i)}
              onPressOut={() => handlePressOut(i)}
              onPress={() => {
                // place your onPress handler here (navigation, modal, etc.)
                console.log("Pressed:", btn.label);
              }}
            >
              <View className="rounded-2xl justify-center items-center mb-2 w-[60px] h-[60px] bg-muted/5 border border-muted/10">
                <btn.Icon name={btn.name as any} size={26} color={btn.color} />
              </View>
            </TouchableWithoutFeedback>

            <Text className="text-muted text-center">{btn.label}</Text>
          </AView>
        );
      })}
    </View>
  );
};

export default HomeButtonStack;
