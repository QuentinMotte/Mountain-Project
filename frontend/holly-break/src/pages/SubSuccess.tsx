import React from "react";
import { NavLink } from "react-router-dom";
import Connection from "../component/Connection";
import Footer from "../component/Footer";
import Header from "../component/Header";

function SubSuccess() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div>
          <NavLink to="/">Landing</NavLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SubSuccess;
