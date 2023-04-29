import {
  Button,
  Chip,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { RobotData } from ".";
import "./commands-center.css";

interface IReportDialogProps {
  open: boolean;
  handleClose: () => void;
  reportContent: RobotData;
}
export const ReportDialog = (props: IReportDialogProps) => {
  const { open, handleClose, reportContent } = props;
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Robot Position</DialogTitle>
      <Box
        sx={{
          padding: "10px 10px 20px",
        }}
      >
        <List>
          <ListItem className="inline-lists">
            Position X
            <Chip label={reportContent.positionX} variant="filled" />
          </ListItem>
          <ListItem className="inline-lists">
            Position Y
            <Chip label={reportContent.positionY} variant="filled" />
          </ListItem>
          <ListItem className="inline-lists">
            Face
            <Chip label={reportContent.face.toUpperCase()} variant="filled" />
          </ListItem>
        </List>
        <Button variant="contained" onClick={handleClose} fullWidth>
          OK
        </Button>
      </Box>
    </Dialog>
  );
};
