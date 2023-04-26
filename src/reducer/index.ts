import { ReducerWithoutAction } from "react";
import { RoboBoardState } from "../context/types";
import { ACTIONS } from "./actions";

export const reducer = (state: RoboBoardState, action: any) => {
  switch (action.type) {
    case "MOVEX":
      return {
        ...state,
        positionX: state.positionX + action.payload,
      };
    case "MOVEY":
      return {
        ...state,
        positionY: state.positionY + action.payload,
      };
    case "TURN":
      return {
        ...state,
        face: action.payload,
      };
    case "SET_DIMENSION":
      return {
        ...state,
        dimension: action.payload,
      };
    default:
      return { ...state };
  }
};
