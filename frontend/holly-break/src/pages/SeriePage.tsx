import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SeriesDetails from "../component/SeriesDetails";

function SeriePage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <SeriesDetails />
      </main>
      <Footer></Footer>
    </>
  );
}

export default SeriePage;
