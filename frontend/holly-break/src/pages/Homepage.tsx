import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import HomepageSelect from "../component/HomepageSelect";

function Homepage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <HomepageSelect />
      </main>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
