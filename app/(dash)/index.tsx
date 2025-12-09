import { colors } from "@/assets/styles/styles";
import HomeButtonStack from "@/components/HomeButtonStack";
import HomeHead from "@/components/homeHead";
import TopGradientCard from "@/components/TopGradientCard";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-start  bg-primary px-container">
      <HomeHead />
      <View>
        <TopGradientCard />
        <HomeButtonStack />
      </View>
      <View className="mt-5">
        <Text className="text-text text-lg"> Quick Access</Text>
        <View className="justify-between items-center">
          <View className="bg-purple/50 w-fit">
            <Ionicons
              name="calendar-clear-sharp"
              size={25}
              color={colors.purple}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
