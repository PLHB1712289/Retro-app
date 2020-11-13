import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  socialLoginFB: {
    margin: theme.spacing(0.5, 0, 2),
    width: "100%",
    borderRadius: 4,
    backgroundColor: "rgba(24,119,242,1)",
    height: 36,
    color: "white",

    "&:hover": {
      backgroundColor: "rgba(24,119,242,0.8)",
    },
  },

  socialLoginGG: {
    margin: theme.spacing(0.5, 0, 2),
    width: "100%",
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,1)",
    height: 36,
    color: "black",
    border: "1px solid rgba(0,0,0,0.2)",

    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },
  },
  titleSocialLogin: {
    fontSize: "0.875rem",
    textTransform: "uppercase",
    color: "white",
    margin: "0 10px",
    fontWeight: 500,
  },
}));
