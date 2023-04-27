import { reducer } from ".";
import { DIRECTION_ENUM } from "../context/types";

describe("testingReducers", () => {
  test("moving in X axis", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.EAST,
        dimension: 5,
      },
      {
        type: "MOVEX",
        payload: 1,
      }
    );
    expect(newState.positionX).toBe(1);
    expect(newState.userGivenCommands).toContain("MOVE");
  });

  test("moving in X axis with 0", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.EAST,
        dimension: 5,
        userGivenCommands: [],
      },
      {
        type: "MOVEX",
        payload: 0,
      }
    );
    expect(newState.positionX).toBe(0);
    expect(newState.userGivenCommands).not.toContain("MOVE");
  });

  test("moving in X axis with 0 in WEST", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.WEST,
        dimension: 5,
        userGivenCommands: [],
      },
      {
        type: "MOVEX",
        payload: 0,
      }
    );
    expect(newState.positionX).toBe(0);
    expect(newState.userGivenCommands).not.toContain("MOVE");
  });
  test("moving in Y axis", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.NORTH,
        dimension: 5,
      },
      {
        type: "MOVEY",
        payload: 1,
      }
    );
    expect(newState.positionY).toBe(1);
    expect(newState.userGivenCommands).toContain("MOVE");
  });

  test("moving in Y axis with 0", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.NORTH,
        dimension: 5,
        userGivenCommands: [],
      },
      {
        type: "MOVEY",
        payload: 0,
      }
    );
    expect(newState.positionY).toBe(0);
    expect(newState.userGivenCommands).not.toContain("MOVE");
  });

  test("moving in Y axis with 0 in SOUTH", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.SOUTH,
        dimension: 5,
        userGivenCommands: [],
      },
      {
        type: "MOVEY",
        payload: 0,
      }
    );
    expect(newState.positionY).toBe(0);
    expect(newState.userGivenCommands).not.toContain("MOVE");
  });

  test("testingTurn", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.SOUTH,
        dimension: 5,
        userGivenCommands: [],
      },
      {
        type: "TURN",
        payload: DIRECTION_ENUM.NORTH,
      }
    );
    expect(newState.face).toBe(DIRECTION_ENUM.NORTH);
  });

  test("testing Default Case", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.SOUTH,
        dimension: 5,
        userGivenCommands: [],
      },
      {
        type: "HELLO",
        payload: DIRECTION_ENUM.NORTH,
      }
    );
    expect(newState.face).toBe(DIRECTION_ENUM.SOUTH);
  });
});
