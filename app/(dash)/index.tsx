import HomeHead from "@/components/homeHead";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center  bg-primary px-container">
      <HomeHead />
      <View className="flex-1 justify-center items-center bg-primary">
        <Text className="text-success">
          Edit app/index.tsx to edit this screen.s
        </Text>
      </View>
    </SafeAreaView>
  );
}
