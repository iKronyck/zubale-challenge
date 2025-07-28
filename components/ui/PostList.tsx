import { useGetPosts } from "@/hooks/useGetPost";
import { FlatList } from "react-native";
import { Post } from "./Post";

export function PostList() {
  const { data, isLoading } = useGetPosts();
  console.log({ data });

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
