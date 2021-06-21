import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Rony Iraq - Full Stack Developer
            </Typography>
          <Button color="inherit" component={RouterLink} to="/about">About Me</Button>
          <Button color="inherit" component={RouterLink} to="/portfolio">Portfolio</Button>
</Toolbar>
      </AppBar>
    </div>
  );
}


// import React from "react";
// import NavbarBrand from "./NavbarBrand";
// import NavbarBtn from "./NavbarBtn";
// import NavTabs from "./NavTabs";
// import { Tabs } from "@material-ui/core"

// function Header() {
//   return (
//       <Tabs className="navbar navbar-expand-sm navbar-light mb-3">
//           <NavbarBrand />
//           <NavbarBtn />
//           <NavTabs />
//       </Tabs>
//   )
// }

// export default Header;