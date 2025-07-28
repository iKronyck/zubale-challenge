import { InstagramHeader } from "@/components/ui/InstagramHeader";
import { PostList } from "@/components/ui/PostList";
import { StoriesList } from "@/components/ui/StoriesList";
import { View } from "tamagui";

export default function HomeScreen() {
  return (
    <View flex={1} backgroundColor="$background" paddingTop="$4">
      <InstagramHeader />
      <StoriesList />
      <PostList />
    </View>
  );
}
