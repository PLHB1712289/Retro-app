import { Button } from "@material-ui/core";
import React, { useState } from "react";
import FacebookCircularProgress from "../icons/progress";
import services from "./services";
import useStyles from "./styles";

const Profile = () => {
  // Styles
  const classes = useStyles();

  // States
  const [isLoaded, setIsLoaded] = useState(true);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  // Setups
  const handleChangePassword = () => {
    if (newPassword !== rePassword) {
      alert("Newpassword & repassword do not match");
      return;
    }
    setIsLoaded(false);

    (async () => {
      try {
        const { message } = await services.changePassword(
          password,
          newPassword
        );

        alert(message);
      } catch (e) {
        alert("Can't connect to server!");
      }
      setIsLoaded(true);
    })();
  };

  const onChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const onChangeNewPassword = (e) => {
    const { value } = e.target;
    setNewPassword(value);
  };

  const onChangeRePassword = (e) => {
    const { value } = e.target;
    setRePassword(value);
  };

  return (
    <FacebookCircularProgress isDisplay={!isLoaded}>
      <div className={classes.container}>
        <div className={classes.mainArea}>
          <div style={{ textAlign: "center", fontSize: 40 }}>
            CHANGE PASSWORD
          </div>

          <div className={classes.subArea}>
            <div className={classes.inputField}>
              <label className={classes.label}>Old Pass: </label>
              <input
                type="password"
                className={classes.input}
                value={password}
                onChange={onChangePassword}
              />
            </div>

            <div className={classes.inputField}>
              <label className={classes.label}>New Pass: </label>
              <input
                type="password"
                className={classes.input}
                value={newPassword}
                onChange={onChangeNewPassword}
              />
            </div>

            <div className={classes.inputField}>
              <label className={classes.label}>RePassword: </label>
              <input
                type="password"
                className={classes.input}
                value={rePassword}
                onChange={onChangeRePassword}
              />
            </div>

            <Button
              className={classes.button}
              onClick={() => handleChangePassword()}
            >
              change
            </Button>
          </div>
        </div>
      </div>
    </FacebookCircularProgress>
  );
};

export default Profile;
