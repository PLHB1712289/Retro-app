import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogShareBoard = ({ isOpen, onClose, title, onShare }) => {
  // States
  const [emailFriend, setEmailFriend] = useState("");

  // Setups
  const handleShare = () => {
    if (!emailFriend) {
      alert("Please fill your email friend!");
      return;
    }

    const confirmShare = window.confirm("Do you want to share this board?");

    if (!confirmShare) {
      setEmailFriend("");
      onClose();
      return;
    }

    onShare(emailFriend);
    setEmailFriend("");
    onClose();
  };

  const handleChangeEmailFriend = (e) => {
    const { value } = e.target;
    setEmailFriend(value);
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
          <DialogTitle id="form-dialog-title">Share "{title}"</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Your Friend"
              type="text"
              fullWidth
              value={emailFriend}
              onChange={handleChangeEmailFriend}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleShare} color="primary">
              Share
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default DialogShareBoard;
