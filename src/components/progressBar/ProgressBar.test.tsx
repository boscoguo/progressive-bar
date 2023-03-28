import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./index";

describe("<ProgressBar />", () => {
  beforeEach(() => {
    render(<ProgressBar progress={25} index={0} />);
  });
  it("should display progress bar elements when page loading", () => {
    const progressBarNumber = screen.getByText(/25/i);
    expect(progressBarNumber).toBeInTheDocument();
    const progressBarElem = screen.getByTestId("progress-bar-div-0");
    expect(progressBarElem).toBeInTheDocument();
  });
  it("should display correct background color with accurate progress number", () => {
    const progressBarElem = screen.getByTestId("progress-bar-div-0");
    const styles = getComputedStyle(progressBarElem);
    expect(styles.backgroundColor).toBe("lightblue");
  });
});
