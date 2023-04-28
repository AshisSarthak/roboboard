import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components/container-app/App";
import { RoboBoardContextProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
