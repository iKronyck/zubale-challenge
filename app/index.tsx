import { MainLayout } from "@/components/layouts/MainLayout";
import { PostList } from "@/components/ui/PostList";

export default function Home() {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
}
