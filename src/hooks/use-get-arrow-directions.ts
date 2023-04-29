import { useContext } from "react";
import { RoboBoardContext } from "../context";

export const useGetArrowDirections = () => {
  const {
    state: { positionX, positionY },
  } = useContext(RoboBoardContext);

  const getPositionX = () => {
    if (positionX) {
      return `${positionX * 80}px`;
    }
    return "0px";
  };

  const getPositionY = () => {
    if (positionY) {
      return `${positionY * 80}px`;
    }
    return "0px";
  };

  return { getPositionX, getPositionY };
};
