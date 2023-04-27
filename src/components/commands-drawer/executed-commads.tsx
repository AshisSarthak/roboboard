import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { RoboBoardContext } from "../../context";
import "./commands-drawer.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ExecutedCommands = () => {
  const {
    state: { userGivenCommands },
  } = React.useContext(RoboBoardContext);

  if (!userGivenCommands?.length) {
    return null;
  }
  return (
    <Box className="executed-commands">
      <header className="box-header">Executed Commands</header>
      <Stack spacing={2}>
        {userGivenCommands?.map((command) => (
          <Item>{command}</Item>
        ))}
      </Stack>
    </Box>
  );
};
