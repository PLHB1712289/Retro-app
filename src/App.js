import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/auths/signInForm";
import SignUp from "./components/auths/signUpForm";
import HomePage from "./layout/homePage";
import BoardDetailPage from "./layout/boardDetailPage";
import Profile from "./components/profiles";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/board/:id" component={BoardDetailPage} />
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
