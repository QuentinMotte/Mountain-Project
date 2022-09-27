import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import WatchList from "../component/WatchList";
import axios from "axios";

function WatchListPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <WatchList />
      </main>
      <Footer></Footer>
    </>
  );
}

export default WatchListPage;
