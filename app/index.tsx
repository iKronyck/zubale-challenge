import { MainLayout } from "@/components/layouts/MainLayout";
import { PostList } from "@/components/ui/PostList";
import { StoriesList } from "@/components/ui/StoriesList";

export default function Home() {
  return (
    <MainLayout>
      <StoriesList />
      <PostList />
    </MainLayout>
  );
}
