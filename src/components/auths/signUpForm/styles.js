import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0.5),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  dob: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    height: 58,
    marginTop: 14,
    marginBottom: 8,
    border: "1px solid rgba(0,0,0,0.25)",
    borderRadius: 5,
    color: "rgba(0,0,0,0.6)",
    fontWeight: 520,
    fontSize: 16,
    padding: 12,
    "&:hover": {
      border: "1px solid rgba(0,0,0,0.87)",
    },
    cursor: "pointer",
  },
}));
