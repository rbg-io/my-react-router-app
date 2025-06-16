import { z } from "zod";

export const PostSchema = z.object({
  id: z.number(),
  img_url: z.string(),
  caption: z.string(),
  created_at: z.string(),
});

export const PostsResponseSchema = z.object({
  posts: z.array(PostSchema),
});

export const PostsSchema = z.array(PostSchema);

export type Post = z.infer<typeof PostSchema>;
