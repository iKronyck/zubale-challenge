import { Stack } from "expo-router";
import { Text, View } from "tamagui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text>This screen does not exist.</Text>
      </View>
    </>
  );
}
