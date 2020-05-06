import styled from "styled-components";
import { setBackground, setFlex } from "../../styles/helpers";

const Hero = styled.header`
  min-height: 100vh;
  ${(props) => setBackground(props.img, "rgba(0,0,0,0)")};
  ${setFlex()};
`;

export default Hero;
