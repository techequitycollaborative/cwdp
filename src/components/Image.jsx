/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { breakpoints, mediaQueries } from 'theme';

const styles = {
  disparityImage: {
    width: '100%',
    [mediaQueries(breakpoints.tablet)]: {
      width: '80%',
    }
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
  bottomAlign: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  }
};

const Image = ({ source, altText, bottomAlign }) => (
  <div css={[styles.container, bottomAlign && styles.bottomAlign]}>
    <img css={styles.disparityImage} src={source} alt={altText} />
  </div>
);

Image.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  bottomAlign: PropTypes.bool
};

Image.defaultProps = {
  bottomAlign: false,
};

export default Image;
