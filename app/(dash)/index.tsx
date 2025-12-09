import HomeButtonStack from "@/components/HomeButtonStack";
import HomeHead from "@/components/homeHead";
import TopGradientCard from "@/components/TopGradientCard";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-start  bg-primary px-container">
      <HomeHead />
      <View>
        <TopGradientCard />
      </View>
      <View>
        <HomeButtonStack />
      </View>
    </SafeAreaView>
  );
}
