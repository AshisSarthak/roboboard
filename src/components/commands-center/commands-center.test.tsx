import { fireEvent, render, screen, within } from "@testing-library/react";
import { RoboBoardContextProvider } from "../../context";
import App from "../container-app/App";
import userEvent from "@testing-library/user-event";

describe("tests Commands Center", () => {
  it("tests the default view", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const placeRobotBtn = screen.getByRole("button", {
      name: /place robot/i,
    });
    const resetBtn = screen.getByRole("button", {
      name: /reset/i,
    });
    expect(placeRobotBtn).toBeDisabled();
    expect(resetBtn).not.toBeDisabled();
  });

  it("tests the robot placement section", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const placeRobotBtn = screen.getByRole("button", {
      name: /place robot/i,
    });
    const resetBtn = screen.getByRole("button", {
      name: /reset/i,
    });
    const moveBtn = screen.getByRole("button", {
      name: /move/i,
    });
    const turnLeftBtn = screen.getByRole("button", {
      name: /turn left/i,
    });
    const turnRightBtn = screen.getByRole("button", {
      name: /turn right/i,
    });
    const reportBtn = screen.getByRole("button", {
      name: /report/i,
    });
    expect(placeRobotBtn).toBeDisabled();
    expect(moveBtn).toBeDisabled();
    expect(turnLeftBtn).toBeDisabled();
    expect(turnRightBtn).toBeDisabled();
    expect(reportBtn).toBeDisabled();
    expect(resetBtn).not.toBeDisabled();
    const enterX = screen.getByRole("spinbutton", {
      name: /enter x/i,
    });
    const enterY = screen.getByRole("spinbutton", {
      name: /enter y/i,
    });
    const enterFace = screen.getByRole("button", {
      name: /enter face direction/i,
    });
    fireEvent.change(enterX, { target: { value: "1" } });
    fireEvent.change(enterY, { target: { value: "1" } });
    userEvent.click(enterFace);

    const selectOptionsBox = screen.getByRole("listbox", {
      name: /enter face direction/i,
    });
    userEvent.click(within(selectOptionsBox).getByText(/east/i));
    expect(placeRobotBtn).not.toBeDisabled();
    userEvent.click(placeRobotBtn);

    expect(moveBtn).not.toBeDisabled();
    expect(turnLeftBtn).not.toBeDisabled();
    expect(turnRightBtn).not.toBeDisabled();
    expect(reportBtn).not.toBeDisabled();
  });

  it("tests the robot reset", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const placeRobotBtn = screen.getByRole("button", {
      name: /place robot/i,
    });
    const resetBtn = screen.getByRole("button", {
      name: /reset/i,
    });
    const moveBtn = screen.getByRole("button", {
      name: /move/i,
    });
    const turnLeftBtn = screen.getByRole("button", {
      name: /turn left/i,
    });
    const turnRightBtn = screen.getByRole("button", {
      name: /turn right/i,
    });
    const reportBtn = screen.getByRole("button", {
      name: /report/i,
    });
    expect(placeRobotBtn).toBeDisabled();
    expect(moveBtn).toBeDisabled();
    expect(turnLeftBtn).toBeDisabled();
    expect(turnRightBtn).toBeDisabled();
    expect(reportBtn).toBeDisabled();
    expect(resetBtn).not.toBeDisabled();
    const enterX = screen.getByRole("spinbutton", {
      name: /enter x/i,
    });
    const enterY = screen.getByRole("spinbutton", {
      name: /enter y/i,
    });
    const enterFace = screen.getByRole("button", {
      name: /enter face direction/i,
    });
    fireEvent.change(enterX, { target: { value: "1" } });
    fireEvent.change(enterY, { target: { value: "1" } });
    userEvent.click(enterFace);

    const selectOptionsBox = screen.getByRole("listbox", {
      name: /enter face direction/i,
    });
    userEvent.click(within(selectOptionsBox).getByText(/east/i));
    expect(placeRobotBtn).not.toBeDisabled();
    userEvent.click(placeRobotBtn);
    userEvent.click(resetBtn);

    expect(placeRobotBtn).toBeDisabled();
    expect(moveBtn).toBeDisabled();
    expect(turnLeftBtn).toBeDisabled();
    expect(turnRightBtn).toBeDisabled();
    expect(reportBtn).toBeDisabled();
  });

  it("tests the robot report", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const placeRobotBtn = screen.getByRole("button", {
      name: /place robot/i,
    });
    const resetBtn = screen.getByRole("button", {
      name: /reset/i,
    });
    const moveBtn = screen.getByRole("button", {
      name: /move/i,
    });
    const turnLeftBtn = screen.getByRole("button", {
      name: /turn left/i,
    });
    const turnRightBtn = screen.getByRole("button", {
      name: /turn right/i,
    });
    const reportBtn = screen.getByRole("button", {
      name: /report/i,
    });
    expect(placeRobotBtn).toBeDisabled();
    expect(moveBtn).toBeDisabled();
    expect(turnLeftBtn).toBeDisabled();
    expect(turnRightBtn).toBeDisabled();
    expect(reportBtn).toBeDisabled();
    expect(resetBtn).not.toBeDisabled();
    const enterX = screen.getByRole("spinbutton", {
      name: /enter x/i,
    });
    const enterY = screen.getByRole("spinbutton", {
      name: /enter y/i,
    });
    const enterFace = screen.getByRole("button", {
      name: /enter face direction/i,
    });
    fireEvent.change(enterX, { target: { value: "1" } });
    fireEvent.change(enterY, { target: { value: "1" } });
    userEvent.click(enterFace);

    const selectOptionsBox = screen.getByRole("listbox", {
      name: /enter face direction/i,
    });
    userEvent.click(within(selectOptionsBox).getByText(/east/i));
    expect(placeRobotBtn).not.toBeDisabled();
    userEvent.click(placeRobotBtn);
    userEvent.click(moveBtn);

    userEvent.click(reportBtn);
    const reportDialog = screen.getByRole("heading", {
      name: /robot position/i,
    });
    expect(reportDialog).toBeInTheDocument();

    const okBtn = screen.getByRole("button", {
      name: /ok/i,
    });
    expect(okBtn).toBeInTheDocument();
    userEvent.click(okBtn);
  });

  it("tests the edge case", () => {
    render(
      <RoboBoardContextProvider>
        <App />
      </RoboBoardContextProvider>
    );
    const placeRobotBtn = screen.getByRole("button", {
      name: /place robot/i,
    });
    const resetBtn = screen.getByRole("button", {
      name: /reset/i,
    });
    const moveBtn = screen.getByRole("button", {
      name: /move/i,
    });
    const turnLeftBtn = screen.getByRole("button", {
      name: /turn left/i,
    });
    const turnRightBtn = screen.getByRole("button", {
      name: /turn right/i,
    });
    const reportBtn = screen.getByRole("button", {
      name: /report/i,
    });
    expect(placeRobotBtn).toBeDisabled();
    expect(moveBtn).toBeDisabled();
    expect(turnLeftBtn).toBeDisabled();
    expect(turnRightBtn).toBeDisabled();
    expect(reportBtn).toBeDisabled();
    expect(resetBtn).not.toBeDisabled();
    const enterX = screen.getByRole("spinbutton", {
      name: /enter x/i,
    });
    const enterY = screen.getByRole("spinbutton", {
      name: /enter y/i,
    });
    const enterFace = screen.getByRole("button", {
      name: /enter face direction/i,
    });
    fireEvent.change(enterX, { target: { value: "1" } });
    fireEvent.change(enterY, { target: { value: "1" } });
    userEvent.click(enterFace);

    const selectOptionsBox = screen.getByRole("listbox", {
      name: /enter face direction/i,
    });
    userEvent.click(within(selectOptionsBox).getByText(/east/i));
    expect(placeRobotBtn).not.toBeDisabled();
    userEvent.click(placeRobotBtn);
    userEvent.click(moveBtn);
    userEvent.click(turnRightBtn);
    userEvent.click(moveBtn);
    userEvent.click(moveBtn);
    const erroDialog = screen.getByText(
      /robot is at the edge of the board\. can not move in this direction/i
    );
    expect(erroDialog).toBeInTheDocument();
    userEvent.click(turnRightBtn);
    userEvent.click(moveBtn);
    expect(erroDialog).not.toBeInTheDocument();
  });
});
