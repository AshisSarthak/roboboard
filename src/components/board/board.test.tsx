import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Board from "./board";

test("renders APP", () => {
  const { asFragment } = render(<Board dimension={5} />);
  expect(asFragment()).toMatchSnapshot();
});
