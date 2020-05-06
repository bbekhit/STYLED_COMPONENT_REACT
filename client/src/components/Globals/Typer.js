import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
};

function Typer({ messages, heading, className }) {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.slice(0, currentState.text.length - 1)
      : currentState.message.slice(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <div className={className}>
      <h1>
        {heading}&nbsp;
        <span>{state.text}</span>
        <span id="cursor" />
      </h1>
    </div>
  );
}

export default styled(Typer)`
    h1 {
      color: #00ff41;
    }

    #cursor {
      border-left: 0.1em solid #00ff41;
      animation: blink 0.7s steps(1) infinite;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
`;
