import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function FavPage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>FAVOURITE & WATCHLIST</h1>
        <p>This is the fav page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default FavPage;
