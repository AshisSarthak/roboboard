import { Box } from "@mui/material";
import { useContext, useState } from "react";
import "./commands-center.css";
import { PlaceRobotBox } from "./place-robot";
import { VacuumNavigation } from "./vacuum-navigation";
import { RoboBoardContext } from "../../context";
import { useMoveRobots } from "../../hooks/use-move-robots";
import { ReportDialog } from "./report-dialog";
import { DIRECTION_ENUM } from "../../context/types";

export type RobotData = {
  positionX: number;
  positionY: number;
  face: DIRECTION_ENUM;
};

const DEFAULT_REPORT_CONTENT = {
  positionX: Infinity,
  positionY: Infinity,
  face: DIRECTION_ENUM.EAST,
};

export const CommandsCenter = () => {
  const { state } = useContext(RoboBoardContext);
  const { dimension, isPlaced } = state;
  const { move, placeRobot, turnLeft, turnRight, resetRobot, report } =
    useMoveRobots();
  const [showReport, setShowReport] = useState<boolean>(false);
  const [reportContent, setReportContent] = useState<RobotData>(
    DEFAULT_REPORT_CONTENT
  );

  const handleShowReport = () => {
    setShowReport(true);
    setReportContent(report() as RobotData);
  };
  const handleCloseDialog = () => {
    setShowReport(false);
  };
  return (
    <Box className="commands-container">
      <header className="page-header">Robot Vacuum Cleaner</header>
      <Box className="commands-box">
        <PlaceRobotBox
          dimension={dimension}
          placeRobot={placeRobot}
          resetRobot={resetRobot}
        />
        <VacuumNavigation
          isPlaced={isPlaced}
          move={move}
          report={handleShowReport}
          turnLeft={turnLeft}
          turnRight={turnRight}
        />
        <ReportDialog
          open={showReport}
          handleClose={handleCloseDialog}
          reportContent={reportContent}
        />
      </Box>
    </Box>
  );
};
