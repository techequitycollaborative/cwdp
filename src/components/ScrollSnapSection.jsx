/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { themeStyles } from 'theme';

const styles = {
  section: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    scrollSnapAlign: 'start',
  },
  dark: {
    background: themeStyles.colors.dark.background,
  },
  light: {
    background: themeStyles.colors.light.background,
  },
  titleContainer: {
    background: '#112353',
    padding: '16px 38px',
    alignSelf: 'flex-start'
  },
};

const ScrollSnapSection = ({ children, background, title }) => (
  <section
    css={[
      styles.section,
      background === 'dark' ? styles.dark : styles.light
    ]}
  >
    { title
    && <div css={styles.titleContainer}><h2 css={themeStyles.text.sectionTitle}>{title}</h2></div>}
    { children }
  </section>
);

ScrollSnapSection.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string,
};

ScrollSnapSection.defaultProps = {
  background: 'light',
  title: ''
};

export default ScrollSnapSection;
