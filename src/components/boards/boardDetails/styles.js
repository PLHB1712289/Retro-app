import { makeStyles } from "@material-ui/core";

export default makeStyles({
  container: {
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: 700,
  },
  column: {
    padding: 10,
    borderRadius: 5,
  },
  lable: {
    backgroundColor: "rgba(27,165,206,0.2)",
    borderRadius: 5,
  },
  item: {
    border: "2px solid rgba(0,0,0,0.3)",
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
  },
});
