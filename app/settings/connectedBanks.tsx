import { colors } from "@/assets/styles/styles";
import Button from "@/components/ui/Button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";

const connectedBanks = () => {
  return (
    <View>
      <ScrollView className="gap-4 mt-5 mb-7 px-container flex-1 ">
        <View>
          <Button
            title="Add New Bank Account"
            variant="primary"
            Icon={Ionicons}
            iconColor={colors.primary}
            iconName="add-circle"
            onPress={() => {
              console.log("Delete Account Pressed");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default connectedBanks;
