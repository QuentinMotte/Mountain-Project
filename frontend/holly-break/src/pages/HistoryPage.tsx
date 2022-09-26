import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import History from "../component/History";

function HistoryPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <History />
      </main>
      <Footer></Footer>
    </>
  );
}

export default HistoryPage;
