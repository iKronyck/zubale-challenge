import { Post } from "@/types";
import { Image, View } from "tamagui";

type PostImageProps = Pick<Post, "image">;

export function PostImage({ image }: PostImageProps) {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        w="100%"
        h={375}
      />
    </View>
  );
}
