import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import clsx from "clsx";

const Layout = () => {
  return (
    <div
      //   className={clsx(
      //     "mx-auto w-full px-[20px]",
      //     "sm:max-w-[375px] sm:px-[30px]",
      //     "md:max-w-[768px] md:px-[40px]",
      //     "lg:max-w-[1028px] lg:px-[80px]",
      //     "xl:max-w-[1440px] xl:p-[100px]",
      //   )}
      className={clsx(
        "mx-auto w-full",
        "sm:max-w-[375px]",
        "md:max-w-[768px]",
        "lg:max-w-[1028px]",
        "xl:max-w-[1440px]",
      )}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
