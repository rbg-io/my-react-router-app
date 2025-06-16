import type { Post } from "../schemas/post.schema";

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
      }}
    >
      <img
        src={post.img_url}
        alt="Post"
        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
      />
      <p style={{ margin: "0.5rem 0", color: "#333" }}>{post.caption}</p>
      <small style={{ color: "#999", fontSize: "0.8rem" }}>
        Posted: {new Date(post.created_at).toLocaleDateString()}
      </small>
    </div>
  );
}
