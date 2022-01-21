/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

import { playButtonSvg } from 'assets';
import { breakpoints, mediaQueries, themeStyles } from 'theme';

const ANIMATION_DURATION = 200;

const styles = {
  container: {
    width: '80%',
    height: '100%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    [mediaQueries(breakpoints.mobile)]: {
      width: '90%',
      margin: '35% 0px'
    },
  },
  // Making iframe responsive - https://www.smashingmagazine.com/2014/02/making-embedded-content-work-in-responsive-design/#the-css
  videoContainer: {
    flex: 1,
    zIndex: 0,
    position: 'relative',
    height: 0,
    paddingBottom: '56.25%', // Equals 16:9,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  cover: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: '110%',
    top: '50%',
    left: '50%',
    border: 'none',
    background: 'none',
    zIndex: 10,
  },
  coverImg: {
    width: '100%',
    height: '100%',
    opacity: 1,
    zIndex: 20,
  },
  coverPlayButton: {
    position: 'absolute',
    opacity: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    zIndex: 30,
    '&:active': {
      opacity: '.8'
    },
    [mediaQueries(breakpoints.mobile)]: {
      top: '55%',
    },
  },
  coverPlayButtonImg: {
    [mediaQueries(breakpoints.mobile)]: {
      width: '70%',
    },
  },
  coverFadeOut: {
    transition: `opacity ${ANIMATION_DURATION}ms linear`,
    opacity: 0,
  },
  coverFadeIn: {
    transition: `opacity ${ANIMATION_DURATION}ms linear`,
    opacity: 1,
  },
  coverHidePointers: {
    pointerEvents: 'none',
    cursor: 'none',
  },
  coverShowPointers: {
    pointerEvents: 'auto',
    cursor: 'pointer'
  }
};

const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    controls: 0,
    modestbranding: 1,
    rel: 0,
    fs: 1,
  },
};

const Video = ({ title, videoId, coverImg, background }) => {
  const playerRef = useRef(null);
  const [showCover, setShowCover] = useState(true);

  const onPlay = () => {
    playerRef.current.internalPlayer.playVideo();
  };

  const onPlayerStateChange = (event) => {
    // https://developers.google.com/youtube/iframe_api_reference#onStateChange
    switch (event.data) {
      case YouTube.PlayerState.ENDED:
      case YouTube.PlayerState.PAUSED:
        setShowCover(true);
        break;

      case YouTube.PlayerState.PLAYING:
        setShowCover(false);
        break;

      default:
      // Some other event, do nothing
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.videoContainer}>
        <button type="button" onClick={onPlay} css={[styles.cover, showCover ? styles.coverShowPointers : styles.coverHidePointers]}>
          <img
            css={[
              styles.coverImg,
              { background: (background === 'light' ? themeStyles.colors.light.background : themeStyles.colors.dark.background) },
              showCover ? styles.coverFadeIn : styles.coverFadeOut
            ]}
            src={coverImg}
            alt={title}
          />
          <div css={styles.coverPlayButton}>
            <img css={[showCover ? styles.coverFadeIn : styles.coverFadeOut, styles.coverPlayButtonImg]} src={playButtonSvg} alt="Disparity" />
          </div>
        </button>
        <YouTube
          ref={playerRef}
          videoId={videoId}
          css={styles.video}
          opts={opts}
          title={title}
          onStateChange={onPlayerStateChange}
        />
      </div>
    </div>
  );
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  coverImg: PropTypes.any.isRequired,
  background: PropTypes.oneOf(['light', 'dark']),
};

Video.defaultProps = {
  background: 'light',
};

export default Video;
