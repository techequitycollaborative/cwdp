/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { playButtonSvg } from 'assets';

const styles = {
  disparityImage: {
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '5%',
    position: 'relative'
  },
  coverImg: {
    width: '90%',
    height: '100%',
    opacity: 1,
    zIndex: 0,
    position: 'relative',
    margin: 'auto'
  },
  coverPlayButton: {
    position: 'absolute',
    opacity: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    zIndex: 1
  }
};

const VideoPlaceholder = ({ source, altText }) => (
  <div css={styles.container}>
    <div css={styles.coverImg}>
      <img css={styles.disparityImage} src={source} alt={altText} />
    </div>
    <div css={styles.coverPlayButton}>
      <img css={styles} src={playButtonSvg} alt="Disparity" />
    </div>
  </div>
);

VideoPlaceholder.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default VideoPlaceholder;
