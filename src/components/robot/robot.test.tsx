import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Robot from ".";

test("rendersRobotBox", () => {
  const { asFragment } = render(<Robot />);
  expect(screen.queryByTestId("robot-box")).toBeFalsy();
  expect(asFragment()).toMatchSnapshot();
});
