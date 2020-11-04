import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from "@material-ui/core";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogShareBoard = ({ isOpen, onClose, nameBoard }) => {
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
            onClose={() => onClose()}
            aria-labelledby="form-dialog-title"
          >
            <div style={{ width: "400px" }}>
              <DialogTitle id="form-dialog-title">
                Share "{nameBoard}"
              </DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Your Friend"
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => onClose()} color="primary">
                  Cancel
                </Button>
                <Button onClick={() => onClose()} color="primary">
                  Share
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default DialogShareBoard;
