import React, { useReducer, createContext, Dispatch } from "react";
import { ACTIONS_MAP, reducer } from "../reducer";
import { DIRECTION_ENUM, RoboBoardState } from "./types";

const initialState: RoboBoardState = {
  positionX: 0,
  positionY: -1,
  face: DIRECTION_ENUM.NORTH,
  dimension: 5,
  isPlaced: false,
};

interface RoboBoardContextProps {
  state: RoboBoardState;
  dispatch: Dispatch<ACTIONS_MAP>;
}

const RoboBoardContext = createContext<RoboBoardContextProps>({
  state: initialState,
  dispatch: () => {},
});
RoboBoardContext.displayName = "RoboBoardContext";

function RoboBoardContextProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RoboBoardContext.Provider value={{ state: { ...state }, dispatch }}>
      {props.children}
    </RoboBoardContext.Provider>
  );
}

export { RoboBoardContext, RoboBoardContextProvider };
