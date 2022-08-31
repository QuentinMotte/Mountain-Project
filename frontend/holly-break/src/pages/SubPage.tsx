import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function SubPage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Subscription</h1>
        <p>This is the subscription page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default SubPage;
