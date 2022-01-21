/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { mediaQueries, breakpoints } from 'theme';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: '0px 80px',
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
    width: '5px',
    background: 'black'
  }
};

const VerticalSplit = ({ left, right, hasDivider, reverseOnMobile }) => (
  <div css={[styles.container, {
    [mediaQueries(breakpoints.mobile)]: {
      flexDirection: reverseOnMobile ? 'column-reverse' : 'column',
      padding: '40px 40px',
    },
  }]}
  >
    <div css={styles.split}>
      {left}
    </div>
    {hasDivider && <div css={styles.divider} />}
    <div css={styles.split}>
      {right}
    </div>
  </div>
);

VerticalSplit.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
  reverseOnMobile: PropTypes.bool,
  hasDivider: PropTypes.bool
};

VerticalSplit.defaultProps = {
  hasDivider: false,
  reverseOnMobile: false
};

export default VerticalSplit;
