/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import youTubePlayer from 'youtube-player';

import { playButtonSvg } from 'assets';
import { breakpoints, mediaQueries } from 'theme';

const ANIMATION_DURATION = 200;
const BORDER_RADIUS = 15;

const styles = {
  container: {
    width: '80%',
    height: '100%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    [mediaQueries(breakpoints.mobile)]: {
      width: '100%',
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
    borderRadius: BORDER_RADIUS,
  },
  coverImg: {
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS,
    opacity: 1,
    zIndex: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    }
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

const playerOptions = {};

const Video = ({ title, source, coverImg }) => {
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [showCover, setShowCover] = useState(true);

  const onPlay = () => {
    player.playVideo();
  };

  const onPlayerStateChange = (event) => {
    // https://developers.google.com/youtube/iframe_api_reference#onStateChange
    switch (event.data) {
      case 0: // ENDED
      case 2: // PAUSE
        setShowCover(true);
        break;

      case 1: // PLAYING
        setShowCover(false);
        break;

      default:
      // Some other event, do nothing
    }
  };

  useEffect(() => {
    // https://developers.google.com/youtube/iframe_api_reference
    const tempPlayer = youTubePlayer(iframeRef.current, playerOptions);
    tempPlayer.on('stateChange', onPlayerStateChange);
    setPlayer(tempPlayer);
  }, [iframeRef]);

  return (
    <div css={styles.container}>
      <div css={styles.videoContainer}>
        <button type="button" onClick={onPlay} css={showCover ? styles.coverShowPointers : styles.coverHidePointers}>
          <img
            css={[styles.coverImg, showCover ? styles.coverFadeIn : styles.coverFadeOut]}
            src={coverImg}
            alt={title}
          />
          <div css={styles.coverPlayButton}>
            <img css={showCover ? styles.coverFadeIn : styles.coverFadeOut} src={playButtonSvg} alt="Disparity" />
          </div>
        </button>
        <iframe
          ref={iframeRef}
          css={styles.video}
          width="560"
          height="315"
          src={`${source}?controls=0&modestbranding=1&rel=0&fs=1&enablejsapi=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  coverImg: PropTypes.any.isRequired
};

export default Video;
