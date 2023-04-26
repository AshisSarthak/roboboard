export enum DIRECTION_ENUM {
    NORTH = "north",
    SOUTH = "south",
    EAST = "east",
    WEST = "west"
}

export interface RoboBoardState{
    positionX: string | number;
    positionY: string | number;
    face: DIRECTION_ENUM;
}