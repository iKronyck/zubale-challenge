import { Text, View } from "tamagui";

export default function SearchScreen() {
  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="$background"
    >
      <Text fontSize="$6" fontWeight="600">
        Search
      </Text>
    </View>
  );
}
