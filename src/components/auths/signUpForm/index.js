import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assert/img/City_Landscape_Background.jpg";
import Copyright from "../../icons/copyRights";
import RedirectCustom from "../../redirectCustoms";
import signUp from "./services";
import useStyles from "./styles";

const SignUpForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [redirectLogin, setRedirectLogin] = useState(false);

  const handleSubmitForm = (e) => {
    if (password === rePassword) {
      signUp({ email, fullName, password }).then((result) => {
        if (result === "Success") {
          setRedirectLogin(true);
        }
      });
    } else {
      alert("error password");
    }
    e.preventDefault();
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangeFullName = (e) => {
    const { value } = e.target;
    setFullName(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleChangeRePassword = (e) => {
    const { value } = e.target;
    setRePassword(value);
  };

  return (
    <RedirectCustom isRedirect={redirectLogin} to="/login">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "100vh",
        }}
      >
        <Typography
          component="h1"
          style={{
            fontSize: 50,
            textAlign: "center",
            color: "white",
          }}
        >
          RETRO
        </Typography>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            border: "1px solid gray",
            alignSelf: "center",
            borderRadius: 10,
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmitForm}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="fullName"
                autoFocus
                onChange={handleChangeFullName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                type="email"
                autoFocus
                onChange={handleChangeEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangePassword}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="repassword"
                label="RePassword"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangeRePassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>

              <div style={{ textAlign: "center" }}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/login"
                  variant="body2"
                >
                  {"Have an account? Sign In"}
                </Link>
              </div>
            </form>
          </div>
          <Box mt={2}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </RedirectCustom>
  );
};

export default SignUpForm;
