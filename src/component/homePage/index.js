import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import BoardDetail from "../boards/boardDetail";
import BoardList from "../boards/boardList";
import ChangePassword from "../changePassword";
import Navbar from "../navbar";
import Profile from "../profile";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) history.push("/login");
  });

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
