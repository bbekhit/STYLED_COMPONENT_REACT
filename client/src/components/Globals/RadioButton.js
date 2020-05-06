import React from "react";
import styled from "styled-components";

const RadioButton = ({ className }) => {
  return (
    <div className={className}>
      <div className="radio-wrapper">
        <label className="radio-container">
          <input type="radio" name="radio" />
          <span className="radio"></span>
          Test
        </label>
      </div>
    </div>
  );
};

export default styled(RadioButton)`
  .radio-wrapper {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .radio-container {
      font-size: 22px;
      position: relative;
      display: block;
      cursor: pointer;
      padding-left: 40px;
      margin: 15px;

      &:hover .radio {
        background-color: rgb(221, 201, 221);
      }

      input {
        display: none;

        &:checked + .radio {
          background-color: rgb(221, 201, 221);
        }

        &:checked + .radio:after {
          display: block;
        }
      }
      .radio {
        height: 30px;
        width: 30px;
        border: 1px solid rgb(77, 24, 161);
        border-radius: 50%;
        background: #eee;
        position: absolute;
        left: 0;
        top: 0;

        &:after {
          content: "";
          position: absolute;
          display: none;
          top: 10px;
          left: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: purple;
        }
      }
    }
  }
`;
