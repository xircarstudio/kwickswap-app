import { EvilIcons, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Shadow } from "react-native-shadow-2";

import { LinearGradient } from "expo-linear-gradient";
import { colors, styles } from "../assets/styles/styles";

const { width } = Dimensions.get("window");

interface Props {
  navigation?: {
    navigate: (route: string, params?: Record<string, any>) => void;
  };
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-primary" edges={["top", "bottom"]}>
      <View className="flex-1 px-container pt-10">
        <View className="items-center mt-6">
          <Shadow
            distance={50}
            startColor={colors.secondary + "40"}
            endColor={colors.secondary + "100"}
            paintInside={true}
            offset={[3, 4]}
          >
            <LinearGradient
              colors={colors.gradients.green}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: 110,
                height: 110,
                borderRadius: 22,
                justifyContent: "center",
                alignItems: "center",
                elevation: 10,
              }}
            >
              <Ionicons name="wallet" size={45} />

              <View
                style={{
                  position: "absolute",
                  right: -6,
                  bottom: -6,
                  width: 45,
                  height: 45,
                  borderRadius: 50,
                  backgroundColor: "#2e8cf6",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EvilIcons name="refresh" color={"white"} size={34} />
              </View>
            </LinearGradient>
          </Shadow>
        </View>

        {/* Title */}
        <View className="items-center mt-8">
          <Text className="text-white text-4xl font-extrabold leading-tight text-center">
            Welcome to{"\n"}Kwickswap
          </Text>
        </View>

        <View className="items-center mt-4 px-8">
          <Text className="text-gray-300 text-center text-base">
            Your gateway to crypto freedom with{"\n"}seamless fiat usability
          </Text>
        </View>

        {/* Feature icons row */}
        <View className="flex-row justify-between mt-8 px-6">
          <Ionicons name="wallet" />
        </View>

        {/* Info card */}
        <View
          className="mt-8"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            borderRadius: 12,
            padding: 14,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.04)",
          }}
        >
          <View className="flex-row items-start">
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 6,
                backgroundColor: "#2ee6b9",
                marginRight: 12,
                marginTop: 6,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text className="text-gray-200 font-semibold">
                Kwickswap is a non-custodial wallet
              </Text>
              <Text className="text-gray-400 mt-1">
                You control your keys, we provide the freedom.
              </Text>
            </View>
          </View>
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Buttons */}
        <View className="mb-8">
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.9}
            onPress={() => navigation?.navigate?.("GetStarted")}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.outlineButton}
            activeOpacity={0.85}
            onPress={() => navigation?.navigate?.("ExistingWallet")}
          >
            <Text style={styles.outlineButtonText}>
              I Already Have a Wallet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
