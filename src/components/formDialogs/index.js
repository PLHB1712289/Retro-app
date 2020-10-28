import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormDialog = ({ isOpen, clickClose }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => clickClose()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Board</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <i>
              “I’ve missed more than 9000 shots in my career. I’ve lost almost
              300 games. 26 times I’ve been trusted to take the game winning
              shot and missed. I’ve failed over and over and over again in my
              life. And that is why I succeed.”
            </i>{" "}
            – <b>Michael Jordan</b>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name of newboard"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => clickClose()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => clickClose()} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
