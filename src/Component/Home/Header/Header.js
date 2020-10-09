import React from "react";
import HeaderMain from "./HeaderMain/HeaderMain";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import BussinesInfo from "../BussinesInfo/BussinesInfo";
const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <BussinesInfo></BussinesInfo>
    </div>
  );
};

export default Header;
