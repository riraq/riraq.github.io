import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarBtn from "./NavbarBtn";
import NavTabs from "./NavTabs";
import { Tabs } from "@material-ui/core"

function Header() {
  return (
      <Tabs className="navbar navbar-expand-sm navbar-dark mb-3">
          <NavbarBrand />
          <NavbarBtn />
          <NavTabs />
      </Tabs>
  )
}

export default Header;