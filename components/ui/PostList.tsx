import { FlatList } from "react-native";
import { Post } from "./Post";

export function PostList() {
  return (
    <FlatList
      data={Array.from({ length: 10 })}
      renderItem={({ item }) => <Post />}
    />
  );
}
