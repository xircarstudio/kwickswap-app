import { colors } from "@/assets/styles/styles";
import HomeHead from "@/components/home/homeHead";
import TopGradientCard from "@/components/home/TopGradientCard";
import SearchBar from "@/components/ui/SearchBar";
import SegmentedTabs, { TabItem } from "@/components/ui/SegmentedTabs";
import { activities } from "@/libs/history";
import React, { useMemo, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WalletScreen = () => {
  const [q, setQ] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [showFixedTabs, setShowFixedTabs] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const tabs: TabItem[] = [
    { key: "all", label: "All" },
    { key: "crypto", label: "Crypto" },
    { key: "fiat", label: "Fiat" },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  const filteredActivities = useMemo(() => {
    if (activeTab === "crypto")
      return activities.filter((a) => a.currencyType === "crypto");
    if (activeTab === "fiat")
      return activities.filter((a) => a.currencyType === "fiat");
    return activities;
  }, [activeTab]);

  const listData = useMemo(() => {
    return [
      { type: "header", id: "header" },
      { type: "tabs", id: "tabs" },
      ...filteredActivities.map((activity) => ({
        type: "activity",
        id: activity.id.toString(),
        data: activity,
      })),
    ];
  }, [filteredActivities]);

  const headerHeight = 400;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    setShowFixedTabs(offsetY > headerHeight - 50);
  };

  const TabsComponent = () => (
    <View style={styles.tabsContainer}>
      <SegmentedTabs
        tabs={tabs}
        value={activeTab}
        onChange={setActiveTab}
        containerClassName="bg-[#0f1724]/60 rounded-full p-1 mx-4"
        tabClassName="flex-1 px-6 py-2 items-center justify-center"
        activeBackgroundColor={colors.primary}
        activeTextColor="#04221A"
        inactiveTextColor={colors.muted}
      />
    </View>
  );

  const renderItem = ({ item }: { item: any }) => {
    if (item.type === "header") {
      return (
        <View className="px-container">
          <HomeHead />
          <View className="mt-8">
            <TopGradientCard
              balance="$42,593.40"
              label="Portfolio Value"
              labelIcon="briefcase-sharp"
              stats={[
                {
                  icon: "trending-up",
                  iconColor: colors.secondary,
                  text: "+12.3%",
                  subText: "24H",
                  bg: colors.secondary + "20",
                  border: colors.secondary + "40",
                  textColor: colors.secondary,
                },
              ]}
            />
          </View>

          <SearchBar
            value={q}
            onChangeText={setQ}
            onChangeDebounced={(t) => console.log("debounced", t)}
            onSubmit={() => console.log("submit")}
            placeholder="Search tokens..."
          />
        </View>
      );
    }

    if (item.type === "tabs") {
      return <TabsComponent />;
    }

    if (item.type === "activity" && item.data) {
      const activity = item.data;
      return (
        <View className="flex-row items-center justify-between p-4 rounded-2xl bg-muted/5 border border-muted/20 mx-4 my-2">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full bg-muted/10 items-center justify-center">
              <Text className="text-light font-semibold">
                {activity.currencyType === "crypto" ? "₿" : "₦"}
              </Text>
            </View>

            <View>
              <Text className="text-light font-medium">{activity.title}</Text>
              <Text className="text-muted text-xs">{activity.subtitle}</Text>
            </View>
          </View>

          <Text
            className="font-semibold"
            style={{ color: activity.amountColor ?? colors.muted }}
          >
            {activity.amount}
          </Text>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {showFixedTabs && (
        <View style={styles.fixedTabsWrapper}>
          <TabsComponent />
        </View>
      )}

      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
        stickyHeaderIndices={[1]}
        renderItem={renderItem}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={<View className="pb-6" />}
      />
    </SafeAreaView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  tabsContainer: {
    backgroundColor: "black",
    paddingTop: 16,
    paddingBottom: 12,
  },
  fixedTabsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 100,
    backgroundColor: "black",
    paddingTop: 16,
    paddingBottom: 12,
  },
});
