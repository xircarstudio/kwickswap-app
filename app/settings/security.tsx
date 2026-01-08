import { colors } from "@/assets/styles/styles";
import ItemCard from "@/components/ui/ItemCard";
import { SecurityItems, SecurityItems2 } from "@/libs/SettingItems";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const Security = () => {
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(
      SecurityItems2.map((item) => [item.id, item.default ?? false])
    )
  );

  const handleToggle = (id: number, value: boolean) => {
    setToggles((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <View className="flex-1 bg-primary px-container">
      <ScrollView>
        <View className="gap-4 mt-5">
          {SecurityItems2.map((item) => (
            <ItemCard
              key={item.id}
              leftSlot={
                <>
                  <View
                    className="rounded-full p-3"
                    style={{ backgroundColor: item.color + "20" }}
                  >
                    {item.icon}
                  </View>

                  <View>
                    <Text className="text-text font-bold">{item.title}</Text>
                    {item.subtitle && (
                      <Text className="text-muted text-sm">
                        {item.subtitle}
                      </Text>
                    )}
                  </View>
                </>
              }
              toggle={{
                value: toggles[item.id],
                onChange: (val) => handleToggle(item.id, val),
              }}
            />
          ))}
        </View>

        <View className="gap-4 mt-4">
          {SecurityItems.map((item) => (
            <ItemCard
              key={item.id}
              onPress={() => item.route && router.push(item.route)}
              leftSlot={
                <>
                  <View
                    className="rounded-full p-3"
                    style={{ backgroundColor: item.color + "20" }}
                  >
                    {item.icon}
                  </View>
                  <View className="">
                    <Text className="text-text font-bold">{item.title}</Text>
                    {item.subtitle && (
                      <Text className="text-muted text-sm">
                        {item.subtitle}
                      </Text>
                    )}
                  </View>
                </>
              }
              rightSlot={
                <Ionicons
                  name="arrow-forward-sharp"
                  size={20}
                  color={colors.muted}
                />
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Security;
