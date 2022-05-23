import React from "react";
import "./Home.css";
import Common from "./Common";
import {NavLink} from "react-router-dom";


let Home=()=>{
    return (
      <>
        <Common
          title="Grow your buisness with"
          img="https://www.pngkit.com/png/detail/852-8528546_next-work-with-laptop-png.png"
          visit="/service"
          btName="Get Started"
        />
      </>
    );
}

export default Home;