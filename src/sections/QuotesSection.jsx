/** @jsxImportSource @emotion/react */
import { quotesSectionCopy } from 'assets';
import { ScrollSnapSection } from 'components';

const styles = {
  quote: {
    fontSize: 24
  },
  author: {
    fontSize: 18
  },
  quoteContainer: {
    marginTop: 30
  }
};

const renderQuote = (quote) => (
  <div key={`quote-${quote.text}`} css={styles.quoteContainer}>
    <i css={styles.quote}>{`"${quote.text}"`}</i>
    <p css={styles.author}>{`- ${quote.author}`}</p>
  </div>
);

const QuotesSection = () => (
  <ScrollSnapSection>
    {quotesSectionCopy.quotes.map((quote) => (renderQuote(quote)))}
  </ScrollSnapSection>
);

export default QuotesSection;
