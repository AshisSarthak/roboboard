import { useContext } from "react";
import { RoboBoardContext } from "../context";
import { DIRECTION_ENUM } from "../context/types";

export const useGetArrowDirections = () => {
  const {
    state: { positionX, positionY, face, dimension },
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

  const getInvalidMoveArrow = () => {
    if (positionX === 0 && face === DIRECTION_ENUM.WEST) {
      return "invalid-west";
    }
    if (
      (positionX === 0 ||
        positionY === 0 ||
        (positionX === dimension - 1 && positionY === 0)) &&
      face === DIRECTION_ENUM.SOUTH
    ) {
      return "invalid-south";
    }
    if (positionY === dimension - 1 && face === DIRECTION_ENUM.NORTH) {
      return "invalid-north";
    }
    if (positionX === dimension - 1 && face === DIRECTION_ENUM.EAST) {
      return "invalid-east";
    }
    return "valid-direction";
  };

  return { getInvalidMoveArrow, getPositionX, getPositionY };
};
