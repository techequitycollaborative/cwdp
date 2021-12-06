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
};

const VerticalSplit = ({ left, right }) => (
  <div css={styles.container}>
    <div css={styles.split}>
      {left}
    </div>
    <div css={[styles.split, styles.right]}>
      {right}
    </div>
  </div>
);

VerticalSplit.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired
};

export default VerticalSplit;
