import {
  Card,
  CardHeader,
  Grid,
  Button,
  CardActions,
  CardContent,
} from "@material-ui/core";

import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

const BoardItem = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Grid item key={title} xs={12} sm={title === "Enterprise" ? 12 : 6} md={4}>
      <Card>
        <CardHeader
          title={title}
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <ul>{description}</ul>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="outlined" color="primary">
            Detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BoardItem;
