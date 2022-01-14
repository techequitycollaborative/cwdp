/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

const styles = {
  button: {
    padding: '16px 38px',
    borderRadius: 50,
    color: '#FFFFFF',
    fontSize: 20,
    margin: '20px 0',
    fontWeight: 700,
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
