import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { TextField } from "@mui/material";
import "./commands-drawer.css";
import { useParseCommands } from "../../hooks/use-parse-commands";
import { ExecutedCommands } from "./executed-commads";

export default function CommandsDrawer() {
  const [rawCommand, setRawCommand] = React.useState("");
  const { handleParseCommands } = useParseCommands();

  const handleCommandsSubmit = () => {
    handleParseCommands(rawCommand);
    setRawCommand("");
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <Box
        sx={{ width: 400, borderLeft: "1px solid #ccc", maxHeight: "100vh" }}
        role="presentation"
      >
        <header className="commands-header">Enter Command</header>
        <Divider />
        <Box className="commands-body">
          <TextField
            id="filled-multiline-flexible"
            label="Tell Robot What to do"
            multiline
            variant="outlined"
            required
            fullWidth
            value={rawCommand}
            onChange={(event) => {
              setRawCommand(event.currentTarget.value);
            }}
            inputProps={{ style: { textTransform: "uppercase" } }}
          />
          <footer className="commands-footer">
            <Button
              variant="outlined"
              disabled={!rawCommand.trim().length}
              onClick={handleCommandsSubmit}
            >
              Submit
            </Button>
          </footer>
        </Box>
        <ExecutedCommands />
      </Box>
    </Box>
  );
}
