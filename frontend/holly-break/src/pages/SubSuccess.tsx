import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function SubSuccess() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Subscribtion Success !</h1>
        <p>This is the success page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default SubSuccess;
