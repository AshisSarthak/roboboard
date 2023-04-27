import { useContext } from "react";
import { RoboBoardContext } from "../context";
import { DIRECTION_ENUM } from "../context/types";
import { ACTIONS } from "../reducer/actions";
import { INVALID_ROBOT_PLACE } from "../utils/constants";

export const useMoveRobots = () => {
  const { state, dispatch } = useContext(RoboBoardContext);
  const { face, positionX, positionY, dimension } = state;

  const placeRobot = ([posX, posY, face]: any) => {
    if (
      isNaN(posX) ||
      isNaN(posY) ||
      !Object.values(DIRECTION_ENUM).includes(face)
    ) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: INVALID_ROBOT_PLACE,
      });
    } else {
      dispatch({
        type: ACTIONS.SET_COMMANDS,
        payload: `PLACE: ${posX}, ${posY}, ${face} `,
      });
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "",
      });
      dispatch({
        type: ACTIONS.SET_ROBOT,
        payload: {
          posX: +posX,
          posY: +posY,
          face,
        },
      });
    }
  };
  const move = () => {
    if (face === DIRECTION_ENUM.NORTH) {
      dispatch({
        type: ACTIONS.MOVEY,
        payload: +positionY < dimension - 1 ? 1 : 0,
      });
    }
    if (face === DIRECTION_ENUM.SOUTH) {
      dispatch({
        type: ACTIONS.MOVEY,
        payload: +positionY > 0 ? -1 : 0,
      });
    }
    if (face === DIRECTION_ENUM.EAST) {
      dispatch({
        type: ACTIONS.MOVEX,
        payload: +positionX < dimension - 1 ? 1 : 0,
      });
    }
    if (face === DIRECTION_ENUM.WEST) {
      dispatch({
        type: ACTIONS.MOVEX,
        payload: +positionX > 0 ? -1 : 0,
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
      type: ACTIONS.SET_COMMANDS,
      payload: "LEFT",
    });
    dispatch({
      type: ACTIONS.TURN,
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
      type: ACTIONS.SET_COMMANDS,
      payload: "RIGHT",
    });
    dispatch({
      type: ACTIONS.TURN,
      payload: newface,
    });
  };
  const report = () => {
    dispatch({
      type: ACTIONS.SET_COMMANDS,
      payload: `OUTPUT: ${positionX}, ${positionY}, ${face} `,
    });
  };

  return { move, turnLeft, turnRight, report, placeRobot };
};
