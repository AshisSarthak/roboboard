export enum DIRECTION_ENUM {
  NORTH = "north",
  SOUTH = "south",
  EAST = "east",
  WEST = "west",
}

export interface RoboBoardState {
  positionX: number;
  positionY: number;
  face?: DIRECTION_ENUM;
  dimension: number;
  isPlaced: boolean;
  commands?: Array<string>;
  userGivenCommands?: Array<string>;
  error?: string;
}
