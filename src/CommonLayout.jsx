import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import DataComponent from "./components/DataComponent";
import LandingPage from "./components/landing/LandingPage";

function CommonLayout({ }) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <DataComponent/>
      <LandingPage/>
    </>
  );
}

export default CommonLayout;
