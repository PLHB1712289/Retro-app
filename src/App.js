import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./component/homePage";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/">
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
