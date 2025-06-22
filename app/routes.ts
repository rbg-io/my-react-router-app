import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("/home", "routes/home.tsx"),
  route("/profile/posts/grid", "routes/profile.posts.grid.tsx"),
  route("/profile/posts/create", "routes/profile.posts.create.tsx"),
] satisfies RouteConfig;
