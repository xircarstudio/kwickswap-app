import ItemCard from "@/components/ui/ItemCard";
import { Nots } from "@/libs/NotificationItems";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const Notification = () => {
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(Nots.map((item) => [item.id, item.default ?? false]))
  );

  const handleToggle = (id: number, value: boolean) => {
    setToggles((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <View className="flex-1 bg-primary px-container">
      <ScrollView>
        <View className="gap-4 mt-5 mb-7">
          {Nots.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* HEADINGS */}
              {index === 0 && (
                <Text className="text-muted text-sm font-bold mb-2">
                  General
                </Text>
              )}

              {index === 1 && (
                <Text className="text-muted text-sm font-bold mb-2 mt-4">
                  Activity
                </Text>
              )}

              {index === 3 && (
                <Text className="text-muted text-sm font-bold mb-2 mt-4">
                  Reminders
                </Text>
              )}

              {index === 4 && (
                <Text className="text-muted text-sm font-bold mb-2 mt-4">
                  Security & Updates
                </Text>
              )}

              {/* ITEM */}
              <ItemCard
                leftSlot={
                  <>
                    <View
                      className="rounded-full p-3"
                      style={{ backgroundColor: item.color + "20" }}
                    >
                      {item.icon}
                    </View>

                    <View>
                      <Text className="text-text font-bold">{item.title}</Text>
                      {item.subtitle && (
                        <Text className="text-muted text-sm">
                          {item.subtitle}
                        </Text>
                      )}
                    </View>
                  </>
                }
                toggle={{
                  value: toggles[item.id],
                  onChange: (val) => handleToggle(item.id, val),
                }}
              />
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;
