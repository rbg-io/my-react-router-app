import type { LoaderFunctionArgs } from "react-router";
import { api } from "../services/api";
import { PostsResponseSchema, type Post } from "../schemas/post.schema";
import { useLoaderData } from "react-router";
import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";
import { BottomNav } from "../components/BottomNav";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await api.get("/posts");
  const result = PostsResponseSchema.safeParse(response.data);

  if (!result.success) {
    throw new Response("Invalid data from server", { status: 500 });
  }

  return Response.json(result.data.posts);
}

export default function Home() {
  const posts = useLoaderData() as Post[];

  return (
    <div>
      <Header />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <BottomNav />
    </div>
  );
}
