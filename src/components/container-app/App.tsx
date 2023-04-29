import React from "react";
import "./App.css";
import Board from "../board/board";
import { Box } from "@mui/material";
import { CommandsCenter } from "../commands-center";

function App() {
  return (
    <Box className="container-box">
      <CommandsCenter />
      <Board dimension={5} />
    </Box>
  );
}

export default App;
