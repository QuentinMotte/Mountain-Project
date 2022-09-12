import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Search from "../component/Search";

function SearchPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <Search />
      </main>
      <Footer></Footer>
    </>
  );
}

export default SearchPage;
