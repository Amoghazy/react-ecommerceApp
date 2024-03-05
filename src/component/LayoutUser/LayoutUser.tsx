import Navbar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import FooterButtonsDarkExample from "../Footer/Footer";

export default function LayoutUser() {
  return (
    <>
      <div className="container-fluid min-h-screen relative">
        <Navbar />
        <Outlet />
        <FooterButtonsDarkExample  />
      </div>
    </>
  );
}
