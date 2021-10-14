/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';

import { logoSvg } from 'assets';

const logoRotate = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const styles = {
  logo: {
    height: '40vmin',
    pointerEvents: 'none',
    '@media(prefers-reduced-motion: no-preference)': {
      animation: `${logoRotate} infinite 20s linear`,
    },
  },
};

const Logo = () => (
  <img css={styles.logo} src={logoSvg} alt="logo" />
);

export default Logo;
