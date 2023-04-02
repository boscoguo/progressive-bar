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
    progressThree: 0,
  });

  const progressNum = Object.values(progressGroup);

  const handleBtnClick = (value: string) => {
    if (value.includes("+")) {
      setProgressGroup((progressGroup) => {
        return {
          ...progressGroup,
          [selectedBar]:
            progressGroup[selectedBar as keyof ProgressGroupType] +
            parseInt(value.replace("+", "")),
        };
      });
    } else {
      const btnValue = parseInt(value.replace("-", ""));
      if (progressGroup[selectedBar as keyof ProgressGroupType] >= btnValue) {
        setProgressGroup((progressGroup) => {
          return {
            ...progressGroup,
            [selectedBar]:
              progressGroup[selectedBar as keyof ProgressGroupType] - btnValue,
          };
        });
      } else if (
        progressGroup[selectedBar as keyof ProgressGroupType] > 0 &&
        progressGroup[selectedBar as keyof ProgressGroupType] < btnValue
      ) {
        setProgressGroup((progressGroup) => {
          return {
            ...progressGroup,
            [selectedBar]: 0,
          };
        });
      }
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
          onChange={(e) => {
            setSelectedBar(e.target.value);
          }}
        >
          <option value="progressOne">#progress1</option>
          <option value="progressTwo">#progress2</option>
          <option value="progressThree">#progress3</option>
        </select>
        <button
          onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
            handleBtnClick((e.target as HTMLElement).innerText)
          }
        >
          -25
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
            handleBtnClick((e.target as HTMLElement).innerText)
          }
        >
          -10
        </button>
        <button
          data-testid="plus-ten"
          onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
            handleBtnClick((e.target as HTMLElement).innerText)
          }
        >
          +10
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
            handleBtnClick((e.target as HTMLElement).innerText)
          }
        >
          +25
        </button>
      </div>
    </div>
  );
};
