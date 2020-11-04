import { makeStyles } from "@material-ui/core";

export default makeStyles({
  container: {
    boxSizing: "border-box",
    border: "2px solid black",
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    justifyContent: "center",
  },
  input: {
    boxSizing: "border-box",
    padding: 5,
    margin: 0,
    width: "100%",
    height: 35,
    marginRight: 5,
  },
  areaButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  button: {
    height: 25,
    border: "1 solid black",
  },
});
