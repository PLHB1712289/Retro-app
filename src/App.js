import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./component/homePage";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";

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
    // <Test />
  );
}

export default App;
