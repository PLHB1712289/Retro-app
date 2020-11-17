import { makeStyles } from "@material-ui/core";

export default makeStyles({
  item: {
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    boxSizing: "border-box",
    borderWidth: 5,
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    justifyContent: "center",
  },
  input: {
    boxSizing: "border-box",
    padding: 5,
    margin: 0,
    width: "100%",
    height: 35,
    marginRight: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 2,
  },
  areaButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  button: {
    borderRadius: 2,
    padding: "4px 8px",
    margin: "0px 2px",
  },
});
