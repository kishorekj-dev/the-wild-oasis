import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  padding-top: 3rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkmode } = useDarkMode();
  const img = isDarkmode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img key={img} src={img} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
