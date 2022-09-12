import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SeriesGenre from "../component/SeriesGenre";

function SeriesGenrePage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <SeriesGenre />
      </main>
      <Footer></Footer>
    </>
  );
}

export default SeriesGenrePage;
