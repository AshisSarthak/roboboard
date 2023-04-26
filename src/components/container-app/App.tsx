import React from "react";
import "./App.css";
import Board from "../board/board";
import { useMoveRobots } from "../../hooks/use-move-robots";
import CommandsDrawer from "../commands-drawer/commands-drawer";

function App() {
  const {move,turnLeft,turnRight} = useMoveRobots();
  return (
    <>
      <header className="robo-header">
        <CommandsDrawer />
      </header>
      <Board dimension={4}/>
    </>
  );
}

export default App;
