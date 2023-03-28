import React, { useState } from "react";
import { ProgressBar } from "../progressBar";
import "./style.scss";

type ProgressGroupType = {
  progressOne: number;
  progressTwo: number;
  progressThree: number;
};

export const ProgressBarGroup = () => {
  const [selectedBar, setSelectedBar] = useState<string>("progressOne");
  const [progressGroup, setProgressGroup] = useState<ProgressGroupType>({
    progressOne: 0,
    progressTwo: 0,
    progressThree: 0
  });

  const progressNum = Object.values(progressGroup);

  const handleBtnClickPlusTF = () => {
    setProgressGroup(progressGroup => {
      return {
        ...progressGroup,
        [selectedBar]:
          progressGroup[selectedBar as keyof ProgressGroupType] + 25
      };
    });
  };

  const handleBtnClickPlusTen = () => {
    setProgressGroup(progressGroup => {
      return {
        ...progressGroup,
        [selectedBar]:
          progressGroup[selectedBar as keyof ProgressGroupType] + 10
      };
    });
  };

  const handleBtnClickMinusTen = () => {
    if (progressGroup[selectedBar as keyof ProgressGroupType] >= 10) {
      setProgressGroup(progressGroup => {
        return {
          ...progressGroup,
          [selectedBar]:
            progressGroup[selectedBar as keyof ProgressGroupType] - 10
        };
      });
    } else if (
      progressGroup[selectedBar as keyof ProgressGroupType] > 0 &&
      progressGroup[selectedBar as keyof ProgressGroupType] < 10
    ) {
      setProgressGroup(progressGroup => {
        return {
          ...progressGroup,
          [selectedBar]: 0
        };
      });
    }
  };

  const handleBtnClickMinusTF = () => {
    if (progressGroup[selectedBar as keyof ProgressGroupType] >= 25) {
      setProgressGroup(progressGroup => {
        return {
          ...progressGroup,
          [selectedBar]:
            progressGroup[selectedBar as keyof ProgressGroupType] - 25
        };
      });
    } else if (
      progressGroup[selectedBar as keyof ProgressGroupType] > 0 &&
      progressGroup[selectedBar as keyof ProgressGroupType] < 25
    ) {
      setProgressGroup(progressGroup => {
        return {
          ...progressGroup,
          [selectedBar]: 0
        };
      });
    }
  };

  return (
    <div className="progress-bar-group">
      <h2>Progress Bars Demo</h2>
      {progressNum.map((p, index) => (
        <ProgressBar key={index} progress={p} index={index} />
      ))}
      <div className="progress-bar-group__btns">
        <select
          onChange={e => {
            setSelectedBar(e.target.value);
          }}
        >
          <option value="progressOne">#progress1</option>
          <option value="progressTwo">#progress2</option>
          <option value="progressThree">#progress3</option>
        </select>
        <button onClick={handleBtnClickMinusTF}>-25</button>
        <button onClick={handleBtnClickMinusTen}>-10</button>
        <button onClick={handleBtnClickPlusTen}>+10</button>
        <button onClick={handleBtnClickPlusTF}>+25</button>
      </div>
    </div>
  );
};
