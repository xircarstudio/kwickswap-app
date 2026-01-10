import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const TierCard = ({
  tier,
  title,
  icon,
  iconBg,
  verified,
  daily,
  monthly,
  action,
  actionLabel,
}: {
  tier: string;
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  verified?: boolean;
  daily: string;
  monthly: string;
  action?: () => void;
  actionLabel?: string;
}) => {
  return (
    <View className="bg-muted/10 rounded-2xl p-4 border border-muted/20 mb-4">
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-row items-center gap-3">
          <View
            className="w-10 h-10 rounded-full items-center justify-center"
            style={{ backgroundColor: iconBg }}
          >
            {icon}
          </View>

          <View>
            <Text className="text-white font-bold">{tier}</Text>
            <Text className="text-muted text-xs">{title}</Text>
          </View>
        </View>

        {verified && <View className="w-3 h-3 bg-green-400 rounded-full" />}
      </View>

      <View className="bg-black/40 rounded-xl p-3 mb-3">
        <View className="flex-row justify-between mb-2">
          <Text className="text-muted text-xs">Daily Limit</Text>
          <Text className="text-white font-semibold">{daily}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-muted text-xs">Monthly Limit</Text>
          <Text className="text-white font-semibold">{monthly}</Text>
        </View>
      </View>

      {verified ? (
        <View className="flex-row items-center gap-2">
          <View className="w-2 h-2 bg-green-400 rounded-full" />
          <Text className="text-green-400 text-xs font-semibold">Verified</Text>
        </View>
      ) : (
        <Pressable
          onPress={action}
          className={`py-3 rounded-xl items-center ${
            actionLabel === "Verify Now" ? "bg-emerald-400" : "bg-[#1F2937]"
          }`}
        >
          <Text
            className={`font-bold ${
              actionLabel === "Verify Now" ? "text-black" : "text-white"
            }`}
          >
            {actionLabel}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const TierVerification = () => {
  return (
    <View className="flex-1 bg-black px-4 pt-6">
      <TierCard
        tier="Tier 1"
        title="Email & Phone Verification"
        icon={<Ionicons name="lock-closed" size={18} color="#F59E0B" />}
        iconBg="#F59E0B20"
        verified
        daily="$1,000"
        monthly="$10,000"
      />

      <TierCard
        tier="Tier 2"
        title="BVN & ID Verification"
        icon={<Ionicons name="person" size={18} color="#9CA3AF" />}
        iconBg="#9CA3AF20"
        daily="$10,000"
        monthly="$100,000"
        actionLabel="Verify Now"
        action={() => {}}
      />

      <TierCard
        tier="Tier 3"
        title="Full Verification"
        icon={<Feather name="award" size={18} color="#FACC15" />}
        iconBg="#FACC1520"
        daily="Unlimited"
        monthly="Unlimited"
        actionLabel="Start Verification"
        action={() => {}}
      />

      <View className="bg-[#0D1117] rounded-2xl p-4 border border-white/5 mt-2">
        <View className="flex-row items-start gap-3">
          <View className="w-3 h-3 bg-emerald-400 rounded-full mt-1" />
          <View className="flex-1">
            <Text className="text-white font-semibold mb-1">
              Why verify your account?
            </Text>
            <Text className="text-muted text-xs leading-5">
              Complete KYC verification to unlock higher transaction limits,
              access premium features, and ensure secure transactions on our
              platform.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TierVerification;
