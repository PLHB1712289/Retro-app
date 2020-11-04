import { makeStyles } from "@material-ui/core";

export default makeStyles({
  column: {
    padding: 10,
    borderRadius: 5,
  },
  lable: {
    backgroundColor: "#2196f3ab",
    borderRadius: 5,
  },
  containerTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 10,
  },
  tag: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  item: {
    border: "2px solid rgba(0,0,0,0.3)",
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  remove: {
    width: 25,
    height: 25,
    cursor: "pointer",
    borderRadius: 5,
    padding: 2,
    "&:hover": {
      backgroundColor: "green",
    },
  },
});
