/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { breakpoints, mediaQueries, themeStyles } from 'theme';

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    scrollSnapAlign: 'start',
    [mediaQueries(breakpoints.mobile)]: {
      flexDirection: 'column',
      minHeight: 'auto'
    },
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
    alignSelf: 'flex-start',
    marginBottom: 15,
    [mediaQueries(breakpoints.mobile)]: {
      marginBottom: 0
    },
  },
};

const ContentSection = forwardRef(({
  content,
  background,
  title,
  id
}, ref) => (
  <section
    ref={ref}
    id={id}
    css={[
      styles.section,
      background === 'dark' ? styles.dark : styles.light
    ]}
  >
    { title
    && <div css={styles.titleContainer}><h2 css={themeStyles.text.sectionTitle}>{title}</h2></div>}
    { content }
  </section>
));

ContentSection.propTypes = {
  content: PropTypes.node.isRequired,
  background: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string,
  id: PropTypes.string,
};

ContentSection.defaultProps = {
  background: 'light',
  title: '',
  id: undefined
};

export default ContentSection;
