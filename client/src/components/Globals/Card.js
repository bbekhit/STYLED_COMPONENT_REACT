import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import {
  setBackground,
  setRem,
  media,
  setShadow,
  setTransition,
  setFlex,
} from "../../styles/helpers";
import Title from "./Title";

const Card = ({ className, ...props }) => {
  return (
    <div className={className}>
      {props.down && (
        <div className="overlay-slide-down">
          <div className="text">Hello There</div>
        </div>
      )}

      {props.up && (
        <div className="overlay-slide-up">
          <div className="text">Hello There</div>
        </div>
      )}

      {props.left && (
        <div className="overlay-slide-left">
          <div className="text">Hello There</div>
        </div>
      )}

      {props.right && (
        <div className="overlay-slide-right">
          <div className="text">Hello There</div>
        </div>
      )}

      {props.fadeIn && (
        <div className="overlay-fade-in">
          <div className="text">Hello There</div>
        </div>
      )}

      <div className="card-image"></div>
      <div className="card-title">
        <Title title="John Doe" center />
      </div>
      <div className="card-content">
        <p className="title">CEO & Founder</p>
        <p>Harvard University</p>
        <div className="icons">
          <FaFacebook />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default styled(Card)`
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  overflow: hidden;
  ${setShadow.light};
  border-radius: 15px;

  ${setTransition({ time: ".5s" })};
  .card-image {
    ${(props) => setBackground(props.img, "rgba(0,0,0,0)")};
    background-attachment: inherit;
    width: 100%;
    height: 250px;
    border-bottom: 1px solid black;
  }
  .card-title {
    margin: 10px;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${setRem(25)};

    .title {
      color: grey;
    }

    p {
      margin-bottom: 10px;
    }

    .icons {
      width: 50%;
      display: flex;
      justify-content: space-between;
      font-size: 22px;
      margin: 10px;
    }
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.75);
    transform: translateY(-20px) scale(1.025);

    .overlay-box {
      opacity: 1;
    }

    .overlay-fade {
      opacity: 1;
    }

    .overlay-slide-down {
      opacity: 1;
      height: 100%;
    }

    .overlay-slide-up {
      opacity: 1;
      height: 56%;
    }

    .overlay-slide-left {
      opacity: 1;
      width: 100%;
    }

    .overlay-slide-right {
      opacity: 1;
      width: 100%;
    }

    .overlay-fade-in {
      transform: scale(1);
    }
  }

  .overlay-slide-down,
  .overlay-slide-up,
  .overlay-slide-left,
  .overlay-slide-right {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    ${setTransition({ time: ".5s" })};
    ${setFlex()};

    .text {
      color: lightyellow;
      font-size: 20px;
    }
  }

  .overlay-slide-down {
    height: 0;
    width: 100%;
    top: 0;
  }

  .overlay-slide-up {
    width: 100%;
    height: 0;
    bottom: calc(100% - 56%);

    .text {
      color: lightyellow;
      font-size: 20px;
    }
  }

  .overlay-slide-left {
    height: 56%;
    left: 0;
    width: 0;

    .text {
      color: lightyellow;
      font-size: 20px;
    }
  }

  .overlay-slide-right {
    height: 56%;
    right: 0;
    width: 0;

    .text {
      color: lightyellow;
      font-size: 20px;
    }
  }

  .overlay-fade-in {
    position: absolute;
    height: 100%;
    width: 100%;
    transform: scale(0);
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    ${setTransition({ time: ".5s" })};
    ${setFlex()};

    .text {
      color: lightyellow;
      font-size: 20px;
    }
  }

  ${media.phone` 
    width: 80%;
    `}
`;

const test = styled.div`
  width: 300px;
  min-width: 250px;
  max-width: 300px;
`;
