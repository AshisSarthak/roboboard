import { useContext } from "react";
import { RoboBoardContext } from "../context";
import { DIRECTION_ENUM } from "../context/types";

export const useMoveRobots = () => {
  const { state, dispatch } = useContext(RoboBoardContext);
  const { face, positionX, positionY } = state;
  const move = () => {
    if (face === DIRECTION_ENUM.NORTH) {
      dispatch({
        type: "MOVEY",
        payload: +positionY <= 3 ? 1 : 0,
      });
    }
    if (face === DIRECTION_ENUM.SOUTH) {
      dispatch({
        type: "MOVEY",
        payload: +positionY >= 1 ? -1 : 0,
      });
    }
    if (face === DIRECTION_ENUM.EAST) {
      dispatch({
        type: "MOVEX",
        payload: +positionX < 4 ? 1 : 0,
      });
    }
    if (face === DIRECTION_ENUM.WEST) {
      dispatch({
        type: "MOVEX",
        payload: +positionX >= 1 ? -1 : 0,
      });
    }
  };
  const turnLeft = () => {
    let newface = face;
    switch (face) {
      case DIRECTION_ENUM.WEST:
        newface = DIRECTION_ENUM.SOUTH;
        break;
      case DIRECTION_ENUM.EAST:
        newface = DIRECTION_ENUM.NORTH;
        break;
      case DIRECTION_ENUM.NORTH:
        newface = DIRECTION_ENUM.WEST;
        break;
      default:
        newface = DIRECTION_ENUM.EAST;
        break;
    }
    dispatch({
      type: "TURN",
      payload: newface,
    });
  };
  const turnRight = () => {
    let newface = face;
    switch (face) {
      case DIRECTION_ENUM.WEST:
        newface = DIRECTION_ENUM.NORTH;
        break;
      case DIRECTION_ENUM.EAST:
        newface = DIRECTION_ENUM.SOUTH;
        break;
      case DIRECTION_ENUM.NORTH:
        newface = DIRECTION_ENUM.EAST;
        break;
      default:
        newface = DIRECTION_ENUM.WEST;
        break;
    }
    dispatch({
      type: "TURN",
      payload: newface,
    });
  };
  const report = () => {
    console.log("state", state);
  };
  return { move, turnLeft, turnRight, report };
};
