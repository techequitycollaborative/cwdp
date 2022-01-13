/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

const styles = {
  disparityImage: {
    width: '100%',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10%'
  }
};

const Image = ({ source, altText }) => (
  <div css={styles.container}>
    <img css={styles.disparityImage} src={source} alt={altText} />
  </div>
);

Image.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Image;
