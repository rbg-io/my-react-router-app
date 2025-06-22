import { Outlet } from "react-router";
import { Header } from "~/components/Header";
import { BottomNav } from "~/components/BottomNav";

export default function ProfileLayout() {
  return (
    <div>
      <Header />
      <main style={{ paddingBottom: "3rem" }}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
