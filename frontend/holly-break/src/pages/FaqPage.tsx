import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function FaqPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div>
          <h1>FAQ</h1>
          <p>This is the FAQ page</p>
          <NavLink to="/">Landing</NavLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default FaqPage;
