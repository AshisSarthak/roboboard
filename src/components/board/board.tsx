import React, { useContext, useEffect } from "react";
import { RoboBoardContext } from "../../context";
import { Alert, Box, Snackbar } from "@mui/material";
import Robot from "../robot";
import "./board.css";
import { ACTIONS } from "../../reducer/actions";

interface IBoardProps {
  dimension: number;
}

const Board = (props: IBoardProps) => {
  const { dimension } = props;
  const {
    state: { error },
    dispatch,
  } = useContext(RoboBoardContext);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: "",
    });
  };

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_DIMENSION,
      payload: dimension,
    });
  }, [dimension, dispatch]);

  const createBoxes = () => {
    const boxes = [];
    for (let i = dimension - 1; i >= 0; i--) {
      for (let j = dimension - 1; j >= 0; j--) {
        boxes.push(
          <Box
            key={i * dimension + j}
            className="grid-boxes"
            sx={{
              height: "4rem",
              width: "4rem",
            }}
          ></Box>
        );
      }
    }
    return boxes;
  };

  return (
    <Box className="board-container">
      {error && (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      )}
      <Box
        className="board-box"
        sx={{
          gridTemplateColumns: `repeat(${dimension}, 4rem)`,
          height: `${dimension * 4}rem`,
          width: `${dimension * 4}rem`,
        }}
      >
        {createBoxes()}
        <Robot />
      </Box>
    </Box>
  );
};

export default Board;
