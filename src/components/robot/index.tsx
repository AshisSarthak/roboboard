import React, { useContext } from "react";
import { RoboBoardContext } from "../../context";
import { Box, Container, Grid, Paper, styled } from "@mui/material";

const Robot = () => {
  const { state, dispatch } = useContext(RoboBoardContext);
  console.log("State is", state);
  return (
    <Box
      sx={{
        height: "80px",
        width: "80px",
        backgroundColor: "red",
        color: "white",
      }}
    >
      Robot
    </Box>
  );
};

export default Robot;
