import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./component/homePage";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";
import config from "./config";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router basename={"retro-app"}>
        <Switch>
          <Route path={config.PUBLIC_URL + "/login"}>
            <SignIn />
          </Route>
          <Route path={config.PUBLIC_URL + "/register"}>
            <SignUp />
          </Route>
          <Route path={config.PUBLIC_URL + "/"}>
            {/* <HomePage /> */}
            <div>This is homepage</div>
          </Route>
          <Route>
            <Redirect to={config.PUBLIC_URL + "/"} />
          </Route>
        </Switch>
      </Router>
    </DndProvider>
  );
}

export default App;
