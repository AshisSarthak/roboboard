import React, { useContext, useEffect } from "react";
import { RoboBoardContext } from "../../context";
import { Box, Container, Grid, Paper, styled } from "@mui/material";
import Robot from "../robot";
import "./board.css";

interface IBoardProps {
  dimension: number;
}

const Board = (props: IBoardProps) => {
  const { dimension } = props;
  const {
    state: { positionX, positionY },
    dispatch,
  } = useContext(RoboBoardContext);

  useEffect(() => {
    dispatch({
      type: "SET_DIMENSION",
      payload: dimension,
    });
  }, [dimension, dispatch]);

  const createBoxes = () => {
    const boxes = [];
    for (let i = dimension - 1; i >= 0; i--) {
      for (let j = dimension - 1; j >= 0; j--) {
        boxes.push(
          <Box
            sx={{
              height: "100px",
              width: "100px",
            }}
          >
            <Robot posX={j} posY={i} />
          </Box>
        );
      }
    }
    return boxes;
  };

  return (
    <Container maxWidth="md">
      <Box
        className="board-box"
        sx={{
        "grid-template-columns": `repeat(${dimension}, 100px)`,
          height: `${dimension * 100}px`,
          width: `${dimension * 100}px`,
        }}
      >
        {createBoxes()}
      </Box>
    </Container>
  );
};

export default Board;
