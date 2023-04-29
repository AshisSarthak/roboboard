import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders APP", () => {
  const { asFragment } = render(<App />);
  expect(screen.getByText(/robot vacuum cleaner/i)).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
