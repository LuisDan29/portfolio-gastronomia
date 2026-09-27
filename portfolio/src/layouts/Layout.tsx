import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ScrollToHashElement from "../components/utils/ScrollToHashElement";

function Layout() {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout;