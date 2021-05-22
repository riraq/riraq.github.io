import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarBtn from "./NavbarBtn";
import NavTabs from "./NavTabs";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container-fluid">
        <NavbarBrand />
        <NavbarBtn />
        <NavTabs />
      </div>
    </nav>
  )
}

export default Header;