import { colors } from "@/assets/styles/styles";
import HomeButtonStack from "@/components/HomeButtonStack";
import HomeHead from "@/components/homeHead";
import TopGradientCard from "@/components/TopGradientCard";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-start  bg-primary px-container">
      <HomeHead />
      <ScrollView>
        <View className="mt-8">
          <TopGradientCard />
          <HomeButtonStack />
        </View>
        <View className="mt-5">
          <Text className="text-text text-lg mb-3"> Quick Access</Text>
          <LinearGradient
            colors={colors.gradients.quickCard}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0, y: 1 }}
            style={{
              marginTop: 10,
              borderRadius: 20,
            }}
            className="justify-between items-center flex-row gap-6 p-8 border border-purple rounded-2xl"
          >
            <View className="bg-purple/50 p-4 rounded-2xl">
              <Ionicons
                name="calendar-clear-sharp"
                size={25}
                color={colors.purple}
              />
            </View>

            <View className="justify-center items-center max-w-[118px] ">
              <Text className="text-center text-text font-extrabold text-[16px]">
                Manage Subscription
              </Text>
              <Text className="text-muted text-xs text-wrap text-center">
                View and control all your recurring payments
              </Text>
            </View>
            <View className="flex-row items-center  justify-end gap-3">
              <View>
                <Text className="text-sm text-muted text-right">3 Active</Text>
                <Text className="text-purple text-sm text-right">
                  N5,000/mo
                </Text>
              </View>
              <View>
                <Ionicons name="arrow-forward" size={24} color={colors.muted} />
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
