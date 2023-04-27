import React, { useContext, useEffect } from "react";
import { RoboBoardContext } from "../../context";
import { Alert, Box, Snackbar } from "@mui/material";
import Robot from "../robot";
import "./board.css";
import { InfoBox } from "../info-box/info-box";

interface IBoardProps {
  dimension: number;
}

const Board = (props: IBoardProps) => {
  const { dimension } = props;
  const {
    state: { error },
    dispatch,
  } = useContext(RoboBoardContext);
  const [_open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch({
      type: "SET_DIMENSION",
      payload: dimension,
    });
  }, [dimension, dispatch]);

  return (
    <Box className="board-container">
      {error && (
        <Snackbar open={!!error} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      )}
      <Box>
        <InfoBox />
      </Box>
      <Box
        className="board-box"
        sx={{
          "grid-template-columns": `repeat(${dimension}, 100px)`,
          height: `${dimension * 100}px`,
          width: `${dimension * 100}px`,
        }}
      >
        <Robot />
      </Box>
    </Box>
  );
};

export default Board;
