import React from 'react';
import styled, { keyframes } from 'styled-components';

import { logoSvg } from '../assets';

const logoRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LogoStyled = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoRotate} infinite 20s linear;
  }
`;

const Logo = () => (
  <LogoStyled src={logoSvg} alt="logo" />
);

export default Logo;
