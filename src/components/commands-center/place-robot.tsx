import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { DIRECTION_ENUM } from "../../context/types";
import "./commands-center.css";
import { useState } from "react";
import {
  INVALID_ROBOT_FACE,
  INVALID_ROBOT_X,
  INVALID_ROBOT_Y,
  LABEL_DIRECTION,
  LABEL_X,
  LABEL_Y,
} from "../../utils/constants";

interface IPlaceRobotBoxProps {
  dimension: number;
  placeRobot: Function;
  resetRobot: Function;
}

export const PlaceRobotBox = (props: IPlaceRobotBoxProps) => {
  const { dimension, placeRobot, resetRobot } = props;
  const [error, setError] = useState<boolean>(false);
  const [errorX, setErrorX] = useState<boolean>(false);
  const [errorY, setErrorY] = useState<boolean>(false);

  const [posX, setPosX] = useState<string>("");
  const [posY, setPosY] = useState<string>("");
  const [face, setFace] = useState<string>("");

  const reset = () => {
    setPosX("");
    setPosY("");
    setFace("");
    setErrorX(false);
    setErrorY(false);
    setError(false);
    resetRobot();
  };

  const handleFaceChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setError(false);
    setFace(value);
  };

  const handleXNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPosX(value);
  };

  const handleYNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPosY(value);
  };

  const handlePlaceRobot = () => {
    if (
      !(+posX >= 0 && +posX < dimension) ||
      !(+posY >= 0 && +posY < dimension)
    ) {
      setErrorX(!(+posX >= 0 && +posX < dimension));
      setErrorY(!(+posY >= 0 && +posY < dimension));
    } else {
      placeRobot(+posX, +posY, face);
      setErrorX(false);
      setErrorY(false);
    }
  };

  return (
    <Box className="place-robot-box">
      <header className="place-robot-header">Place Robot</header>
      <Box className="coordinate-box">
        <TextField
          sx={{ width: "50%" }}
          error={errorX}
          value={posX}
          id="robot-x"
          label={LABEL_X}
          required
          type="number"
          onChange={handleXNumberChange}
          {...(errorX && {
            helperText: `${INVALID_ROBOT_X} (0-${dimension - 1})`,
          })}
        />
        <TextField
          sx={{ width: "50%" }}
          error={errorY}
          value={posY}
          id="robot-Y"
          label={LABEL_Y}
          required
          type="number"
          onChange={handleYNumberChange}
          {...(errorY && {
            helperText: `${INVALID_ROBOT_Y} (0-${dimension - 1})`,
          })}
        />
      </Box>
      <FormControl sx={{ width: "100%" }} error={error}>
        <InputLabel id="robot-face">Enter Face Direction</InputLabel>
        <Select
          labelId="robot-face"
          id="robot-face"
          value={face}
          label={LABEL_DIRECTION}
          onChange={handleFaceChange}
          required
        >
          {Object.values(DIRECTION_ENUM).map((direction) => (
            <MenuItem value={direction} key={direction}>
              {direction}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{INVALID_ROBOT_FACE}</FormHelperText>}
      </FormControl>
      <Box className="place-button-box">
        <Button
          variant="contained"
          color="primary"
          disabled={!posX || !posY || !face}
          onClick={handlePlaceRobot}
        >
          Place Robot
        </Button>
        <Button variant="contained" color="error" onClick={reset}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};
