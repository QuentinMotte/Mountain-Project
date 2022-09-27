import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Page404() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <h1>404</h1>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Page404;
