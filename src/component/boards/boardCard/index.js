import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HistoryIcon from "@material-ui/icons/History";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DialogEditBoard from "../../dialogs/dialogEditBoard";
import DialogShareBoard from "../../dialogs/dialogShareBoard";
import useStyles from "./styles";
import config from "../../../config";

const ITEM_HEIGHT = 48;

const convertDateToString = (dateCreate) => {
  const date = new Date(parseInt(dateCreate));

  const MONTH_STRING = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = date.getMonth();

  return `${day} ${MONTH_STRING[month]}`;
};

const BoardCard = ({
  title,
  dateCreate,
  id,
  shareWith,
  onRemoveBoard,
  onEditboard,
  onShareBoard,
}) => {
  // Styles
  const classes = useStyles();

  // React router hook
  const history = useHistory();

  // States
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenDialogShareBoard, setIsOpenDialogShareBoard] = useState(false);
  const [isOpenDialogEditBoard, setIsOpenDialogEditBoard] = useState(false);

  const open = Boolean(anchorEl);

  // Setups
  const handleClickCloseDialogShareBoard = () => {
    setIsOpenDialogShareBoard(false);
  };
  const handleClickOpenDialogShareBoard = () => {
    setIsOpenDialogShareBoard(true);
  };

  const handleRemoveBoard = () => {
    onRemoveBoard(id, title);
  };

  const handleClickCloseDialogEditBoard = () => {
    setIsOpenDialogEditBoard(false);
  };
  const handleClickOpenDialogEditBoard = () => {
    setIsOpenDialogEditBoard(true);
  };

  const handleClickOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickCard = () => {
    history.push(`${config.PUBLIC_URL}/board/${id}`);
  };

  const handleChangeBoardCard = (title) => {
    onEditboard(id, title);
  };

  const handleShareBoardCard = (email) => {
    onShareBoard(id, email);
  };

  return (
    <>
      <DialogShareBoard
        title={title}
        isOpen={isOpenDialogShareBoard}
        onClose={handleClickCloseDialogShareBoard}
        onShare={handleShareBoardCard}
      />

      <DialogEditBoard
        title={title}
        isOpen={isOpenDialogEditBoard}
        onClose={handleClickCloseDialogEditBoard}
        onClickChange={handleChangeBoardCard}
      />

      <Grid item key={title} xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.cardContainer}>
          <CardHeader
            title={title}
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
            className={classes.cardHeader}
            onClick={handleClickCard}
          />

          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={handleClickCard}
          >
            <div style={{ display: "flex" }}>
              <HistoryIcon fontSize="small" />
              <div>{" " + convertDateToString(dateCreate)}</div>
            </div>

            <div style={{ display: "flex" }}>
              <ShareIcon fontSize="small" />
              <div>{shareWith}</div>
            </div>
          </CardContent>

          <CardActions
            style={{
              padding: 0,
              display: "flex",
              flexDirection: "row-reverse",
              cursor: "auto",
            }}
          >
            <IconButton
              aria-label="more-action"
              style={{ borderRadius: 5, padding: 2, height: 35 }}
              onClick={handleClickOpenMenu}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClickCloseMenu}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {onShareBoard ? (
                <MenuItem
                  onClick={() => {
                    handleClickCloseMenu();
                    handleClickOpenDialogShareBoard();
                  }}
                >
                  Share
                </MenuItem>
              ) : (
                <></>
              )}
              <MenuItem
                onClick={() => {
                  handleClickCloseMenu();
                  handleClickOpenDialogEditBoard();
                }}
              >
                Edit
              </MenuItem>
              {onShareBoard ? (
                <MenuItem
                  onClick={() => {
                    handleClickCloseMenu();
                    handleRemoveBoard();
                  }}
                >
                  Delete
                </MenuItem>
              ) : (
                <></>
              )}
            </Menu>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default BoardCard;
