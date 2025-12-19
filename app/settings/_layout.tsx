import { colors } from "@/assets/styles/styles";
import CustomHeader from "@/components/ui/CustomHeader";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BillsLayout() {
  return (
    <SafeAreaView className="flex-1 bg-primary" edges={["top"]}>
      <Stack
        screenOptions={{
          header: () => <CustomHeader title="Bills" />,
          headerShown: true,
          contentStyle: { backgroundColor: colors.primary },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader title="Settings" />,
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
