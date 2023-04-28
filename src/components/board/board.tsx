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
              height: "80px",
              width: "80px",
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
          gridTemplateColumns: `repeat(${dimension}, 80px)`,
          height: `${dimension * 80}px`,
          width: `${dimension * 80}px`,
        }}
      >
        {createBoxes()}
        <Robot />
      </Box>
    </Box>
  );
};

export default Board;
