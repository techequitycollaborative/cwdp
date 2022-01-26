/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { breakpoints, mediaQueries } from 'theme';

const styles = {
  disparityImage: {
    width: '100%'
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
    paddingBottom: 0,
  },
  narrow: {
    maxWidth: '70%',
    transform: 'translateY(-10%)'
  },
  bottomAlign: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    [mediaQueries(breakpoints.mobile)]: {
      marginBottom: -56
    }
  }
};

const Image = ({ source, altText, bottomAlign, narrow }) => (
  <div css={[styles.container, bottomAlign && styles.bottomAlign, narrow && styles.narrow]}>
    <img css={styles.disparityImage} src={source} alt={altText} />
  </div>
);

Image.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  bottomAlign: PropTypes.bool,
  narrow: PropTypes.bool
};

Image.defaultProps = {
  bottomAlign: false,
  narrow: false
};

export default Image;
