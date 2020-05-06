import React, { useState } from "react";
import styled from "styled-components";
import { mediaMin } from "../../styles/helpers";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import img from "../../images/udemy.svg";

const Navbar = ({ className }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const openSideNav = () => {
    // let sideNav = document.querySelector(".side-nav-wrapper");
    let sideNavClose = document.querySelector(".side-nav-close");
    // let sideNavTop = document.querySelector(".side-nav-top-welcome");
    // sideNav.classList.add("open");
    // sideNavTop.classList.add("animate");
    sideNavClose.classList.add("show");
  };
  const closeSideNav = () => {
    // let sideNav = document.querySelector(".side-nav-wrapper");
    let sideNavClose = document.querySelector(".side-nav-close");
    let sideNavTop = document.querySelector(".side-nav-top-welcome");
    // sideNav.classList.remove("open");
    // sideNavTop.classList.remove("animate");
    sideNavClose.classList.remove("show");
  };
  return (
    <div className={className}>
      <div className="nav-mobile-wrapper">
        <div className="btn-search-wrapper">
          <div className="btn" onClick={toggleShow}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
        <div className="logo">
          <img
            src={img}
            style={{ width: "100%", height: "100%" }}
            alt="mountains"
          />
        </div>
        <div className={`search-input-wrapper ${show ? "open" : ""}`}>
          <div className="search-input-wrapper-left">
            <FiGrid className="grid" />
            <h6>Categories</h6>
          </div>
          <div className="search-input-wrapper-right">
            <input />
            <FaSearch className="search" />
          </div>
        </div>
        <div className="cart">
          <FaShoppingCart />
        </div>
      </div>
      <div className={`side-nav-wrapper ${show ? "open" : ""}`}>
        <div className="side-nav">
          <div className="side-nav-top">
            <div className="side-nav-top-letters">BB</div>
            <div className={`side-nav-top-welcome ${show ? "animate" : ""}`}>
              <h6>Hi, Boutros Bekhit</h6>
              <h6>Welcome back</h6>
            </div>
            <div className="side-nav-top-logo">
              <MdKeyboardArrowRight />
            </div>
          </div>
          <ul className="side-nav-items">
            <li>About</li>
            <li>More</li>
            <li>LogIn</li>
          </ul>
        </div>
      </div>
      <div
        className={`side-nav-close ${show ? "show" : ""}`}
        onClick={toggleShow}
      >
        X
      </div>
    </div>
  );
};

export default styled(Navbar)`
  .nav-mobile-wrapper {
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    justify-content: space-between;

    .btn-search-wrapper {
      display: flex;
      width: 90px;
      justify-content: space-between;
      min-width: 100px;

      .btn {
        margin: 0.4rem 0 0 0;
        .bar {
          width: 2rem;
          height: 0.125rem;
          background: gray;
          margin: 5px 0;
        }
      }

      .search-icon {
        align-self: center;
        font-size: 22px;
        margin: 0.5rem 0 0 0;
        color: gray;
      }
    }

    .search-input-wrapper {
      display: none;
    }

    .logo {
      align-self: center;
      width: 120px;
      height: 50px;
      margin-right: 30px;
      margin-top: 3px;
      min-width: 100px;
    }

    .cart {
      align-self: center;
      font-size: 22px;
      margin: 0.5rem 0 0 0;
      color: gray;
    }
  }

  .side-nav-wrapper {
    display: flex;
    width: 0;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: grey;
    overflow-x: hidden;
    transition: 0.5s ease-in;

    &.open {
      width: 270px;
    }

    .side-nav {
      width: 100%;

      .side-nav-top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: #fff;
        padding: 16px;
        align-items: center;
        transition: 0.2s ease-in;

        .side-nav-top-letters {
          background: lightcoral;
          border-radius: 50%;
          border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          padding: 20px;
        }

        .side-nav-top-welcome {
          color: #505763;
          font-size: 18px;
          opacity: 0;
          margin-top: -110px;

          &.animate {
            animation: 1s fadeIn 0.5s forwards;
          }
        }
      }

      .side-nav-items li {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        transition: 0.5s ease-in;
      }
    }
  }

  .side-nav-close {
    position: absolute;
    top: 20px;
    z-index: 2;
    border: 1px solid red;
    border-radius: 50%;
    left: -20px;
    padding: 3px;
    transition: 0.5s ease-in;

    &.show {
      position: absolute;
      left: 275px;
    }
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
      margin: 0;
    }
  }

  ${mediaMin.tablet` 
    .nav-mobile-wrapper {
      .btn-search-wrapper {
        display: none;
      }

      .search-input-wrapper {
        display: flex;
        position: relative;
        padding-top: 14px;

        .search-input-wrapper-left {
          display: flex;
          font-size: 20px;
          color: #505763;
          padding-top: 8px;

          .grid {
            margin-right: 10px;
          }
        }

        .search-input-wrapper-right {
          input {
            height: 35px;
            border: 1px solid #505763;
            width: 300px;
            margin-left: 16px;
          }

          .search {
            position: absolute;
            top: 21px;
            right: 13px;
            color: #505763;
            font-size: 20px;
          }
        }
      }
    }
  `}
`;
