import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";
import HomePage from "./layout/homePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/" component={HomePage} />
        <Route component={<div>Not found</div>} />
      </Switch>
    </Router>
  );
}

export default App;
