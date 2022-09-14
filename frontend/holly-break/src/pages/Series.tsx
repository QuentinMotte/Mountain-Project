import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { SeriesPosters } from "../component/SeriesPosters";

export function Series() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <SeriesPosters />
      </main>
      <Footer></Footer>
    </>
  );
}

export default Series;
