import React, { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import BoardDetail from "../component/boards/boardDetail";
import BoardList from "../component/boards/boardList";
import Navbar from "../component/navbar";
import Profile from "../component/profile";
import ChangePassword from "../component/changePassword";

const HomePage = () => {
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) history.push("/login");
  });

  console.log(match.path);
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/change-password">
          <ChangePassword />
        </Route>

        <Route path="/board/:idBoard">
          <BoardDetail />
        </Route>

        <Route path="/" exact>
          <BoardList />
        </Route>

        <Route>
          <div style={{ fontSize: 50, textAlign: "center" }}>
            404 - Not found
          </div>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default HomePage;
