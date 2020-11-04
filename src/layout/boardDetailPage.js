import React, { useEffect, useState } from "react";
import BoardDetail from "../components/boards/boardDetails";
import Header from "../components/headers";
import RedirectCustom from "../components/redirectCustoms";

const BoardDetailPage = ({ match }) => {
  const idBoard = match.params.id;
  const [redirectLogin, setRedirectLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) setRedirectLogin(true);
  }, []);

  return (
    <RedirectCustom to="/login" isRedirect={redirectLogin}>
      <Header />
      <BoardDetail idBoard={idBoard} />
    </RedirectCustom>
  );
};

export default BoardDetailPage;
