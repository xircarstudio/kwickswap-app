// components/ui/SearchBar.tsx
import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";

type SearchBarProps = {
  value?: string; // controlled value (optional)
  defaultValue?: string; // uncontrolled initial value
  placeholder?: string;
  onChangeText?: (text: string) => void; // immediate change
  onChangeDebounced?: (text: string) => void; // debounced change
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  debounceMs?: number;
  showClear?: boolean;
  className?: string; // wrapper classes
  inputClassName?: string;
  icon?: keyof typeof Ionicons.glyphMap; // leading icon
  autoFocus?: boolean;
  accessibleLabel?: string;
};

export default function SearchBar({
  value,
  defaultValue = "",
  placeholder = "Search",
  onChangeText,
  onChangeDebounced,
  onSubmit,
  debounceMs = 300,
  showClear = true,
  className = "flex-row items-center bg-muted/5 rounded-2xl px-3 py-2  border border-muted/10 my-5",
  inputClassName = "flex-1 text-base text-light",
  icon = "search",
  autoFocus = false,
  accessibleLabel = "Search",
}: SearchBarProps) {
  const [internal, setInternal] = useState<string>(value ?? defaultValue);
  const isControlled = typeof value === "string";
  const debRef = useRef<number | null>(null);

  // keep internal in sync if controlled
  useEffect(() => {
    if (isControlled) setInternal(value as string);
  }, [value, isControlled]);

  // Debounced change effect
  useEffect(() => {
    if (!onChangeDebounced) return;
    if (debRef.current) clearTimeout(debRef.current);
    // @ts-ignore - NodeJS timeout vs RN number; this is fine in RN
    debRef.current = setTimeout(() => {
      onChangeDebounced(internal);
    }, debounceMs) as unknown as number;

    return () => {
      if (debRef.current) clearTimeout(debRef.current);
    };
  }, [internal, debounceMs, onChangeDebounced]);

  const handleChange = (text: string) => {
    if (!isControlled) setInternal(text);
    onChangeText?.(text);
  };

  const clear = () => {
    if (!isControlled) setInternal("");
    onChangeText?.("");
    onChangeDebounced?.("");
  };

  return (
    <View className={className} accessible accessibilityLabel={accessibleLabel}>
      <Ionicons
        name={icon as any}
        size={18}
        color={colors.muted}
        className="mr-2"
      />

      <TextInput
        value={internal}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        autoFocus={autoFocus}
        className={inputClassName}
        style={styles.inputOverride}
        accessibilityLabel={accessibleLabel}
      />

      {showClear && internal.length > 0 ? (
        <Pressable onPress={clear} className="ml-2 p-1 rounded-full">
          <Ionicons name="close-circle" size={18} color={colors.muted} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  // ensure TextInput doesn't inherit unintended padding from NativeWind in some RN versions
  inputOverride: {
    padding: 0,
    margin: 0,
    minHeight: 20,
  },
});
