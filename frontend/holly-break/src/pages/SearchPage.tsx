import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function SearchPage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Search</h1>
        <p>This is the search page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default SearchPage;
