/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { breakpoints, mediaQueries, themeStyles } from 'theme';

import Button from './Button';

const styles = {
  column: {
    paddingRight: 40,
    [mediaQueries(breakpoints.tablet)]: {
      paddingRight: 0
    },
    [mediaQueries(breakpoints.mobile)]: {
      paddingRight: 0
    }
  }
};

const Blurb = ({ headline, description, button, invertTextColors }) => (
  <div css={styles.column}>
    <h1 css={[themeStyles.text.headline, invertTextColors && { color: '#FFFFFF' }]}>{headline}</h1>
    {description.map((paragraph) => (
      <p key={paragraph} css={[themeStyles.text.description, invertTextColors && { color: '#FFFFFF' }]}>{paragraph}</p>
    ))}
    {button && <Button text={button.text} color={button.color} url={button.url} />}
  </div>
);

Blurb.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  button: PropTypes.shape(Button.propTypes),
  invertTextColors: PropTypes.bool
};

Blurb.defaultProps = {
  button: undefined,
  invertTextColors: false
};

export default Blurb;
