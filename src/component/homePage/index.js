import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import BoardDetail from "../boards/boardDetail";
import BoardList from "../boards/boardList";
import ChangePassword from "../changePassword";
import Navbar from "../navbar";
import Profile from "../profile";
import config from "../../config";

console.log(config);

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) history.push(`${config.PUBLIC_URL}/login`);
  });

  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route path={config.PUBLIC_URL + "/profile"}>
          <Profile />
        </Route>

        <Route path={config.PUBLIC_URL + "/change-password"}>
          <ChangePassword />
        </Route>

        <Route path={config.PUBLIC_URL + "/board/:idBoard"}>
          <BoardDetail />
        </Route>

        <Route path={config.PUBLIC_URL + "/"}>
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
