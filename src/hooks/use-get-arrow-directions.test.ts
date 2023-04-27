import { useGetArrowDirections } from "./use-get-arrow-directions";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useParseCommands } from "./use-parse-commands";

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

describe("useGetArrowDirections", () => {
  const { result } = renderHook(() => useGetArrowDirections());
  const { result: parseCommands } = renderHook(() => useParseCommands());

  it("get row directions", () => {
    act(() => {
      const res = result.current.getInvalidMoveArrow();
      expect(res).toEqual("valid-direction");
    });
  });

  it("get position X", () => {
    act(() => {
      const res = result.current.getPositionX();
      expect(res).toEqual("Infinitypx");
    });
  });

  it("get position X for 0", () => {
    act(() => {
      parseCommands.current.handleParseCommands("PLACE 0,0,EAST");
      const res = result.current.getPositionX();
      expect(res).toEqual("Infinitypx");
    });
  });

  it("get position Y", () => {
    act(() => {
      const res = result.current.getPositionY();
      expect(res).toEqual("Infinitypx");
    });
  });
});
