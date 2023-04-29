import { RoboBoardState } from "../context/types";
import { OUT_OF_BOUND } from "../utils/constants";
import { ACTIONS } from "./actions";

export type ACTIONS_MAP = {
  type: ACTIONS;
  payload: any;
};

export const reducer = (state: RoboBoardState, action: ACTIONS_MAP) => {
  switch (action.type) {
    case ACTIONS.SET_ROBOT: {
      const { posX, posY, face } = action.payload;
      return {
        ...state,
        positionX: posX,
        positionY: posY,
        face: face.toLowerCase(),
      };
    }
    case ACTIONS.MOVEX:
      return {
        ...state,
        positionX: state.positionX + action.payload,
        ...(action.payload !== 0
          ? {
              error: "",
            }
          : {
              error: OUT_OF_BOUND,
            }),
      };
    case ACTIONS.MOVEY:
      return {
        ...state,
        positionY: state.positionY + action.payload,
        ...(action.payload !== 0
          ? {
              error: "",
            }
          : {
              error: OUT_OF_BOUND,
            }),
      };
    case ACTIONS.TURN:
      return {
        ...state,
        face: action.payload,
      };
    case ACTIONS.SET_DIMENSION:
      return {
        ...state,
        dimension: action.payload,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTIONS.IS_PLACED:
      return {
        ...state,
        isPlaced: action.payload,
      };
    default:
      return { ...state };
  }
};
