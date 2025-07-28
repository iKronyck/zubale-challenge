import { Colors } from "@/constants/Colors";
import { Post } from "@/types";
import { Entypo } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { Button, Image, Text, View } from "tamagui";

type PostHeaderProps = Pick<Post, "avatar" | "name" | "location">;

export function PostHeader({ avatar, name, location }: PostHeaderProps) {
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
      <Image source={{ uri: avatar }} w="35" h="35" borderRadius="$10" />
      <View flex={1} px="$2" justifyContent="center">
        <Text color="$textPrimary" fontWeight="700" fontSize="$3">
          {name}
        </Text>
        <Text fontSize="$3" color="$textPrimary" fontWeight="500">
          {location}
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
