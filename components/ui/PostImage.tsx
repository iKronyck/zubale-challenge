import { Post } from "@/types";
import { useState } from "react";
import { Image, View } from "tamagui";

type PostImageProps = Pick<Post, "image"> & {
  postId?: string | number;
};

export function PostImage({ image, postId = Math.random() }: PostImageProps) {
  const [imageError, setImageError] = useState(false);

  const fallbackImage = `https://picsum.photos/400/375?random=${postId}`;

  return (
    <View>
      <Image
        source={{
          uri: imageError ? fallbackImage : image,
        }}
        w="100%"
        h={375}
        onError={() => setImageError(true)}
      />
    </View>
  );
}
