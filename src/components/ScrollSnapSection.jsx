/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { themeStyles } from 'theme';

const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    scrollSnapAlign: 'start',
    padding: '0px 100px'
  },
  dark: {
    background: themeStyles.colors.dark.background,
  },
  light: {
    background: themeStyles.colors.light.background,
  }
};

const ScrollSnapSection = ({ children, background }) => (
  <section
    css={[
      styles.section,
      background === 'dark' ? styles.dark : styles.light
    ]}
  >
    { children }
  </section>
);

ScrollSnapSection.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOf(['light', 'dark']),
};

ScrollSnapSection.defaultProps = {
  background: 'light'
};

export default ScrollSnapSection;
