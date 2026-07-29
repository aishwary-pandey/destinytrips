import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar company="Destiny Trips" />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;