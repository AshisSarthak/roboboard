import React from "react";
import "./App.css";
import Board from "../board/board";
import { useMoveRobots } from "../../hooks/use-move-robots";

function App() {
  const {move,turnLeft,turnRight} = useMoveRobots();
  return (
    <>
      <button onClick={move}>Move</button>
      <button onClick={turnLeft}>Turn Left</button>
      <button onClick={turnRight}>Turn Right</button>
      <Board />
    </>
  );
}

export default App;
