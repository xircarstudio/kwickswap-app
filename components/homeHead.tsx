import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeHead = () => {
  return (
    <View className="h-[88px] bg-primary flex-row justify-between items-center">
      <View>
        <View>
          <Image source={require("@/assets/img/profile.png")} />
        </View>
        <View>
          <Text>Good Morning</Text>
          <Text>Alex Morgan</Text>
        </View>
      </View>
      <Text className="text-white">hi</Text>
    </View>
  );
};

export default HomeHead;

const styles = StyleSheet.create({});
