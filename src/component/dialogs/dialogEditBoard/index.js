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

const DialogNewBoard = ({ isOpen, onClose, onClickChange, title }) => {
  const [titleLocal, setTitle] = useState(title);

  const handleChangeTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleClickChange = () => {
    if (!titleLocal) {
      alert("Please fill board's name!");
      return;
    }

    const alertConfirm = window.confirm(`Do you want to edit ${title}?`);

    if (!alertConfirm) {
      setTitle(title);
      onClose();
      return;
    }

    onClickChange(titleLocal);
    onClose();
  };

  const handleClickClose = () => {
    setTitle(title);
    onClose();
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="form-dialog-title"
      >
        <div style={{ width: "400px" }}>
          <DialogTitle id="form-dialog-title">Edit Board</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter name..."
              type="text"
              fullWidth
              onChange={handleChangeTitle}
              value={titleLocal}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClickClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => handleClickChange()} color="primary">
              Done
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default DialogNewBoard;
