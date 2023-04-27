import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { RoboBoardContextProvider } from "../../context";

test("renders learn react link", () => {
  const { asFragment } = render(
    <RoboBoardContextProvider
      value={{ state: { userGivenCommands: ["PLACE 0,0,EAST"] } }}
    >
      <App />
    </RoboBoardContextProvider>
  );
  const instructionEl = screen.getByText(/instruction/i);
  expect(instructionEl).toBeInTheDocument();
});
