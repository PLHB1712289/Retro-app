import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assert/img/logo.png";
import useStyles from "./styles";
import SettingsIcon from "@material-ui/icons/Settings";
import config from "../../config";

const ITEM_HEIGHT = 48;

const Navbar = () => {
  // Styles
  const classes = useStyles();

  // React router hook
  const history = useHistory();

  // States
  const [anchorEl, setAnchorEl] = useState(null);

  // Setups
  const handleClickOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickCloseMenu = () => {
    setAnchorEl(null);
  };

  const onClickSignOut = () => {
    localStorage.removeItem("token");
    handleClickCloseMenu();
    history.push(`${config.PUBLIC_URL}/login`);
  };

  const onClickProfile = () => {
    handleClickCloseMenu();
    history.push(`${config.PUBLIC_URL}/profile`);
  };

  const onClickChangePassword = () => {
    handleClickCloseMenu();
    history.push(`${config.PUBLIC_URL}/change-password`);
  };

  const onClickHome = () => {
    history.push(`${config.PUBLIC_URL}/`);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.toolbarTitle}>
            <Link to={config.PUBLIC_URL + "/"}>
              <Button>
                <img src={Logo} alt="logo" className={classes.logo} />
              </Button>
            </Link>
          </Typography>
          <nav>
            <Button
              variant="button"
              color="textPrimary"
              className={classes.link}
              onClick={onClickHome}
            >
              HOME
            </Button>
            <IconButton
              style={{
                color: "white",
                width: "50",
                height: "50",
                borderRadius: 5,
              }}
              onClick={handleClickOpenMenu}
            >
              <SettingsIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClickCloseMenu}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem onClick={onClickProfile}>Profile</MenuItem>
              <MenuItem onClick={onClickChangePassword}>
                Change password
              </MenuItem>
              <MenuItem onClick={onClickSignOut}>Sign out</MenuItem>
            </Menu>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
