/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { quoteSvg, contractorBadgeSvg } from 'assets';
import { breakpoints, mediaQueries, themeStyles } from 'theme';

const styles = {
  quoteText: {
    color: '#000000',
    fontSize: 24,
    lineHeight: 'normal',
    margin: 0,
    [mediaQueries(breakpoints.mobile)]: {
      fontSize: 20
    },
  },
  authorText: {
    color: '#000000',
    fontSize: 20,
    lineHeight: '28px',
    marginBottom: 0
  },
  container: {
    margin: '0% 15%',
    border: '2px solid #E5E5E5',
    position: 'relative',
    marginBottom: 60,
    [mediaQueries(breakpoints.mobile)]: {
      margin: '0% 3%',
    },
  },
  textContainer: {
    padding: '70px 40px',
    [mediaQueries(breakpoints.mobile)]: {
      padding: '50px 20px',
    },
  },
  quoteSvgContainer: {
    position: 'absolute',
    margin: '0px 30px',
    top: -40,
    left: 0,
    [mediaQueries(breakpoints.mobile)]: {
      height: 55,
      top: -28,
    },
  },
  contractorSvgContainer: {
    position: 'absolute',
    bottom: -50,
    right: 0,
    margin: '0px 40px',
    display: 'inline-block',
    paddingRight: 10,
    paddingLeft: 18,
    [mediaQueries(breakpoints.mobile)]: {
      bottom: -35,
    },
  },
  contractorSvg: {
    transform: 'rotate(10deg)',
    [mediaQueries(breakpoints.mobile)]: {
      height: 65,
    },
  },
};

const Quote = ({ text, author, background }) => (
  <div css={styles.container}>
    <div
      css={[
        styles.quoteSvgContainer,
        { background: (background === 'light' ? themeStyles.colors.light.background : themeStyles.colors.dark.background) }
      ]}
    >
      <img src={quoteSvg} alt="Quote" />
    </div>
    <div css={styles.textContainer}>
      <p css={styles.quoteText}>{text}</p>
      {author && <p css={styles.authorText}>{author}</p>}
    </div>
    <div
      css={[
        styles.contractorSvgContainer,
        { background: (background === 'light' ? themeStyles.colors.light.background : themeStyles.colors.dark.background) }
      ]}
    >
      <img css={styles.contractorSvg} src={contractorBadgeSvg} alt="Contractor Badge" />
    </div>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  background: PropTypes.oneOf(['light', 'dark']),
};

Quote.defaultProps = {
  author: undefined,
  background: 'light',
};

export default Quote;
