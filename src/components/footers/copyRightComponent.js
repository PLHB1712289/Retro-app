import { Link, Typography } from "@material-ui/core";
import React from "react";

import config from "../../config";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        {config.APP_URL}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
