import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import backgroundImage from "../../assert/img/City_Landscape_Background.jpg";
import config from "../../config";
import Copyright from "../icons/copyRights";
import FacebookCircularProgress from "../icons/progress";
import signIn from "./services";
import useStyles from "./styles";
import GTranslateIcon from "@material-ui/icons/GTranslate";

const URL_SERVER_API = config.API_URL;

const SignInForm = () => {
  // Styles
  const classes = useStyles();

  // History react router dom
  const history = useHistory();

  // States
  const [isLoad, setIsLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // Setup
  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal) {
      history.push("/");
      return;
    }

    const tokenCookies = Cookies.get("auth");
    if (tokenCookies) {
      localStorage.setItem("token", tokenCookies);
      Cookies.remove("auth");
      history.push("/");
      return;
    }

    // check remember
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (!email || !password) return;

    setRemember(true);
    setEmail(email);
    setPassword(password);
  }, [history]);

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (remember) {
      localStorage.setItem("email", value);
    }
  };

  const onChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);

    if (remember) {
      localStorage.setItem("password", value);
    }
  };

  const onChangeRemember = (e) => {
    const { checked } = e.target;

    if (checked) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }

    setRemember(checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all!");
      return;
    }
    (async () => {
      setIsLoad(true);
      try {
        const { success, message, token } = await signIn({ email, password });

        if (!success) {
          alert(message);
          setIsLoad(false);
          return;
        }

        setIsLoad(false);
        localStorage.setItem("token", token);
        history.push("/");
      } catch (e) {
        setIsLoad(false);
        alert("Can't connect server!");
      }
    })();
  };

  const handleLoginWithFB = () => {
    window.open(`${URL_SERVER_API}/auth/facebook/sign-in`, "_self");
  };

  const handleLoginWithGG = () => {
    window.open(`${URL_SERVER_API}/auth/google/sign-in`, "_self");
  };

  // Render
  return (
    <FacebookCircularProgress isDisplay={isLoad}>
      <div
        style={{ backgroundImage: `url(${backgroundImage})`, height: "100vh" }}
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
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={onChangeEmail}
                value={email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChangePassword}
                value={password}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    onClick={onChangeRemember}
                    checked={remember}
                  />
                }
                label="Remember me"
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
              >
                Sign In
              </Button>

              <IconButton
                className={classes.socialLoginFB}
                onClick={handleLoginWithFB}
              >
                <FacebookIcon />
                <span className={classes.titleSocialLogin}>
                  Sign in with Facebook
                </span>
              </IconButton>

              <IconButton
                className={classes.socialLoginGG}
                onClick={handleLoginWithGG}
              >
                <GTranslateIcon />
                <span
                  className={classes.titleSocialLogin}
                  style={{ color: "black" }}
                >
                  Sign in with Google
                </span>
              </IconButton>

              <Grid container>
                <Grid item xs>
                  <Link to="" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/register"
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </FacebookCircularProgress>
  );
};

export default SignInForm;
