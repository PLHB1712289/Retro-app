import React from "react";

import { Redirect } from "react-router-dom";

const RedirectCustom = ({ isRedirect, to, children }) => {
  return <>{isRedirect ? <Redirect to={to} /> : children}</>;
};

export default RedirectCustom;
