import { apiClient } from "@/api/client";
import { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getPosts = async () => {
  const response = await apiClient.get<Post[]>("v1/posts");
  return response.data;
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
