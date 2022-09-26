import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Fave from "../component/Fave";

function FavPage() {
  return (
    <>
      <Header></Header>
      <Fave />
      <Footer></Footer>
    </>
  );
}

export default FavPage;
