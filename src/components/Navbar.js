import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarBtn from "./NavbarBtn";
import NavTabs from "./NavTabs";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <NavbarBrand />
        <NavbarBtn />
        <NavTabs />
      </div>
    </nav>
  )
}

export default Footer;