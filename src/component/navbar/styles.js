const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#2196f3",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    width: 122,
    height: 50,
    boxSizing: "border-box",
    // paddingBottom: 6,
    // paddingTop: 6,
    // paddingLeft: 16,
    // paddingRight: 16,
    // borderRadius: 5,
    textDecoration: "none",
    color: "white",

    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.5)",
      color: "black",
    },
  },
  logo: {
    maxWidth: 80,
    maxHeight: 80,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
}));
