import React from "react";
import "./App.css";
import Board from "../board/board";
import { useMoveRobots } from "../../hooks/use-move-robots";
import CommandsDrawer from "../commands-drawer/commands-drawer";
import { Button } from "@mui/material";

function App() {
  const { move, turnLeft, turnRight } = useMoveRobots();
  return (
    <>
      <header className="robo-header">
        <Button variant="outlined" onClick={move}>
          Move
        </Button>
        <Button variant="outlined" onClick={turnLeft}>
          Turn Left
        </Button>
        <Button variant="outlined" onClick={turnRight}>
          Turn Right
        </Button>
        <CommandsDrawer />
      </header>

      <Board dimension={4} />
    </>
  );
}

export default App;
