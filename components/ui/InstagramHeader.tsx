import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { Text, View } from "tamagui";

export function InstagramHeader() {
  const colorScheme = useColorScheme() ?? "light";
  const iconColor = Colors[colorScheme].textPrimary;

  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="$4"
      paddingVertical="$3"
      backgroundColor="$background"
      borderBottomWidth={0.5}
      borderBottomColor="$borderColor"
    >
      <TouchableOpacity>
        <Ionicons name="camera-outline" size={28} color={iconColor} />
      </TouchableOpacity>

      <Text
        fontSize={24}
        fontWeight="400"
        color="$textPrimary"
        style={{
          fontStyle: "italic",
          letterSpacing: 0.5,
        }}
      >
        Instagram
      </Text>

      <View flexDirection="row" alignItems="center" gap="$3">
        <TouchableOpacity>
          <View position="relative">
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={28}
              color={iconColor}
            />
            <View
              position="absolute"
              top={-2}
              right={-2}
              width={12}
              height={12}
              borderRadius={6}
              backgroundColor="$red10"
              borderWidth={1}
              borderColor="$background"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={28} color={iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
