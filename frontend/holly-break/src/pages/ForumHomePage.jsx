import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Footer from '../component/Footer';
import Header from '../component/Header';

const ForumHomePage = () => {  
    const [topic, setTopic] = useState([])

useEffect(()=>{
axios.get("http://localhost:5000/api/topic/").then((res)=>setTopic(res.data))
console.log(topic);
},[])
    return (
        <>
            <Header/>
            <main className="homePageForum">
                <div className="navLink_container">
                <NavLink className="header_navLink" to={"/Forum/Create"}>
                create Topic
              </NavLink>
              <NavLink className="header_navLink" to={"/"}>
                Series
              </NavLink>
              <NavLink className="header_navLink" to={"/"}>
                Films
              </NavLink>
              <NavLink className="header_navLink" to={"/Forum/All"}>
                All
              </NavLink>
              </div>
                <h1>Hello</h1>
            </main>
            <Footer/>
        </>
    );
};

export default ForumHomePage;