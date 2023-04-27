import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommandsDrawer from "./commands-drawer";

describe("rendersCommandsDrawer", () => {
  test("snapshotTest", () => {
    const { asFragment } = render(<CommandsDrawer />);
    expect(screen.getByText("Enter Command")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("input value change in commands section", async () => {
    const { asFragment } = render(<CommandsDrawer />);
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeDisabled();
    const input = screen.getByRole("textbox");
    await fireEvent.change(input, { target: { value: "PLACE 0,0,EAST" } });
    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
  });
});
