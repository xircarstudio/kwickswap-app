import AmountPad from "@/components/ui/AmountPad";
import Toggle, { ToggleValue } from "@/components/ui/Toggle";
import TokenModal from "@/components/ui/TokenModal";
import { Token } from "@/types/token";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SendCrypto() {
  const [mode, setMode] = useState<ToggleValue>("Crypto");
  const [amount, setAmount] = useState<string>("");
  const [token, setToken] = useState<Token>({
    name: "Bitcoin",
    symbol: "BTC",
    balance: 1.24,
  });
  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const continueSend = (): void => {
    if (!amount || Number(amount) <= 0) {
      setError("Enter a valid amount");
      return;
    }
    setError("");
    alert("Transaction Ready 🚀");
  };

  return (
    <ScrollView className="flex-1 bg-black px-4 pt-6">
      <Toggle value={mode} onChange={setMode} />

      {/* Token */}
      <TouchableOpacity
        onPress={() => setModal(true)}
        className="bg-[#0B0F14] rounded-xl p-4 mb-6"
      >
        <Text className="text-gray-400 text-xs">Select Token</Text>
        <Text className="text-white font-semibold mt-1">
          {token.name} ({token.symbol})
        </Text>
      </TouchableOpacity>

      {/* Amount */}
      <View className="bg-[#1F2937] rounded-xl p-4">
        <Text className="text-white text-3xl font-semibold">
          {amount || "0.00"}
        </Text>
        <Text className="text-gray-400 text-xs mt-1">
          Available: {token.balance} {token.symbol}
        </Text>
      </View>

      {error ? (
        <Text className="text-red-500 text-xs mt-2">{error}</Text>
      ) : null}

      <AmountPad value={amount} onChange={setAmount} />

      <TouchableOpacity
        onPress={continueSend}
        className="bg-emerald-400 rounded-xl py-4 mt-6 mb-10"
      >
        <Text className="text-black text-center font-semibold text-base">
          Continue
        </Text>
      </TouchableOpacity>

      <TokenModal
        visible={modal}
        onClose={() => setModal(false)}
        onSelect={setToken}
      />
    </ScrollView>
  );
}
