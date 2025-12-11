import { activities } from "@/libs/history";
import React from "react";
import { View } from "react-native";
import ItemCard from "../ui/ItemCard";

const RecentActivity = () => {
  const lastFive = activities.slice(0, 5);
  return (
    <View className="gap-4 mt-4">
      {lastFive.map((activity) => (
        <ItemCard key={activity.id} {...activity} />
      ))}
    </View>
  );
};

export default RecentActivity;
