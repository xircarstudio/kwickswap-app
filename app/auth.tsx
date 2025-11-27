import { Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
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
      <View className="flex-1 px-container ">
        <View className="absolute top-16 left-52">
          <Shadow
            distance={90}
            startColor={colors.secondary + "40"}
            endColor={colors.secondary + "100"}
            paintInside={true}
            offset={[3, -90]}
          />
        </View>
        <View className="absolute top-96 left-10">
          <Shadow
            distance={190}
            startColor={colors.purple + "40"}
            endColor={colors.secondary + "100"}
            paintInside={true}
            offset={[50, 4]}
          />
        </View>
        <View className="items-center mt-6 pt-20 bg-transparent">
          <Shadow
            distance={20}
            startColor={colors.secondary + "40"}
            endColor={colors.secondary + "100"}
            paintInside={true}
            offset={[0, 5]}
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

        <View className="flex-row justify-between mt-8 px-14">
          <View className="items-center">
            <View className="bg-primary border border-border rounded-lg w-16 h-16 justify-around items-center">
              <Ionicons
                name="shield-checkmark"
                size={25}
                color={colors.secondary}
              />
            </View>
            <Text className="text-muted text-center mt-3">Secure</Text>
          </View>
          <View className="items-center">
            <View className="bg-primary border border-border rounded-lg w-16 h-16 justify-center items-center">
              <Ionicons name="key-sharp" size={25} color={colors.info} />
            </View>
            <Text className="text-muted text-center mt-3">Non-custodial</Text>
          </View>
          <View className="items-center">
            <View className="bg-primary border border-border rounded-lg w-16 h-16 justify-center items-center">
              <Ionicons name="rocket-sharp" size={25} color={colors.purple} />
            </View>
            <Text className="text-muted text-center mt-3">Fast</Text>
          </View>
        </View>

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
          <View className="flex-row items-start gap-4">
            <Entypo
              name="info-with-circle"
              size={20}
              color={colors.secondary}
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

        <View style={{ flex: 1 }} />

        <View className="mb-8">
          <LinearGradient
            style={styles.primaryButton}
            colors={colors.gradients.green}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation?.navigate?.("GetStarted")}
            >
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
          </LinearGradient>

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
