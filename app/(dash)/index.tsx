import HomeHead from "@/components/homeHead";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <HomeHead />
      <View className="flex-1 justify-center items-center bg-primary">
        <Text className="text-success">
          Edit app/index.tsx to edit this screen.s
        </Text>
      </View>
    </>
  );
}
