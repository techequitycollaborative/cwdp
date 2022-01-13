/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { mediaQueries, breakpoints } from 'theme';

// Very similar to VerticalSplit.jsx

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: '0px 40px',
    [mediaQueries(breakpoints.mobile)]: {
      flexDirection: 'column',
      padding: '40px 40px',
    },
  },
  split: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    [mediaQueries(breakpoints.mobile)]: {
      paddingBottom: '5%'
    },
  },
  divider: {
    alignSelf: 'center',
    borderLeft: '2px solid #E5E5E5',
    height: '70%',
  }
};

const ThreeColumnSplit = ({ left, center, right }) => (
  <div css={styles.container}>
    <div css={styles.split}>
      {left}
    </div>
    <div css={styles.split}>
      {center}
    </div>
    <div css={styles.split}>
      {right}
    </div>
  </div>
);

ThreeColumnSplit.propTypes = {
  left: PropTypes.node.isRequired,
  center: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default ThreeColumnSplit;
