import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import tamaguiConfig from "@/tamagui.config";
import { Foundation, Ionicons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, TamaguiProvider } from "tamagui";

export default function RootLayout() {
  const queryClient = new QueryClient();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded || !colorScheme) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: Colors[colorScheme].background }}
        >
          <Tabs
            screenOptions={{
              tabBarStyle: {
                backgroundColor: Colors[colorScheme].background,
                borderTopWidth: 0,
                height: 60,
                paddingBottom: 8,
                paddingTop: 8,
              },
              tabBarActiveTintColor: Colors[colorScheme].textPrimary,
              tabBarInactiveTintColor: Colors[colorScheme].textSecondary,
              tabBarShowLabel: false,
              headerShown: false,
            }}
          >
            <Tabs.Screen
              name="index"
              options={{
                tabBarIcon: ({ color }) => (
                  <Foundation name={"home"} size={28} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="search"
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name={"search"} size={28} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="create"
              options={{
                tabBarIcon: ({ color }) => (
                  <Octicons name={"diff-added"} size={28} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="reels"
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name={"heart-outline"} size={28} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                tabBarIcon: () => (
                  <Image
                    source={{
                      uri: "https://avatars.githubusercontent.com/u/12678606?v=4",
                    }}
                    width={28}
                    height={28}
                    borderRadius={14}
                  />
                ),
              }}
            />
          </Tabs>
          <StatusBar style="auto" />
        </SafeAreaView>
      </QueryClientProvider>
    </TamaguiProvider>
  );
}
