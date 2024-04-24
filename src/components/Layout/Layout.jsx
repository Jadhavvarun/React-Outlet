import Navbar from '../Home/Navbar'
import Footer from "../Home/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This is where the child routes will render */}
      <Footer />
    </div>
  );
};

export default Layout;