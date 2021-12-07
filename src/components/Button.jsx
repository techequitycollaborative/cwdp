/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

const styles = {
  button: {
    padding: '16px 38px',
    borderRadius: 50,
    color: '#FFFFFF',
    fontSize: 20,
    margin: '20px 0',
    fontWeight: 700
  }
};

const Button = ({ color, onClick, text }) => (
  <button
    onClick={onClick}
    css={[
      styles.button,
      {
        background: color,
        border: `3px solid ${color}`,
        '&:hover': {
          background: '#FFFFFF',
          color
        },
        '&:active': {
          opacity: '.5'
        }
      }]}
    type="button"
  >
    {text}
  </button>
);

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: '#CC3333',
  onClick: undefined
};

export default Button;
