import { Token } from "@/types/token";
import { Ionicons } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface TokenModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (token: Token) => void;
}

const TOKENS: Token[] = [
  { name: "Bitcoin", symbol: "BTC", balance: 1.24, color: "#F97316" },
  { name: "Ethereum", symbol: "ETH", balance: 12.4, color: "#6366F1" },
];

export default function TokenModal({
  visible,
  onClose,
  onSelect,
}: TokenModalProps) {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View className="flex-1 bg-black/70 justify-end">
        <View className="bg-[#0B0F14] rounded-t-3xl p-6">
          <Text className="text-white text-lg font-semibold mb-4">
            Select Token
          </Text>

          {TOKENS.map((token) => (
            <TouchableOpacity
              key={token.symbol}
              onPress={() => {
                onSelect(token);
                onClose();
              }}
              className="flex-row justify-between items-center py-4 border-b border-white/10"
            >
              <View className="flex-row items-center gap-3">
                <View
                  className="p-3 rounded-full"
                  style={{ backgroundColor: token.color + "30" }}
                >
                  <Ionicons name="logo-bitcoin" size={18} color={token.color} />
                </View>

                <View>
                  <Text className="text-white">{token.name}</Text>
                  <Text className="text-gray-400 text-xs">{token.symbol}</Text>
                </View>
              </View>

              <Text className="text-white font-semibold">{token.balance}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity onPress={onClose} className="mt-4">
            <Text className="text-gray-400 text-center">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
