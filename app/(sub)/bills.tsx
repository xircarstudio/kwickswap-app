import { colors } from "@/assets/styles/styles";
import TopGradientCard from "@/components/home/TopGradientCard";
import ListHeadNav from "@/components/ListHeadNav";
import EmptyState from "@/components/ui/EmptyState";
import IconButtonGrid, { IconButtonItem } from "@/components/ui/IconButtonGrid";
import ItemCard from "@/components/ui/ItemCard";
import { activities } from "@/libs/history";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
type Activity = {
  id: string;
  title: string;
  currencyAmount: string;
  currencyCode: string;
  amount: string;
  amountColor?: string;
  change: string;
  image: any;
  type: "Bills" | "send" | "receive" | "swap";
};

const billActivities = activities.filter(
  (activity) => activity.type === "Bills"
);

const BUTTONS: IconButtonItem[] = [
  {
    label: "Send",
    Icon: FontAwesome,
    name: "send",
    color: colors.secondary,
    route: "/(sub)/send",
  },
  {
    label: "Receive",
    Icon: Ionicons,
    name: "download",
    color: colors.info,
    route: "/(sub)/receive",
  },
  {
    label: "Swap",
    Icon: FontAwesome6,
    name: "arrows-rotate",
    color: colors.purple,
    route: "/(dash)/swap",
  },
  {
    label: "Bills",
    Icon: Ionicons,
    name: "receipt",
    color: colors.warning,
    route: "/(sub)/bills",
  },
  {
    label: "Cards",
    Icon: FontAwesome,
    name: "credit-card-alt",
    color: colors.pink,
    route: "/(dash)/cards",
  },
  {
    label: "Buy",
    Icon: FontAwesome5,
    name: "shopping-cart",
    color: colors.ocean,
    route: "/(sub)/buy",
  },
  // {
  //   label: "Buy",
  //   image: require("@/assets/images/icon.png"),
  //   route: "/(sub)/buy",
  //   color: colors.pink,
  // },
];

const Bill = () => {
  return (
    <ScrollView>
      <View className="bg-primary px-container flex-1">
        <View className="mt-8 ">
          <TopGradientCard
            balance="$42,593.40"
            label="Payment Source"
            labelIcon="wallet-sharp"
            stats={[
              {
                icon: "logo-bitcoin",
                iconColor: colors.warning,
                text: "1.23 BTC",
                subText: "",
                bg: colors.primary + 15,
              },
              {
                text: "NGN",
                subText: "",
                bg: colors.primary + 15,
                textColor: colors.muted,
              },
            ]}
          />
        </View>
        <View className="mt-8">
          <Text className="text-text text-lg font-semibold">
            Payment Categories
          </Text>
          <IconButtonGrid buttons={BUTTONS} columns={3} itemSize={105} />
        </View>
        <View className="mt-8">
          <ListHeadNav
            title="Recent Activity"
            rightText="View all"
            onRightPress={() => router.push("/profile")}
          />

          <View className="gap-4">
            {billActivities.length === 0 ? (
              <EmptyState />
            ) : (
              billActivities.map((activity) => (
                <ItemCard
                  key={activity.id}
                  title={activity.title}
                  subtitle={`${activity.currencyAmount} ${activity.currencyCode}`}
                  amount={activity.amount}
                  amountColor={activity.amountColor}
                  type={activity.type}
                  image={activity.image}
                />
              ))
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Bill;
