import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ProgressBarGroup } from ".";

describe("<ProgressBarGroup />", () => {
  beforeEach(() => {
    render(<ProgressBarGroup />);
  });

  it("should render ProgressBarGroup component", () => {
    const btnElems = screen.getAllByRole("button");
    const selectElem = screen.getByRole("combobox");
    expect(btnElems.length).toBe(4);
    expect(selectElem).toBeInTheDocument();
  });
  it("should update progress bar when clicking plus ten button", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const activeProgressBarTwo = screen.getByTestId("progress-bar-div-1");
    const btnElems = screen.getAllByRole("button");
    const selectedOption = screen.getByRole("option", { name: "#progress2" });
    fireEvent.click(btnElems[2], { target: { innerText: "+10" } });
    const progressBarNumber = screen.getByText(/10%/i);
    expect(progressBarNumber).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe(
      "lightblue"
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "progressTwo" }
    });
    expect((selectedOption as HTMLOptionElement).selected).toBe(true);
    fireEvent.click(btnElems[2], { target: { innerText: "+10" } });
    expect(getComputedStyle(activeProgressBarTwo).backgroundColor).toBe(
      "lightblue"
    );
  });

  it("should update progress when clicking plus twenty-five button", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const activeProgressBarTwo = screen.getByTestId("progress-bar-div-1");
    const btnElems = screen.getAllByRole("button");
    const selectedOption = screen.getByRole("option", { name: "#progress2" });
    fireEvent.click(btnElems[3], { target: { innerText: "+25" } });
    const progressBarNumber = screen.getByText(/25%/i);
    expect(progressBarNumber).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe(
      "lightblue"
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "progressTwo" }
    });
    expect((selectedOption as HTMLOptionElement).selected).toBe(true);
    fireEvent.click(btnElems[3], { target: { innerText: "+25" } });
    expect(getComputedStyle(activeProgressBarTwo).backgroundColor).toBe(
      "lightblue"
    );
  });

  it("should update progress bar when clicking minus ten button", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const activeProgressBarTwo = screen.getByTestId("progress-bar-div-1");
    const btnElems = screen.getAllByRole("button");
    const selectedOption = screen.getByRole("option", { name: "#progress2" });
    fireEvent.click(btnElems[1], { target: { innerText: "-10" } });
    const progressBarNumber = screen.getAllByText(/0%/i);
    expect(progressBarNumber[0]).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe("");
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "progressTwo" }
    });
    expect((selectedOption as HTMLOptionElement).selected).toBe(true);
    fireEvent.click(btnElems[1], { target: { innerText: "-10" } });
    expect(getComputedStyle(activeProgressBarTwo).backgroundColor).toBe("");
  });

  it("should update progress bar when clicking minus twenty-five button", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const activeProgressBarTwo = screen.getByTestId("progress-bar-div-1");
    const btnElems = screen.getAllByRole("button");
    const selectedOption = screen.getByRole("option", { name: "#progress2" });
    fireEvent.click(btnElems[0], { target: { innerText: "-25" } });
    const progressBarNumber = screen.getAllByText(/0%/i);
    expect(progressBarNumber[0]).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe("");
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "progressTwo" }
    });
    expect((selectedOption as HTMLOptionElement).selected).toBe(true);
    fireEvent.click(btnElems[0], { target: { innerText: "-25" } });
    expect(getComputedStyle(activeProgressBarTwo).backgroundColor).toBe("");
  });

  it("should change the background color when clicking puls tem button more than ten times", () => {
    const activeProgressBar = screen.getByTestId("progress-bar-div-0");
    const btnElems = screen.getAllByRole("button");
    for (let i = 0; i < 11; i++) {
      fireEvent.click(btnElems[2], { target: { innerText: "+10" } });
    }
    const progressBarNumber = screen.getByText(/110%/i);
    expect(progressBarNumber).toBeInTheDocument();
    expect(getComputedStyle(activeProgressBar).backgroundColor).toBe("red");
  });

  it("should have the correct value when clicking different buttons", () => {
    const btnElems = screen.getAllByRole("button");
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "progressThree" }
    });
    fireEvent.click(btnElems[3], { target: { innerText: "+25" } });
    fireEvent.click(btnElems[2], { target: { innerText: "+10" } });
    fireEvent.click(btnElems[1], { target: { innerText: "-10" } });
    const activeProgressBarNumber = screen.getByText(/25%/i);
    const inActiveProgressBarNumber = screen.getAllByText(/0%/i);
    expect(activeProgressBarNumber).toBeInTheDocument();
    expect(inActiveProgressBarNumber.length).toBe(2);
  });
});
