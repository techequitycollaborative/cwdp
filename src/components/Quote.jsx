/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

import { quoteSvg, contractorBadgeSvg } from 'assets';

const styles = {
  quoteText: {
    color: '#000000',
    fontSize: 24,
    lineHeight: '34px',
    margin: 0
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
    position: 'relative'
  },
  textContainer: {
    padding: '70px 40px',
  },
  quoteSvg: {
    position: 'absolute',
    margin: '0px 30px',
    top: -40,
    left: 0
  },
  contractorSvgContainer: {
    background: '#FFFFFF',
    position: 'absolute',
    bottom: -50,
    right: 0,
    margin: '0px 40px',
    display: 'inline-block',
    paddingRight: 10,
    paddingLeft: 18
  },
  contractorSvg: {
    transform: 'rotate(10deg)'
  },
};

const Quote = ({ text, author }) => (
  <div css={styles.container}>
    <img css={styles.quoteSvg} src={quoteSvg} alt="Quote" />
    <div css={styles.textContainer}>
      <p css={styles.quoteText}>{text}</p>
      {author && <p css={styles.authorText}>{author}</p>}
    </div>
    <div css={styles.contractorSvgContainer}>
      <img css={styles.contractorSvg} src={contractorBadgeSvg} alt="Contractor Badge" />
    </div>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
};

Quote.defaultProps = {
  author: undefined
};

export default Quote;
