import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assert/img/logo.png";
import RedirectCustom from "../redirectCustoms";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  const [isLogout, setIsLogout] = useState(false);

  const onClickLogout = () => {
    localStorage.removeItem("token");
    setIsLogout(true);
  };

  return (
    <RedirectCustom to="/login" isRedirect={isLogout}>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="div" className={classes.toolbarTitle}>
            <Link to="/">
              <Button>
                <img src={Logo} alt="logo" className={classes.logo} />
              </Button>
            </Link>
          </Typography>
          <nav>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="button"
                color="textPrimary"
                className={classes.link}
              >
                HOME
              </Button>
            </Link>
            <Button
              variant="button"
              color="textPrimary"
              className={classes.link}
              onClick={() => onClickLogout()}
            >
              LOG OUT
            </Button>
            <Link style={{ textDecoration: "none" }} to="/profile">
              <Button
                variant="button"
                color="textPrimary"
                className={classes.link}
              >
                PROFILE
              </Button>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </RedirectCustom>
  );
};

export default Header;
