import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InfoBox } from "./info-box";

test("rendersInstruction", () => {
  const { asFragment } = render(<InfoBox />);
  expect(screen.getByText("Instruction")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
