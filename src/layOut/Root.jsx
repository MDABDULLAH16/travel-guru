import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import rectangle1 from "../../public/images/rectangle1.png";

const Root = () => {
  const divStyle = {
    backgroundImage: "url(../../../../public/images/rectangle1.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    height: "100vh", // Set the height as per your requirement
  };
  return (
    <div style={divStyle}>
      <div className='bg-black bg-opacity-70 text-white h-full'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
