import { Token } from "@/types/token";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TextInputs from "../ui/TextInput";
import TokenModal from "../ui/TokenModal";

const Crypto = () => {
  const [token, setToken] = useState<Token>({
    name: "Bitcoin",
    symbol: "BTC",
    balance: 1.24,
  });
  const [modal, setModal] = useState<boolean>(false);
  return (
    <View>
      <View className="mb-6">
        <TextInputs
          label="Recipient Address"
          placeholder="Enter wallet address or username"
          rightButton={{
            icon: "qr-code",
            onPress: () => console.log("Search"),
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => setModal(true)}
        className="bg-input rounded-xl p-4 mb-6"
      >
        <Text className="text-gray-400 text-xs">Select Token</Text>
        <Text className="text-white font-semibold mt-1">
          {token.name} ({token.symbol})
        </Text>
      </TouchableOpacity>

      <View className="mb-6">
        <TextInputs
          label="Amount"
          placeholder="0.00"
          isNumber
          rightButton={{
            text: "Max",
            onPress: () => console.log("Search"),
          }}
        />
      </View>

      <TokenModal
        visible={modal}
        onClose={() => setModal(false)}
        onSelect={setToken}
      />
    </View>
  );
};

export default Crypto;
