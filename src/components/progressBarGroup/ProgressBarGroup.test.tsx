import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ProgressBarGroup } from ".";

describe("<ProgressBarGroup />", () => {
  beforeEach(() => {
    render(<ProgressBarGroup />);
  });

  it("should render ProgressBarGroup component", () => {
    const btnElems = screen.getAllByRole("button");
    expect(btnElems.length).toBe(4);
  });
  it("should update progress bar when clicking plus ten button", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const activeProgressBarTwo = screen.getByTestId("progress-bar-div-1");
    const btnElems = screen.getAllByRole("button");
    const selectedOption = screen.getByRole("option", { name: "#progress2" });
    userEvent.click(btnElems[2]);
    const progressBarNumber = screen.getByText(/10%/i);
    expect(progressBarNumber).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe(
      "lightblue"
    );
    userEvent.selectOptions(screen.getByRole("combobox"), ["progressTwo"]);
    expect(selectedOption.selected).toBe(true);
    userEvent.click(btnElems[2]);
    expect(getComputedStyle(activeProgressBarTwo).backgroundColor).toBe(
      "lightblue"
    );
  });

  it("should update progress when clicking plus twenty-five button", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const activeProgressBarTwo = screen.getByTestId("progress-bar-div-1");
    const btnElems = screen.getAllByRole("button");
    const selectedOption = screen.getByRole("option", { name: "#progress2" });
    userEvent.click(btnElems[3]);
    const progressBarNumber = screen.getByText(/25%/i);
    expect(progressBarNumber).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe(
      "lightblue"
    );
    userEvent.selectOptions(screen.getByRole("combobox"), ["progressTwo"]);
    expect(selectedOption.selected).toBe(true);
    userEvent.click(btnElems[3]);
    expect(getComputedStyle(activeProgressBarTwo).backgroundColor).toBe(
      "lightblue"
    );
  });

  it("should update progress bar when clicking minus ten button", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const activeProgressBarTwo = screen.getByTestId("progress-bar-div-1");
    const btnElems = screen.getAllByRole("button");
    const selectedOption = screen.getByRole("option", { name: "#progress2" });
    userEvent.click(btnElems[1]);
    const progressBarNumber = screen.getAllByText(/0%/i);
    expect(progressBarNumber[0]).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe("");
    userEvent.selectOptions(screen.getByRole("combobox"), ["progressTwo"]);
    expect(selectedOption.selected).toBe(true);
    userEvent.click(btnElems[1]);
    expect(getComputedStyle(activeProgressBarTwo).backgroundColor).toBe("");
  });

  it("should update progress bar when clicking minus twenty-five button", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const activeProgressBarTwo = screen.getByTestId("progress-bar-div-1");
    const btnElems = screen.getAllByRole("button");
    const selectedOption = screen.getByRole("option", { name: "#progress2" });
    userEvent.click(btnElems[0]);
    const progressBarNumber = screen.getAllByText(/0%/i);
    expect(progressBarNumber[0]).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe("");
    userEvent.selectOptions(screen.getByRole("combobox"), ["progressTwo"]);
    expect(selectedOption.selected).toBe(true);
    userEvent.click(btnElems[0]);
    expect(getComputedStyle(activeProgressBarTwo).backgroundColor).toBe("");
  });

  it("should change the background color when clicking puls tem button more than ten times", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const btnElems = screen.getAllByRole("button");
    for (let i = 0; i < 11; i++) {
      userEvent.click(btnElems[2]);
    }
    const progressBarNumber = screen.getByText(/110%/i);
    expect(progressBarNumber).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe("red");
  });
});
