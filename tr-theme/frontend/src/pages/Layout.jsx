import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet /> {/* Här visas den aktiva sidan, t.ex. Home */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
