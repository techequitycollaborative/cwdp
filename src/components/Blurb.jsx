/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { themeStyles } from 'theme';

import Button from './Button';

const Blurb = ({ headline, description, button }) => (
  <div>
    <h1 css={[themeStyles.text.headline]}>{headline}</h1>
    {description.map((paragraph) => (
      <p css={themeStyles.text.description}>{paragraph}</p>
    ))}
    {button && <Button text={button.text} color={button.color} url={button.url} /> }
  </div>
);

Blurb.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes)
};

Blurb.defaultProps = {
  button: undefined
};

export default Blurb;
