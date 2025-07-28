import { Text, View } from "tamagui";

export default function ReelsScreen() {
  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="$background"
    >
      <Text fontSize="$6" fontWeight="600">
        Reels
      </Text>
    </View>
  );
}
