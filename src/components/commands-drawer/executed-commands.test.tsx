import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ExecutedCommands } from "./executed-commads";
import App from "../container-app/App";
import { RoboBoardContextProvider } from "../../context";

describe("Executed Commands section", () => {
  test("rendersInstruction", () => {
    const { asFragment } = render(<ExecutedCommands />);
    expect(screen.queryByText("Executed Commands")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("input value change in commands section", async () => {
    const { asFragment } = render(
      <RoboBoardContextProvider
        value={{ state: { userGivenCommands: ["PLACE 0,0,EAST"] } }}
      >
        <App />
      </RoboBoardContextProvider>
    );
    const submitBtn = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    await fireEvent.change(input, { target: { value: "PLACE 0,0,EAST" } });
    expect(submitBtn).not.toBeDisabled();
    await fireEvent.click(submitBtn);
    expect(screen.getByText("Executed Commands")).toBeInTheDocument();
    expect(screen.getByText("PLACE: 0, 0, east")).toBeInTheDocument();
  });
});
