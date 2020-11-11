import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FacebookCircularProgress from "../icons/progress";
import services from "./services";
import useStyles from "./styles";

const Profile = () => {
  // Styles
  const classes = useStyles();

  // States
  const [isLoaded, setIsLoaded] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { success, userInfo } = await services.getUserInfo();
        setIsLoaded(true);
        if (!success) {
          alert("Get profile failed!");
          return;
        }
        const { email, fullName } = userInfo;
        setEmail(email);
        setFullName(fullName);
      } catch (e) {
        setIsLoaded(true);
        alert("Can't connect to server!");
      }
    })();
  }, []);

  const handleChangeInfo = () => {
    setIsLoaded(false);
    (async () => {
      try {
        const { success, userInfo } = await services.changeUserInfo({
          fullName,
        });

        if (!success) {
          alert("Change failed");
          return;
        }

        setFullName(userInfo.fullName);
      } catch (e) {
        alert("Can't connect to server!");
      }
      setIsLoaded(true);
    })();
  };

  const onChangeFullName = (e) => {
    const { value } = e.target;
    setFullName(value);
  };

  return (
    <FacebookCircularProgress isDisplay={!isLoaded}>
      <div className={classes.container}>
        <div className={classes.mainArea}>
          <div style={{ textAlign: "center", fontSize: 50 }}>PROFILE</div>

          <div className={classes.subArea}>
            <div className={classes.inputField}>
              <label className={classes.label} onChange={onChangeFullName}>
                Email:
              </label>
              <input className={classes.input} value={email} />
            </div>

            <div className={classes.inputField}>
              <label className={classes.label}>Full Name: </label>
              <input
                className={classes.input}
                value={fullName}
                onChange={onChangeFullName}
                autoFocus
              />
            </div>

            <Button
              className={classes.button}
              onClick={() => handleChangeInfo()}
            >
              change profile
            </Button>
          </div>
        </div>
      </div>
    </FacebookCircularProgress>
  );
};

export default Profile;
