import { colors } from "@/assets/styles/styles";
import Button from "@/components/ui/Button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

type BankAccount = {
  id: string;
  bankName: string;
  accountType: string;
  cardNumber: string;
  color: string;
  logo: any;
};

const bankAccounts: BankAccount[] = [
  {
    id: "1",
    bankName: "Chase Bank",
    accountType: "Visa • Debit",
    cardNumber: "4111111111111234",
    color: "#0A1AFF",
    logo: require("@/assets/images/icon.png"),
  },
  {
    id: "2",
    bankName: "Bank of America",
    accountType: "Mastercard • Credit",
    cardNumber: "5105105105104321",
    color: "#E11C2A",
    logo: require("@/assets/images/icon.png"),
  },
  {
    id: "3",
    bankName: "Wells Fargo",
    accountType: "Visa • Debit",
    cardNumber: "4000123412349876",
    color: "#C40404",
    logo: require("@/assets/images/icon.png"),
  },
  {
    id: "4",
    bankName: "Citibank",
    accountType: "Mastercard • Credit",
    cardNumber: "5555444433336789",
    color: "#003B70",
    logo: require("@/assets/images/icon.png"),
  },
  {
    id: "5",
    bankName: "Capital One",
    accountType: "Visa • Credit",
    cardNumber: "4222222222228888",
    color: "#004879",
    logo: require("@/assets/images/icon.png"),
  },
];

/* MASK CARD NUMBER */
const maskCardNumber = (num: string) => {
  const last4 = num.slice(-4);
  return "•••• •••• •••• " + last4;
};

const connectedBanks = () => {
  return (
    <View className="gap-4 mt-5 mb-7 px-container flex-1 ">
      <View>
        <Button
          title="Add New Bank Account"
          variant="primary"
          Icon={Ionicons}
          iconColor={colors.primary}
          iconName="add-circle"
          onPress={() => {
            console.log("ADD Account Pressed");
          }}
        />
      </View>
      <FlatList
        data={bankAccounts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 8 }}
        renderItem={({ item }) => (
          <View className="p-4 rounded-2xl mb-4 bg-muted/5 border border-muted/20">
            <View className="flex-row justify-between items-start mb-4">
              <View className="flex-row gap-4 items-center">
                <View
                  className="p-2 w-10 h-10 justify-center items-center"
                  style={{
                    backgroundColor: item.color,
                    borderRadius: 12,
                  }}
                >
                  <Image
                    source={item.logo}
                    className="w-7 h-7 resize-contain rounded-full"
                  />
                </View>
                <View>
                  <Text className="text-text text-lg font-bold ">
                    {item.bankName}
                  </Text>
                  <Text className="text-muted text-xs font-semibold ">
                    {item.accountType}
                  </Text>
                </View>
              </View>

              <Text
                className="text-white text-xl font-semibold uppercase"
                style={{ color: item.color }}
              >
                •
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-base tracking-widest">
                {maskCardNumber(item.cardNumber)}
              </Text>
              <Button
                title="Remove"
                variant="danger"
                textStyle="text-sm"
                iconColor={colors.danger}
                className="px-3 py-2 "
                onPress={() => {
                  console.log("Disconnect Pressed");
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default connectedBanks;
