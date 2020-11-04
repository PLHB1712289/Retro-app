import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assert/img/City_Landscape_Background.jpg";
import Copyright from "../../icons/copyRights";
import RedirectCustom from "../../redirectCustoms";
import signIn from "./services";
import useStyles from "./styles";

const SignInForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHomePage, setRedirectHomePage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setRedirectHomePage(true);
    }
  }, []);

  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    if (email && password) {
      signIn({ email, password }).then((res) => {
        const { token } = res;

        if (token) {
          localStorage.setItem("token", token);

          setRedirectHomePage(true);
        } else alert("error");
      });
    } else {
      alert("error");
    }
    e.preventDefault();
  };

  return (
    <RedirectCustom isRedirect={redirectHomePage} to="/">
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
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
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

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
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
    </RedirectCustom>
  );
};

export default SignInForm;
