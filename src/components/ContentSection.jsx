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
  id,
  overrideBackground
}, ref) => (
  <section
    ref={ref}
    id={id}
    css={[
      styles.section,
      {
        background: overrideBackground || (background === 'dark' ? themeStyles.colors.dark.background : themeStyles.colors.light.background)
      }
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
  overrideBackground: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};

ContentSection.defaultProps = {
  background: 'light',
  title: '',
  id: undefined,
  overrideBackground: ''
};

export default ContentSection;
