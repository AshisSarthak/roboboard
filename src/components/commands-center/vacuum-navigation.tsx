import { Button, Box } from "@mui/material";
import "./commands-center.css";

interface IVacuumNavigationProps {
  isPlaced: boolean;
  move: any;
  report: any;
  turnLeft: any;
  turnRight: any;
}

export const VacuumNavigation = (props: IVacuumNavigationProps) => {
  const { isPlaced, move, report, turnLeft, turnRight } = props;
  return (
    <Box className="navigation-box">
      <header className="place-robot-header">Vacuum Navigation</header>
      <Box className="navigation-button-box">
        <Button variant="contained" disabled={!isPlaced} onClick={move}>
          Move
        </Button>
        <Button variant="contained" disabled={!isPlaced} onClick={turnLeft}>
          Turn Left
        </Button>
        <Button variant="contained" disabled={!isPlaced} onClick={turnRight}>
          Turn Right
        </Button>
        <Button variant="contained" disabled={!isPlaced} onClick={report}>
          Report
        </Button>
      </Box>
    </Box>
  );
};
