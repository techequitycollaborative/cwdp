/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

const styles = {
  container: {
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
    height: '100vh',
  },
};

const ScrollSnapContainer = ({ children }) => (
  <div css={styles.container}>
    {children}
  </div>
);

ScrollSnapContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollSnapContainer;
