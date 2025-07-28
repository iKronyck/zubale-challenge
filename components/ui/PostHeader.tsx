import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { Button, Image, Text, View } from "tamagui";

export function PostHeader() {
  const colorScheme = useColorScheme();
  return (
    <View
      w="100%"
      bg="$background"
      flexDirection="row"
      py="$2"
      px="$2"
      alignItems="center"
    >
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/12678606?v=4" }}
        w="35"
        h="35"
        borderRadius="$10"
      />
      <View flex={1} px="$2" justifyContent="center">
        <Text color="$textPrimary" fontWeight="700" fontSize="$3">
          Israel Alfaro
        </Text>
        <Text fontSize="$3" color="$textPrimary" fontWeight="500">
          La Libertad, El Salvador
        </Text>
      </View>
      <Button bg="$background" borderRadius="$10">
        <Entypo
          name="dots-three-horizontal"
          size={24}
          color={
            colorScheme === "dark"
              ? Colors.dark.textPrimary
              : Colors.light.textPrimary
          }
        />
      </Button>
    </View>
  );
}
