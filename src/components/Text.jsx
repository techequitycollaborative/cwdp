import PropTypes from 'prop-types';

const Text = ({ children }) => (
  <p>{children}</p>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
