export function BottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "1rem",
        backgroundColor: "#eee",
      }}
    >
      <a href="/home">Home</a> | {""}
      <a href="/profile/posts/grid">Home</a> | <a href="/profile">Profile</a>
      <a href="/profile/posts/create">New Post</a>
    </nav>
  );
}
