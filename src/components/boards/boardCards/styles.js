import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: "#2196f394",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  hover: {
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  },
}));
