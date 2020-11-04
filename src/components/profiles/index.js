import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Header from "../headers";
import FacebookCircularProgress from "../icons/progressComponent";
import services from "./services";
import useStyles from "./styles";

const Profile = () => {
  const classes = useStyles();

  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { email, fullName, password } = await services.getUserInfo();
      setEmail(email);
      setFullName(fullName);
      setCurrentPassword(password);
    };

    fetch();
  }, []);

  const handleChangeInfo = () => {
    services.changeUserInfo({ fullName }).then((res) => {
      alert("change success");
    });
  };

  const handleChangePassword = () => {
    if (password != currentPassword) {
      console.log(password, " - ", currentPassword);
      alert("current password invalid");
      return;
    }

    if (newPassword != rePassword) {
      alert("newpassword & repassword do not match");
      return;
    }

    services.changePassword(password, newPassword).then((res) => {
      alert("change success");
    });
  };

  const onChangeFullName = (e) => {
    const { value } = e.target;
    setFullName(value);
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
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.mainArea}>
          <div style={{ textAlign: "center", fontSize: 50 }}>PROFILE</div>
          {fullName === null ? (
            <FacebookCircularProgress />
          ) : (
            <>
              <div className={classes.subArea}>
                <label className={classes.label}>INFO</label>
                <div className={classes.inputField}>
                  <label className={classes.label} onChange={onChangeFullName}>
                    Email:
                  </label>
                  <div
                    style={{
                      width: 250,
                      fontSize: 15,
                      textAlign: "left",
                      textDecoration: "underline",
                    }}
                  >
                    {email}
                  </div>
                </div>

                <div className={classes.inputField}>
                  <label className={classes.label}>Full Name: </label>
                  <input
                    className={classes.input}
                    value={fullName}
                    onChange={onChangeFullName}
                  />
                </div>

                <Button
                  className={classes.button}
                  onClick={() => handleChangeInfo()}
                >
                  change profile
                </Button>
              </div>

              <div className={classes.subArea}>
                <label className={classes.label}>PASSWORD</label>
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
                  change password
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
