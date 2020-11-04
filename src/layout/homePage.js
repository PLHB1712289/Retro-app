import React, { useEffect, useState } from "react";
import BoardList from "../components/boards/boardLists";
import Header from "../components/headers";
import RedirectCustom from "../components/redirectCustoms";

const HomePage = () => {
  const [redirectLogin, setRedirectLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) setRedirectLogin(true);
  }, []);

  return (
    <RedirectCustom to="/login" isRedirect={redirectLogin}>
      <Header />

      <BoardList />
    </RedirectCustom>
  );
};

export default HomePage;
