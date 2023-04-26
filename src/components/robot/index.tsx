import React, { useContext } from "react";
import { RoboBoardContext } from "../../context";
import { Box, Container, Grid, Paper, styled } from "@mui/material";
import "./robot.css";
import { useGetArrowDirections } from "../../hooks/use-get-arrow-directions";

const Robot = (props: any) => {
  const { posX, posY } = props;
  const { state, dispatch } = useContext(RoboBoardContext);
  const { positionX, positionY, face } = state;
  const {getInvalidMoveArrow} = useGetArrowDirections()


  if (posX === positionX && posY === positionY) {
    return (
      <Box
        className={`direction-arrow robot ${face} ${getInvalidMoveArrow()}`}
      />
    );
  }
  return null;
};

export default Robot;
