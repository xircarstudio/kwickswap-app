import { colors } from "@/assets/styles/styles";
import HomeHead from "@/components/home/homeHead";
import ItemCard from "@/components/ui/ItemCard";
import ProfileImage from "@/components/ui/ProfileImage";
import {
  AccountItems,
  LegalItems,
  PreferenceItems,
  SupportItems,
} from "@/libs/SettingItems";
import { userInfo } from "@/libs/userInfo";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const profile = () => {
  return (
    <View className="flex-1 justify-start  bg-primary px-container">
      <HomeHead
        title={userInfo.name}
        onProfilePress={() => router.push("/profile")}
        actions={[{ icon: "settings", route: "/settings" }]}
      />
      <ScrollView>
        <View className="items-center mt-8">
          <ProfileImage source={userInfo.avatar} size={100} />
          <Text className="text-text text-2xl font-bold mt-4">
            {userInfo.name}
          </Text>
          <Text className="text-muted text-base mt-2">{userInfo.email}</Text>
          <View className="flex-row justify-center items-center gap-2 mt-4">
            <View className="flex-row items-center justify-between gap-2 px-5 py-2 bg-secondary/10 border border-secondary/25 rounded-3xl w-fit">
              <Ionicons
                name="shield-checkmark"
                size={15}
                color={colors.secondary}
              />
              <Text className="text-secondary text-sm font-extrabold">
                {userInfo.kycLevel}
              </Text>
            </View>

            <View className="flex-row items-center justify-between gap-2 px-5 py-2 bg-secondary/10 border border-secondary/25 rounded-3xl w-fit">
              <Ionicons
                name="checkmark-circle-sharp"
                size={15}
                color={colors.secondary}
              />
              <Text className="text-secondary text-sm font-extrabold">
                KYC Verified
              </Text>
            </View>
          </View>
        </View>
        <View className="gap-4 mt-12">
          <Text className="text-muted text-sm font-bold">Account</Text>

          {AccountItems.map((item) => (
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

          {PreferenceItems.map((item) => (
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
          <Text className="text-muted text-sm font-bold">Support</Text>

          {SupportItems.map((item) => (
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
          <Text className="text-muted text-sm font-bold">Legal</Text>

          {LegalItems.map((item) => (
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

export default profile;

const styles = StyleSheet.create({});
