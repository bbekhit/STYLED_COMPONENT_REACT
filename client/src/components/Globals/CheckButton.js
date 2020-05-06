import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const CheckButton = ({ className, ...props }) => {
  return (
    <div className={className}>
      <div className="checkbox-wrapper">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkbox"></span>
          <span className="icon">
            <FaCheck />
          </span>
          {props.item}
        </label>
      </div>
    </div>
  );
};

export default styled(CheckButton)`
  .checkbox-wrapper {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .checkbox-container {
      font-size: 22px;
      position: relative;
      display: block;
      cursor: pointer;
      padding-left: 60px;
      margin: 15px;

      &:hover .checkbox {
        background-color: rgb(221, 201, 221);
      }

      input {
        display: none;

        &:checked ~ .icon {
          display: inline-block;
        }

        &:checked ~ .checkbox {
          background-color: rgb(221, 201, 221);
        }
      }

      .checkbox {
        height: 30px;
        width: 30px;
        border: 1px solid green;
        border-radius: 4px;
        background: red;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
      }

      .icon {
        position: absolute;
        left: 4px;
        top: 3px;
        display: none;
      }
    }
  }
`;
