import { Box, List, ListItem } from "@mui/material";
import { INSTRUCTIONS } from "../../utils/constants";

export const InfoBox = () => {
  return (
    <Box className="instructions">
      <header className="instruction-header">Instruction</header>
      <List>
        {INSTRUCTIONS.map((instruction: string, index: number) => {
          return <ListItem key={index}>{instruction}</ListItem>;
        })}
      </List>
    </Box>
  );
};
