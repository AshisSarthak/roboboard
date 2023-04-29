import { render, renderHook } from "@testing-library/react";
import { RoboBoardContextProvider } from "../context";
import App from "../components/container-app/App";
import { useMoveRobots } from "./use-move-robots";
import { DIRECTION_ENUM } from "../context/types";

describe("useMoveRobotsTest", () => {
  it("tests the Robot placement", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const { result } = renderHook(useMoveRobots);
    result.current.placeRobot(0, 1, DIRECTION_ENUM.EAST);
    result.current.placeRobot(0, -1, DIRECTION_ENUM.EAST);

    result.current.placeRobot(1, 2, DIRECTION_ENUM.EAST);
    result.current.move(DIRECTION_ENUM.EAST);
    result.current.move(DIRECTION_ENUM.NORTH);

    result.current.turnLeft(DIRECTION_ENUM.NORTH);
    result.current.turnRight(DIRECTION_ENUM.NORTH);
    result.current.resetRobot();
  });

  it("tests the Robot movement", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const { result } = renderHook(useMoveRobots);
    result.current.placeRobot(0, 1, DIRECTION_ENUM.EAST);
    result.current.move(DIRECTION_ENUM.EAST);
    result.current.move(DIRECTION_ENUM.NORTH);
    result.current.move(DIRECTION_ENUM.SOUTH);
    result.current.move(DIRECTION_ENUM.WEST);
  });

  it("tests the Robot turns", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const { result } = renderHook(useMoveRobots);
    result.current.placeRobot(0, 1, DIRECTION_ENUM.EAST);
    result.current.turnLeft(DIRECTION_ENUM.EAST);
    result.current.turnLeft(DIRECTION_ENUM.NORTH);
    result.current.turnLeft(DIRECTION_ENUM.SOUTH);
    result.current.turnLeft(DIRECTION_ENUM.WEST);

    result.current.turnRight(DIRECTION_ENUM.EAST);
    result.current.turnRight(DIRECTION_ENUM.NORTH);
    result.current.turnRight(DIRECTION_ENUM.SOUTH);
    result.current.turnRight(DIRECTION_ENUM.WEST);
  });

  it("tests the Robot report", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const { result } = renderHook(useMoveRobots);
    result.current.placeRobot(0, 1, DIRECTION_ENUM.EAST);
    expect(result.current.report()).toMatchObject({
      face: "north",
      positionX: 0,
      positionY: -1,
    });
  });
});
