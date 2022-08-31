import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function ConditionPage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Condition</h1>
        <p>This is the condition page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ConditionPage;
