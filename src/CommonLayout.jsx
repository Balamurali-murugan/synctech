import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function CommonLayout({ children }) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default CommonLayout;
