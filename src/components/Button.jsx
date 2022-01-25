/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { breakpoints, mediaQueries } from 'theme';

const styles = {
  button: {
    padding: '16px 38px',
    borderRadius: 50,
    color: '#FFFFFF',
    fontSize: 22,
    margin: '20px 0',
    fontWeight: 600,
    fontFamily: 'freight-sans-pro',
    [mediaQueries(breakpoints.tablet)]: {
      fontSize: 18,
    },
    '&:active': {
      opacity: '.5'
    },
    '&:hover': {
      cursor: 'pointer'
    }
  }
};

const Button = ({ color, url, text }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <button
      css={[
        styles.button,
        {
          background: color,
          border: `3px solid ${color}`,
          '&:hover': {
            background: '#FFFFFF',
            color
          },
        }]}
      type="button"
    >
      {text}
    </button>
  </a>
);

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: '#CC3333',
};

export default Button;
