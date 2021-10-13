/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { themeStyles } from '../theme';

const styles = {
  link: {
    color: themeStyles.colors.link,
    alignSelf: 'center',
  },
};

const Link = ({ children, href }) => (
  <a css={styles.link} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

Link.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
