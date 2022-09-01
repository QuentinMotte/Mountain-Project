import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Landing() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <NavLink to={"/"}>Landing</NavLink>
        <br />
        <NavLink to={"/FAQ"}>FAQ</NavLink>
        <br />
        <NavLink to={"/About"}>About</NavLink>
        <br />
        <NavLink to={"/Conditions"}>Conditions</NavLink>
        <br />
        <NavLink to={"/Subscription"}>Subscription</NavLink>
        <br />
        <NavLink to={"/Subscription/success"}>Success</NavLink>
        <br />
        <NavLink to={"/Select-Profile"}>Select Profile</NavLink>
        <br />
        <NavLink to={"/Home"}>Home</NavLink>
        <br />
        <NavLink to={"/Home/Movies"}>Movies</NavLink>
        <br />
        <NavLink to={"/Home/Series"}>Series</NavLink>
        <br />
        <NavLink to={"/Search"}>Search</NavLink>
        <br />
        <NavLink to={"/Watchlist"}>Watchlist</NavLink>
        <br />
        <NavLink to={"/History"}>History</NavLink>
        <br />
        <NavLink to={"/Settings"}>Settings</NavLink>
        <br />
        <NavLink to={"/Movie/id"}>Movie</NavLink>
        <br />
        <NavLink to={"/Player"}>Player</NavLink>
        <br />
      </main>
      <Footer></Footer>
    </>
  );
}

export default Landing;
