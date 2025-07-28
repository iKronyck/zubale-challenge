import { View } from "tamagui";
import { PostActions } from "./PostActions";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";

export function Post() {
  return (
    <View w="100%" bg="$background" py={"$2"}>
      <PostHeader />
      <PostImage />
      <PostActions />
      <PostFooter />
    </View>
  );
}
