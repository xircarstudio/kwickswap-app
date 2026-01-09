import { colors } from "@/assets/styles/styles";
import SocialStack from "@/components/SocialStack";
import ItemCard from "@/components/ui/ItemCard";
import { HelpItems } from "@/libs/SettingItems";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const help = () => {
  return (
    <View className="flex-1 justify-start  bg-primary px-container">
      <ScrollView>
        <View className="gap-4 mt-4">
          {HelpItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {index === 0 && (
                <Text className="text-muted text-sm font-bold mb-2">
                  Get Help
                </Text>
              )}

              {index === 3 && (
                <Text className="text-muted text-sm font-bold mb-2 mt-4">
                  Contact Us
                </Text>
              )}

              {index === 5 && (
                <Text className="text-muted text-sm font-bold mb-2 mt-4">
                  Resources
                </Text>
              )}

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
            </React.Fragment>
          ))}
        </View>

        <View className=" justify-center items-center mt-10 mb-10 gap-4">
          <Text className=" text-muted">App Version</Text>
          <Text className="text-xl text-text">v1.0.0</Text>
          <SocialStack />
        </View>
      </ScrollView>
    </View>
  );
};

export default help;
