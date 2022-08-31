import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function HistoryPage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>History</h1>
        <p>This is the history page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HistoryPage;
