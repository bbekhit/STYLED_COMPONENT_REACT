import React from "react";
import styled from "styled-components";

const ToggleButton = ({ className }) => {
  return (
    <div className={className}>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default styled(ToggleButton)`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
      display: none;

      &:checked + .slider {
        background-color: #2196f3;
      }

      &:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      // right: 0;
      // bottom: 0;
      width: 100%;
      height: 100%;
      border-radius: 34px;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;

      &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        border-radius: 50%;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
    }
  }
`;
