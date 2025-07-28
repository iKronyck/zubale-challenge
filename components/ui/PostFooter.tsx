import { Post } from "@/types";
import { formatRelativeTime } from "@/utils";
import { Image, Text, View } from "tamagui";

type PostFooterProps = Pick<Post, "description" | "createdAt" | "name">;

export function PostFooter({ description, createdAt, name }: PostFooterProps) {
  return (
    <View flexDirection="column" gap={"$2"}>
      <View flexDirection="row" gap={"$2"}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          w={20}
          h={20}
          borderRadius="$10"
        />
        <Text color="$textPrimary" fontSize={16}>
          Liked by <Text fontWeight="700">Israel</Text> and others
        </Text>
      </View>
      <Text color="$textPrimary" fontSize={16}>
        <Text fontWeight="700">{`${name} `}</Text>
        <Text pl="$2">{description}</Text>
      </Text>
      <Text color="$textSecondary" fontSize={14}>
        {formatRelativeTime(createdAt)}
      </Text>
    </View>
  );
}
