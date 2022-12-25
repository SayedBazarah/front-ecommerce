import Header from "./Header";
import SideNav from "./SideNav";

import Style from "./Layout.module.css";
import Router from "next/router";

import { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

export default function Layout({ children }) {
  let data = {};
  useEffect(() => {
    const token = localStorage.getItem("token").toString();
    if (token) data = jwtDecode(token);

    if (!data?.role) Router.push("/login");
  }, []);

  return (
    <div className={Style.container}>
      <Header />
      <section className={Style.row}>
        <div>
          <SideNav />
        </div>
        <div className={Style.children}>{children}</div>
      </section>
    </div>
  );
}
