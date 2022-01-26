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
  verticalFix: {
    paddingBottom: '10vh'
  },
  divider: {
    borderLeft: '2px solid #E5E5E5',
  }
};

const VerticalSplit = ({ left, right, hasDivider, reverseOnMobile, verticalFix }) => (
  <div css={[styles.container, {
    [mediaQueries(breakpoints.tablet)]: {
      flexDirection: 'column',
    },
    [mediaQueries(breakpoints.mobile)]: {
      flexDirection: reverseOnMobile ? 'column-reverse' : 'column',
      padding: '40px 40px',
    },
  }]}
  >
    <div css={[styles.split, styles.splitLeft, verticalFix && styles.verticalFix]}>
      {left}
    </div>
    <div css={[styles.split, hasDivider && styles.divider]}>
      {right}
    </div>
  </div>
);

VerticalSplit.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
  reverseOnMobile: PropTypes.bool,
  hasDivider: PropTypes.bool,
  verticalFix: PropTypes.bool
};

VerticalSplit.defaultProps = {
  hasDivider: false,
  reverseOnMobile: false,
  verticalFix: false
};

export default VerticalSplit;
