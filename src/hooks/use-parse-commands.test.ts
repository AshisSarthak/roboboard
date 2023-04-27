import { useParseCommands } from "./use-parse-commands";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("./use-move-robots");
jest.mock("../context");

const mock = {
  move: () => true,
  placeRobot: () => true,
  turnLeft: () => true,
  turnRight: () => true,
  report: () => true,
};
jest.mock("./use-move-robots.ts", () => ({
  useMoveRobots: () => {
    return mock;
  },
}));

describe("useParseCommands", () => {
  const { result } = renderHook(() => useParseCommands());

  it("parses the command PLACE", () => {
    act(() => {
      result.current.handleParseCommands("PLACE 1,2,EAST");
    });
    expect(mock.placeRobot()).toEqual(true);
  });

  it("parses the command MOVE", () => {
    act(() => {
      result.current.handleParseCommands("PLACE 1,2,EAST");
      result.current.handleParseCommands("MOVE");
    });
    expect(mock.move()).toEqual(true);
  });

  it("parses the command LEFT", () => {
    act(() => {
      result.current.handleParseCommands("PLACE 1,2,EAST");
      result.current.handleParseCommands("LEFT");
    });
    expect(mock.turnLeft()).toEqual(true);
  });

  it("parses the command RIGHT", () => {
    act(() => {
      result.current.handleParseCommands("PLACE 1,2,EAST");
      result.current.handleParseCommands("RIGHT");
    });
    expect(mock.turnRight()).toEqual(true);
  });

  it("parses the command REPORT", () => {
    act(() => {
      result.current.handleParseCommands("PLACE 1,2,EAST");
      result.current.handleParseCommands("REPORT");
    });
    expect(mock.report()).toEqual(true);
  });
});
