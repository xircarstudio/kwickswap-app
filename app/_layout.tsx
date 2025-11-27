import { Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import "./global.css";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const isAuth = false;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      if (!isAuth) {
        router.replace("./auth");
      }
    } catch (err) {
      console.warn("RouteGuard redirect failed:", err);
    }
  }, [mounted, isAuth, router]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen
          name="(dash)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </RouteGuard>
  );
}
