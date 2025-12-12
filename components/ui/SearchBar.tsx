// components/ui/SearchBar.tsx
import { colors } from "@/assets/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEvent,
  View,
} from "react-native";

type SearchBarProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onChangeDebounced?: (text: string) => void;

  onSubmit?: (e: TextInputSubmitEditingEvent) => void;
  debounceMs?: number;
  showClear?: boolean;
  className?: string;
  inputClassName?: string;
  icon?: keyof typeof Ionicons.glyphMap;
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
  className = "flex-row items-center bg-muted/5 rounded-2xl px-3 py-2 border border-muted/10 my-5",
  inputClassName = "flex-1 text-base text-light",
  icon = "search",
  autoFocus = false,
  accessibleLabel = "Search",
}: SearchBarProps) {
  const [internal, setInternal] = useState<string>(value ?? defaultValue);
  const isControlled = typeof value === "string";
  const debRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isControlled) setInternal(value as string);
  }, [value, isControlled]);

  useEffect(() => {
    if (!onChangeDebounced) return;
    if (debRef.current) clearTimeout(debRef.current);

    debRef.current = setTimeout(() => {
      onChangeDebounced(internal);
    }, debounceMs);

    return () => {
      if (debRef.current) {
        clearTimeout(debRef.current);
        debRef.current = null;
      }
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
    if (debRef.current) {
      clearTimeout(debRef.current);
      debRef.current = null;
    }
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
        // <-- pass the handler matching TextInput's expected signature
        onSubmitEditing={onSubmit}
        autoFocus={autoFocus}
        className={inputClassName}
        style={styles.inputOverride}
        accessibilityLabel={accessibleLabel}
      />

      {showClear && internal.length > 0 && (
        <Pressable onPress={clear} className="ml-2 p-1 rounded-full">
          <Ionicons name="close-circle" size={18} color={colors.muted} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputOverride: {
    padding: 0,
    margin: 0,
    minHeight: 20,
  },
});
