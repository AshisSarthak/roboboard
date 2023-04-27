import React from "react";
import "./App.css";
import Board from "../board/board";
import CommandsDrawer from "../commands-drawer/commands-drawer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="container-box">
      <Board dimension={5} />
      <CommandsDrawer />
    </Box>
  );
}

export default App;
