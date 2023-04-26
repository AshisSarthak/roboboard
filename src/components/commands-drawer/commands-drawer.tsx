import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { TextField } from "@mui/material";
import "./commands-drawer.css";

export default function CommandsDrawer() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [rawCommands, setRawCommands] = React.useState("");

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(isOpen);
    };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <Button onClick={toggleDrawer(true)} variant="outlined">
        Give Commands to Robot
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ width: 400 }} role="presentation">
          <header className="commands-header">Enter Command</header>
          <Divider />
          <Box className="commands-body">
            <TextField
              id="filled-multiline-flexible"
              label="Multiline"
              multiline
              minRows={6}
              variant="outlined"
              required
              fullWidth
              value={rawCommands}
              onChange={(event) => {
                setRawCommands(event.currentTarget.value);
              }}
            />
            <footer  className="commands-footer">
            <Button
              variant="outlined"
              disabled={!rawCommands.trim().length}
             
            >
              Submit
            </Button>
            </footer>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
