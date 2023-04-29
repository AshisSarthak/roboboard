import { reducer } from ".";
import { DIRECTION_ENUM } from "../context/types";
import { ACTIONS } from "./actions";

describe("testingReducers", () => {
  test("Placing Robot", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.EAST,
        dimension: 5,
        isPlaced: true,
      },
      {
        type: ACTIONS.SET_ROBOT,
        payload: {
          posX: 1,
          posY: 1,
          face: DIRECTION_ENUM.WEST,
        },
      }
    );
    expect(newState.positionX).toBe(1);
    expect(newState.positionY).toBe(1);
    expect(newState.face).toBe(DIRECTION_ENUM.WEST);
  });

  test("moving in X axis", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.EAST,
        dimension: 5,
        isPlaced: true,
      },
      {
        type: ACTIONS.MOVEX,
        payload: 1,
      }
    );
    expect(newState.positionX).toBe(1);
  });

  test("moving in X axis with 0", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.EAST,
        dimension: 5,
        isPlaced: true,
      },
      {
        type: ACTIONS.MOVEX,
        payload: 0,
      }
    );
    expect(newState.positionX).toBe(0);
  });

  test("moving in X axis with 0 in WEST", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.WEST,
        dimension: 5,
        isPlaced: true,
      },
      {
        type: ACTIONS.MOVEX,
        payload: 0,
      }
    );
    expect(newState.positionX).toBe(0);
  });
  test("moving in Y axis", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.NORTH,
        dimension: 5,
        isPlaced: true,
      },
      {
        type: ACTIONS.MOVEY,
        payload: 1,
      }
    );
    expect(newState.positionY).toBe(1);
  });

  test("moving in Y axis with 0", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.NORTH,
        dimension: 5,
        isPlaced: true,
      },
      {
        type: ACTIONS.MOVEY,
        payload: 0,
      }
    );
    expect(newState.positionY).toBe(0);
  });

  test("moving in Y axis with 0 in SOUTH", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.SOUTH,
        dimension: 5,
        isPlaced: true,
      },
      {
        type: ACTIONS.MOVEY,
        payload: 0,
      }
    );
    expect(newState.positionY).toBe(0);
  });

  test("testingTurn", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.SOUTH,
        dimension: 5,
        isPlaced: true,
      },
      {
        type: ACTIONS.TURN,
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
        isPlaced: true,
      },
      {
        type: ACTIONS.WRONG_COMMAND,
        payload: DIRECTION_ENUM.NORTH,
      }
    );
    expect(newState.face).toBe(DIRECTION_ENUM.SOUTH);
  });

  test("testing Is Placed", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.SOUTH,
        isPlaced: true,
        dimension: 5,
      },
      {
        type: ACTIONS.IS_PLACED,
        payload: true,
      }
    );
    expect(newState.isPlaced).toBe(true);
  });

  test("testing Set Error", () => {
    const newState = reducer(
      {
        positionX: 0,
        positionY: 0,
        face: DIRECTION_ENUM.SOUTH,
        isPlaced: true,
        dimension: 5,
      },
      {
        type: ACTIONS.SET_ERROR,
        payload: "Hello",
      }
    );
    expect(newState.error).toBe("Hello");
  });
});
