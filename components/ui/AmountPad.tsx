import { Text, TouchableOpacity, View } from "react-native";

interface AmountPadProps {
  value: string;
  onChange: (val: string) => void;
}

const KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "0",
  "⌫",
] as const;

export default function AmountPad({ value, onChange }: AmountPadProps) {
  const press = (key: (typeof KEYS)[number]) => {
    if (key === "⌫") {
      onChange(value.slice(0, -1));
    } else {
      onChange(value + key);
    }
  };

  return (
    <View className="flex-row flex-wrap justify-between mt-6">
      {KEYS.map((key) => (
        <TouchableOpacity
          key={key}
          onPress={() => press(key)}
          className="w-[30%] py-4 mb-4 bg-[#0B0F14] rounded-xl"
        >
          <Text className="text-white text-xl text-center">{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
