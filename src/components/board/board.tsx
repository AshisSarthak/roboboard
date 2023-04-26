import React, { useContext } from "react";
import { RoboBoardContext } from "../../context";
import { Box, Container, Grid, Paper, styled } from "@mui/material";
import Robot from "../robot";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: 30,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Board = () => {
  const {
    state: { positionX, positionY },
    dispatch,
  } = useContext(RoboBoardContext);

  const getBoxContent = (x: number, y: number) => {
    if (x === positionX && y === positionY) {
      return <Robot />;
    }
  };

  const createBoxes = () => {
    const boxes = [];
    for (let i = 4; i >= 0; i--) {
      for (let j = 4; j >= 0; j--) {
        boxes.push(
          <Box
            sx={{
              height: "100px",
              width: "100px",
              border: "1px solid #ccc",
            }}
          >
            {getBoxContent(j, i)}
          </Box>
        );
      }
    }
    return boxes;
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "grid",
          "grid-template-columns": "repeat(5, 100px)",
          direction: "rtl",
          justifyContent: "center",
        }}
      >
        {createBoxes()}
      </Box>
    </Container>
  );
};

export default Board;
