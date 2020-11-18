import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./component/homePage";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import config from "./config";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Switch>
          <Route path={config.PUBLIC_URL} exact>
            <Redirect to="/" />
          </Route>
          <Route path={config.PUBLIC_URL + "/login"}>
            <SignIn />
          </Route>
          <Route path={config.PUBLIC_URL + "/register"}>
            <SignUp />
          </Route>
          <Route path={config.PUBLIC_URL + "/"}>
            <HomePage />
          </Route>
          <Route>
            <div>Not found</div>
          </Route>
        </Switch>
      </Router>
    </DndProvider>
  );
}

export default App;
