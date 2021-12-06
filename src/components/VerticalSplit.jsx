/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: '0px 40px'
  },
  split: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    alignSelf: 'center',
    borderLeft: '2px solid #E5E5E5',
    height: '70%',
  }
};

const VerticalSplit = ({ left, right, hasDivider }) => (
  <div css={styles.container}>
    <div css={styles.split}>
      {left}
    </div>
    { hasDivider && <div css={styles.divider} />}
    <div css={[styles.split, styles.right]}>
      {right}
    </div>
  </div>
);

VerticalSplit.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
  hasDivider: PropTypes.bool
};

VerticalSplit.defaultProps = {
  hasDivider: false
};

export default VerticalSplit;
