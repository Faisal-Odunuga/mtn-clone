import React from "react";
import Header from "../header/Header";
// import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <main className="font-workSans text-specialBlack">
      <Header />
      <main className={`space-y-10`}>{children}</main>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
