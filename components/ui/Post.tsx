import { Post as PostType } from "@/types";
import { View } from "tamagui";
import { PostActions } from "./PostActions";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";

export function Post({ post }: { post: PostType }) {
  return (
    <View w="100%" bg="$background" py={"$2"}>
      <PostHeader
        avatar={post.avatar}
        name={post.name}
        location={post.location}
      />
      <PostImage image={post.image} postId={post.id} />
      <PostActions
        likes={post.likes}
        comments={post.comments}
        saved={post.saved}
        liked={post.liked}
      />
      <PostFooter
        description={post.description}
        createdAt={post.createdAt}
        name={post.name}
      />
    </View>
  );
}
