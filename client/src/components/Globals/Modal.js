import React, { useState, Children } from "react";
import styled from "styled-components";
import { PrimaryBtn } from "./Button";
import { setColor, setBorder } from "../../styles/helpers";

const Modal = ({ className, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(true);
  };
  const preventClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={className}>
      {!isOpen && <PrimaryBtn onClick={toggleModal}>Open Modal</PrimaryBtn>}
      {isOpen ? (
        <div className="bg" onClick={() => setIsOpen(false)}>
          <div className="close" onClick={() => setIsOpen(false)}>
            X
          </div>
          <div onClick={preventClick} className="content">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default styled(Modal)`
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      color: white;
      font-size: 30px;
      cursor: pointer;
    }

    .content {
      background: transparent;
      width: 60vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      z-index: 101;
    }
  }
`;
