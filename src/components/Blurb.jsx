/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { themeStyles } from 'theme';

import Button from './Button';

const Blurb = ({ headline, description, button }) => (
  <div>
    <h1 css={[themeStyles.text.headline]}>{headline}</h1>
    <p css={themeStyles.text.description}>{description}</p>
    {button && <Button text={button.text} color={button.color} onClick={button.onClick} /> }
  </div>
);

Blurb.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }),
};

Blurb.defaultProps = {
  button: undefined
};

export default Blurb;
