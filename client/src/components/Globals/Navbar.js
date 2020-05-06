import React, { useState } from "react";
import styled from "styled-components";
import { setFont, setRem } from "../../styles/helpers";

const Navbar = ({ className }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className={className}>
      <div className="nav">
        <div className="logo">Logo</div>
        <ul className={`nav-list ${show ? "show" : ""}`}>
          <li className="nav-item">Products</li>
          <li className="nav-item">Offers</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Map</li>
        </ul>
        <div className="btn" onClick={toggleShow}>
          <div className={`bar bar1 ${show ? "cross" : ""}`}></div>
          <div className={`bar bar2 ${show ? "cross" : ""}`}></div>
          <div className={`bar bar3 ${show ? "cross" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default styled(Navbar)`
  .nav {
    padding: 10px;
    position: relative;
    background: #3494e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ec6ead,
      #3494e6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ec6ead,
      #3494e6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    .logo {
      align-self: center;
      display: flex;
      align-items: center;
      margin: 5px 0 0;
      ${setFont.slanted};
      font-size: ${setRem(30)};
    }
    .nav-list {
      max-height: 0;
      overflow: hidden;
      transition: 1s ease-out;
      ${setFont.main};
      &.show {
        max-height: 500px; /* approximate max height */
        transition: 1.5s ease-in;
      }
      .nav-item {
        padding: 10px 0;
        font-size: 18px;
        &:last-child {
          padding: 10px 0 0;
        }
      }
    }
    .btn {
      position: absolute;
      right: 20px;
      top: 17px;
      .bar {
        height: 5px;
        width: 35px;
        background-color: #ec6ead;
        margin: 5px 0;
        transition: 0.75s ease-in-out;
        &.bar1.cross {
          transform: rotate(-45deg) translate(-7px, 6px);
        }
        &.bar2.cross {
          opacity: 0;
        }
        &.bar3.cross {
          transform: rotate(45deg) translate(-7px, -8px);
        }
      }
    }
  }
`;
