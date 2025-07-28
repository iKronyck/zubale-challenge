import { Colors } from "@/constants/Colors";
import { Post } from "@/types";
import { formatSocialCount } from "@/utils";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { Button, Text, View } from "tamagui";

type PostActionsProps = Pick<Post, "likes" | "comments" | "saved" | "liked">;

export function PostActions({
  likes,
  comments,
  saved,
  liked,
}: PostActionsProps) {
  const [likeCount, setLikeCount] = useState(likes);
  const [hasLike, setHasLike] = useState(liked);
  const [hasSaved, setHasSaved] = useState(saved);

  const colorScheme = useColorScheme() ?? "light";

  const likeColor = hasLike
    ? Colors[colorScheme].likeHeart
    : Colors[colorScheme].textPrimary;
  const saveColor = Colors[colorScheme].textPrimary;

  const handleLike = () => {
    setHasLike((prev) => !prev);
    setLikeCount((prev) => (hasLike ? prev - 1 : prev + 1));
  };

  const handleSave = () => setHasSaved((prev) => !prev);

  return (
    <View w="$100%" flexDirection="row" justifyContent="space-between">
      <View flexDirection="row" gap={1}>
        <Button p={"$2"} onPress={handleLike}>
          <Ionicons
            name={hasLike ? "heart" : "heart-outline"}
            size={24}
            color={likeColor}
          />
          <Text color="$textPrimary" fontSize={16} fontWeight="600">
            {formatSocialCount(likeCount)}
          </Text>
        </Button>
        <Button p={"$2"}>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color="white"
            style={{ transform: [{ rotate: "270deg" }] }}
          />
          <Text color="$textPrimary" fontSize={16} fontWeight="600">
            {formatSocialCount(comments)}
          </Text>
        </Button>
        <Button p={"$2"}>
          <Feather name="send" size={24} color="white" />
        </Button>
      </View>
      <Button p={"$2"} onPress={handleSave}>
        <FontAwesome
          name={hasSaved ? "bookmark" : "bookmark-o"}
          size={24}
          color={saveColor}
        />
      </Button>
    </View>
  );
}
