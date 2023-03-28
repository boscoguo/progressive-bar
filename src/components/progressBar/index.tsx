import React from "react";
import "./style.scss";

interface ProgressBarInterface {
  progress: number;
  index: number;
}

export const ProgressBar: React.FC<ProgressBarInterface> = ({
  progress,
  index
}) => {
  const getColor = () => {
    if (progress > 0 && progress < 100) {
      return "lightblue";
    } else if (progress > 100) {
      return "red";
    }
  };
  return (
    <div className="progress-bar">
      <div className="progress-bar-label">{progress}%</div>
      <div
        className="progress-bar-fill"
        data-testid={`progress-bar-div-${index}`}
        style={{
          width: `${progress >= 100 ? 100 : progress}%`,
          backgroundColor: getColor()
        }}
      ></div>
    </div>
  );
};
