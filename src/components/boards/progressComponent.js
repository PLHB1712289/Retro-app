import { CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    position: "absolute",
    color: "#1a90ff",
    animationDuration: "550ms",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
    position: "relative",
  },
  case: {
    position: "relative",
  },
}));

const FacebookCircularProgress = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.case}>
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={40}
          thickness={4}
          {...props}
        />
      </span>
    </div>
  );
};

export default FacebookCircularProgress;
