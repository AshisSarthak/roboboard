import { Button, Box } from "@mui/material";
import "./commands-center.css";

interface IVacuumNavigationProps {
  isPlaced: boolean;
  move: () => void;
  report: () => void;
  turnLeft: () => void;
  turnRight: () => void;
}

export const VacuumNavigation = (props: IVacuumNavigationProps) => {
  const { isPlaced, move, report, turnLeft, turnRight } = props;
  return (
    <Box className="navigation-box">
      <header className="place-robot-header">Vacuum Navigation</header>
      <Box className="navigation-button-box">
        <Button
          color="primary"
          variant="contained"
          disabled={!isPlaced}
          onClick={move}
        >
          Move
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!isPlaced}
          onClick={turnLeft}
        >
          Turn Left
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!isPlaced}
          onClick={turnRight}
        >
          Turn Right
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!isPlaced}
          onClick={report}
        >
          Report
        </Button>
      </Box>
    </Box>
  );
};
