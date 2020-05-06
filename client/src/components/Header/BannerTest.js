import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerWrapper>
      <h1>Hello world</h1>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  h1 {
    color: red;
  }
`;

export default Banner;
