import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),

  route("/home", "routes/home.tsx"),

  route("/profile/posts/grid", "routes/profile.posts.grid.tsx"),
] satisfies RouteConfig;
