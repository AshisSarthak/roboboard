import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Robot from ".";

test("rendersRobotBox", () => {
  const { asFragment } = render(<Robot />);
  expect(screen.getByTestId("robot-box")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
