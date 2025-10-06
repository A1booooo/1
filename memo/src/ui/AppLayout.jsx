import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import BottomNavBar from "./BottomNavBar";
import NavBar from "./NavBar";
import { useLocation } from "react-use";

export default function AppLayout() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/memo")) {
    return (
      <>
        <Outlet />
        <Toaster />
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <div
          style={{
            marginBottom: "56px",
            marginTop: "70px",
            textAlign: "center",
          }}
        >
          <Outlet />
        </div>
        <BottomNavBar />
        <Toaster />
      </>
    );
  }
}
