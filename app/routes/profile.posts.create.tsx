import { Form, redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router";
import { api } from "~/services/api";
import { Header } from "~/components/Header";
import { BottomNav } from "~/components/BottomNav";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const img_url = formData.get("img_url");
  const caption = formData.get("caption");

  if (typeof img_url !== "string" || typeof caption !== "string") {
    return new Response("Invalid form data", { status: 400 });
  }

  await api.post("/posts", { img_url, caption });

  return redirect("/profile/posts/grid");
}

export default function CreatePost() {
  return (
    <div>
      <Header />
      <h2 style={{ padding: "1rem 0" }}>Create a new Post</h2>
      <Form method="post" style={{ padding: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Image URL:
            <input
              name="img_url"
              type="text"
              required
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Caption:
            <textarea name="caption" required style={{ width: "100%" }} />
          </label>
        </div>
        <button type="submit">Create Post</button>
      </Form>
      <BottomNav />
    </div>
  );
}
