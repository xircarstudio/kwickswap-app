import { colors } from "@/assets/styles/styles";
import Crypto from "@/components/sub/crypto";
import Fiat from "@/components/sub/fiat";
import SegmentedTabs, { TabItem } from "@/components/ui/SegmentedTabs";
import React, { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const WalletScreen = () => {
  const [q, setQ] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState("crypto");
  const [showFixedTabs, setShowFixedTabs] = useState(false);

  const tabs: TabItem[] = [
    { key: "crypto", label: "Crypto" },
    { key: "fiat", label: "Fiat" },
  ];

  const headerHeight = 360;

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowFixedTabs(offsetY > headerHeight - 40);
  };

  const TabsComponent = () => (
    <View style={styles.tabsContainer}>
      <SegmentedTabs
        tabs={tabs}
        value={activeTab}
        onChange={(key) => {
          setActiveTab(key);
          setQ("");
        }}
      />
    </View>
  );

  return (
    <View className="flex-1 bg-primary">
      {/* Fixed tabs */}
      {showFixedTabs && (
        <View style={styles.fixedTabsWrapper}>
          <TabsComponent />
        </View>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
      >
        {/* HEADER */}

        {/* NORMAL TABS */}
        <TabsComponent />

        {/* TAB CONTENT */}
        <View className="px-container mt-4">
          {activeTab === "crypto" && <Crypto />}
          {activeTab === "fiat" && <Fiat />}
        </View>

        <View className="pb-8" />
      </ScrollView>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
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
