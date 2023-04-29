import React, { useContext } from "react";
import { RoboBoardContext } from "../../context";
import { Box } from "@mui/material";
import "./robot.css";
import { useGetArrowDirections } from "../../hooks/use-get-arrow-directions";
import robot from "../../robot-vacuum-cleaner.png";

const Robot = () => {
  const { state } = useContext(RoboBoardContext);
  const { face } = state;
  const { getPositionX, getPositionY } = useGetArrowDirections();

  return (
    <Box
      data-testid="robot-box"
      className={`direction-arrow robot`}
      sx={{
        bottom: `${getPositionY()}`,
        left: `${getPositionX()}`,
      }}
    >
      <img className={`${face}`} src={robot} alt="" />
    </Box>
  );
};

export default Robot;
