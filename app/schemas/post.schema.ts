import { z } from "zod";

export const PostSchema = z.object({
  id: z.number(),
  img_url: z.string(),
  caption: z.string(),
});

export const PostsSchema = z.array(PostSchema);

export type Post = z.infer<typeof PostSchema>;
