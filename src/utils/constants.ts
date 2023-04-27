export const INSTRUCTIONS = [
  "PLACE X,Y,F - will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.",
  "MOVE - will move the toy robot one unit forward in the direction it is currently facing.",
  "LEFT | RIGHT - will rotate the robot 90 degrees in the specified direction without changing the position of the robot.",
  "REPORT - will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.",
];

export const OUT_OF_BOUND =
  "Robot is at the edge of the board. Can not move in this direction";

export const INVALID_ROBOT_PLACE = "Invalid values passed to Place the robot";
