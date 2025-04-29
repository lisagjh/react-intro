import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export function Layout() {
  return (
    <>
      <Nav />
      <main>
        {/* render the child routes in the <Outlet /> */}
        <Outlet />
      </main>
    </>
  );
}
