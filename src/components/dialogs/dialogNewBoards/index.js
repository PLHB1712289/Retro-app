import { Slide } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogNewBoard = ({ isOpen, onClickClose, onClickOK }) => {
  const [title, setTitle] = useState("");
  const [description, setDecription] = useState("");

  const handleChangeTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleChangeDecription = (e) => {
    const { value } = e.target;
    setDecription(value);
  };

  const handleClickOK = () => {
    if (!title) {
      alert("Please fill title");
      return;
    }

    if (!description) {
      alert("Please fill description");
      return;
    }

    onClickOK(title, description);
    setTitle("");
    setDecription("");
    onClickClose();
  };

  return (
    <>
      {isOpen !== true ? (
        <></>
      ) : (
        <div>
          <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => onClickClose()}
            aria-labelledby="form-dialog-title"
          >
            <div style={{ width: "400px" }}>
              <DialogTitle id="form-dialog-title">Create New Board</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name of newboard"
                  type="text"
                  fullWidth
                  onChange={handleChangeTitle}
                />
                <TextField
                  margin="dense"
                  id="name"
                  label="Description"
                  type="text"
                  fullWidth
                  onChange={handleChangeDecription}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => onClickClose()} color="primary">
                  Cancel
                </Button>
                <Button onClick={() => handleClickOK()} color="primary">
                  Create
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default DialogNewBoard;
