import { CssBaseline } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "./components/footers";
import Header from "./components/headers";

import Board from "./components/boards";
import FormDialog from "./components/formDialogs";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {open ? (
        <FormDialog isOpen={open} clickClose={() => handleClose()} />
      ) : (
        <></>
      )}
      <Header openForm={() => handleClickOpen()} />
      <Board />
      <Footer />
    </React.Fragment>
  );
}

export default App;
