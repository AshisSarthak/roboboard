import React, { useReducer, createContext } from "react";
import { reducer } from "../reducer";
import { DIRECTION_ENUM, RoboBoardState } from "./types";

const initialState: RoboBoardState = {
  positionX: 0,
  positionY: 0,
  face: DIRECTION_ENUM.NORTH,
};

interface RoboBoardContextProps {
  state: RoboBoardState;
  dispatch?: any;
}

const RoboBoardContext = createContext<RoboBoardContextProps>({
  state: initialState,
});
RoboBoardContext.displayName = "RoboBoardContext";

function RoboBoardContextProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RoboBoardContext.Provider value={{state: {...state}, dispatch}}>
      {props.children}
    </RoboBoardContext.Provider>
  );
}

export { RoboBoardContext, RoboBoardContextProvider };
