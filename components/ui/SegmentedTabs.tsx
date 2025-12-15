// components/ui/SegmentedTabs.tsx
import { colors } from "@/assets/styles/styles";
import React, { useEffect, useRef, useState } from "react";
import type { GestureResponderEvent } from "react-native";
import {
  Animated,
  LayoutChangeEvent,
  Pressable,
  Text,
  View,
  ViewStyle,
} from "react-native";

export type TabItem = {
  key: string;
  label: string;
};

type SegmentedTabsProps = {
  tabs: TabItem[]; // list of tabs
  value?: string; // controlled active key
  defaultValue?: string; // uncontrolled initial key
  onChange?: (key: string) => void;
  containerClassName?: string;
  tabClassName?: string;
  activeTextClassName?: string;
  inactiveTextClassName?: string;
  activeBackgroundColor?: string; // pill color
  activeTextColor?: string;
  inactiveTextColor?: string;
  pillPadding?: number; // extra padding inside pill
  style?: ViewStyle;
  accessibleLabel?: string;
};

export default function SegmentedTabs({
  tabs,
  value,
  defaultValue,
  onChange,
  containerClassName = "flex-row items-center bg-muted/10 rounded-full p-1",
  tabClassName = "flex-1 px-6 py-2 items-center justify-center",
  activeTextClassName = "text-sm font-medium",
  inactiveTextClassName = "text-sm",
  activeBackgroundColor = colors.primary, // green in your theme
  activeTextColor = "#ffffff",
  inactiveTextColor = colors.muted,
  pillPadding = 6,
  style,
  accessibleLabel = "Segmented tabs",
}: SegmentedTabsProps) {
  // controlled vs uncontrolled
  const isControlled = typeof value === "string";
  const [activeKey, setActiveKey] = useState<string>(
    value ?? defaultValue ?? tabs[0]?.key
  );

  // measurements of each tab: { x, width }
  const measures = useRef<{ x: number; width: number }[]>([]);
  const containerX = useRef(0);
  const animLeft = useRef(new Animated.Value(0)).current;
  const animWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isControlled && value && value !== activeKey) {
      setActiveKey(value);
    }
  }, [value, isControlled, activeKey]);

  // animate when activeKey or measurements change
  useEffect(() => {
    const idx = tabs.findIndex((t) => t.key === activeKey);
    const m = measures.current[idx];
    if (m) {
      Animated.parallel([
        Animated.timing(animLeft, {
          toValue: m.x,
          duration: 220,
          useNativeDriver: false,
        }),
        Animated.timing(animWidth, {
          toValue: m.width,
          duration: 220,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [activeKey, animLeft, animWidth, tabs]);

  const onTabPress = (key: string) => (e?: GestureResponderEvent) => {
    if (!isControlled) setActiveKey(key);
    onChange?.(key);
  };

  // record layout for each tab
  const onTabLayout = (index: number) => (ev: LayoutChangeEvent) => {
    const { x, width } = ev.nativeEvent.layout;
    measures.current[index] = { x, width };

    // if this is the active one and anim not set yet, set immediately
    if (tabs[index].key === activeKey) {
      animLeft.setValue(x);
      animWidth.setValue(width);
    }
  };

  // container layout (optional) to account for padding if needed
  const onContainerLayout = (ev: LayoutChangeEvent) => {
    containerX.current = ev.nativeEvent.layout.x;
  };

  // fallback pill style while measure isn't ready
  const pillStyle = {
    position: "absolute" as const,
    left: animLeft,
    width: animWidth,
    top: 2,
    bottom: 2,
    borderRadius: 9999,
    backgroundColor: activeBackgroundColor,
    padding: pillPadding,
  };

  return (
    <View
      onLayout={onContainerLayout}
      className={containerClassName}
      style={[{ position: "relative" }, style]}
      accessible
      accessibilityLabel={accessibleLabel}
    >
      {/* Animated pill (positioned absolutely inside container) */}
      <Animated.View
        pointerEvents="none"
        style={pillStyle}
        // add subtle shadow (optional)
      />

      {/* Tabs */}
      {tabs.map((t, i) => {
        const isActive = t.key === activeKey;
        return (
          <Pressable
            key={t.key}
            onPress={onTabPress(t.key)}
            onLayout={onTabLayout(i)}
            className={tabClassName}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
          >
            <Text
              className={isActive ? activeTextClassName : inactiveTextClassName}
              style={{
                color: isActive ? activeTextColor : inactiveTextColor,
                textAlign: "center",
              }}
            >
              {t.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
