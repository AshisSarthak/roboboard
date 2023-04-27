import React, { useContext } from "react";
import { RoboBoardContext } from "../../context";
import { Box } from "@mui/material";
import "./robot.css";
import { useGetArrowDirections } from "../../hooks/use-get-arrow-directions";

const Robot = () => {
  const { state } = useContext(RoboBoardContext);
  const { positionX, face } = state;
  const { getInvalidMoveArrow, getPositionX, getPositionY } =
    useGetArrowDirections();

  if (positionX === Infinity) {
    return null;
  }

  return (
    <Box
      data-testid="robot-box"
      className={`direction-arrow robot ${face} ${getInvalidMoveArrow()}`}
      sx={{
        bottom: `${getPositionY()}`,
        left: `${getPositionX()}`,
      }}
    />
  );
};

export default Robot;
