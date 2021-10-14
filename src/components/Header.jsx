/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { themeStyles } from 'theme';

const styles = {
  header: {
    backgroundColor: themeStyles.colors.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: themeStyles.colors.text,
  },
};

const Header = ({ children }) => (
  <header css={styles.header}>{children}</header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
