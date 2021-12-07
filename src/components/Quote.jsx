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
  },
  horiztonalBorderContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeft: '2px solid#E5E5E5',
    borderRight: '2px solid#E5E5E5',
  },
  horizontalBorder: {
    border: 'hidden',
    padding: 0,
    margin: 0,
    borderTop: '2px solid#E5E5E5',
    flex: 1,
  },
  longHorizontalBorder: {
    flex: 8,
  },
  quoteSvg: {
    margin: '0px 10px',
    height: 25
  },
  contractorSvg: {
    margin: '0px 10px',
    height: 75,
    transform: 'rotate(10deg)'
  },
  textContainer: {
    borderLeft: '2px solid#E5E5E5',
    borderRight: '2px solid#E5E5E5',
    padding: '60px 30px'
  }
};

const Quote = ({ text, author }) => (
  <div css={styles.container}>
    <div css={styles.horiztonalBorderContainer}>
      <hr css={styles.horizontalBorder} />
      <img css={styles.quoteSvg} src={quoteSvg} alt="Quote" />
      <hr css={[styles.horizontalBorder, styles.longHorizontalBorder]} />
    </div>
    <div css={styles.textContainer}>
      <p css={styles.quoteText}>{text}</p>
      {author && <p css={styles.authorText}>{author}</p>}
    </div>
    <div css={styles.horiztonalBorderContainer}>
      <hr css={[styles.horizontalBorder, styles.longHorizontalBorder]} />
      <img css={styles.contractorSvg} src={contractorBadgeSvg} alt="Contractor Badge" />
      <hr css={styles.horizontalBorder} />
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
