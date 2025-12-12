import { colors } from "@/assets/styles/styles";
import HomeButtonStack from "@/components/home/HomeButtonStack";
import HomeHead from "@/components/home/homeHead";
import RecentActivity from "@/components/home/RecentActivity";
import TopGradientCard from "@/components/home/TopGradientCard";
import ListHeadNav from "@/components/ListHeadNav";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-start  bg-primary px-container">
      <HomeHead />
      <ScrollView>
        <View className="mt-8">
          <TopGradientCard
            balance="$42,593.40"
            stats={[
              {
                icon: "logo-bitcoin",
                iconColor: colors.warning,
                text: "1.23 BTC",
                bg: colors.primary + 15,
                border: colors.purple + 40,
              },
              {
                icon: "trending-up",
                iconColor: colors.secondary,
                text: "+12.3%",
                bg: colors.secondary + 20,
                border: colors.secondary + 40,
                textColor: colors.secondary,
              },
            ]}
          />

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
        <View className="mt-5">
          <ListHeadNav
            title="Recent Activity"
            rightText="See all"
            onRightPress={() => router.push("/profile")}
          />

          <View>
            <RecentActivity />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
