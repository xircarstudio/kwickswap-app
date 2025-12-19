import { colors } from "@/assets/styles/styles";
import ItemCard from "@/components/ui/ItemCard";
import {
  AccountSettingsItems,
  FinanceSettingsItems,
  PreferenceSettingsItems,
  SecuritySettingsItems,
  SupportSettingsItems,
} from "@/libs/SettingItems";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Settings = () => {
  return (
    <View className="flex-1 justify-start  bg-primary px-container">
      <ScrollView>
        <View className="gap-4 mt-12">
          <Text className="text-muted text-sm font-bold">Account</Text>

          {AccountSettingsItems.map((item) => (
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

        <View className="gap-4 mt-4">
          <Text className="text-muted text-sm font-bold">Preferences</Text>

          {PreferenceSettingsItems.map((item) => (
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

        <View className="gap-4 mt-4">
          <Text className="text-muted text-sm font-bold">Financial</Text>

          {FinanceSettingsItems.map((item) => (
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

        <View className="gap-4 mt-4 ">
          <Text className="text-muted text-sm font-bold">Security</Text>

          {SecuritySettingsItems.map((item) => (
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

        <View className="gap-4 mt-4 pb-6">
          <Text className="text-muted text-sm font-bold">Support</Text>

          {SupportSettingsItems.map((item) => (
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

export default Settings;

const styles = StyleSheet.create({});
