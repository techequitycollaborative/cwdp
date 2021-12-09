/** @jsxImportSource @emotion/react */
import { quoteSectionCopy } from 'assets';
import {
  VerticalSplit,
  Blurb,
  Quote
} from 'components';

const QuoteSection = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={quoteSectionCopy.headline}
        description={quoteSectionCopy.description}
      />
    )}
    right={(
      <Quote
        text={quoteSectionCopy.quote.text}
        author={quoteSectionCopy.quote.author}
      />
    )}
  />
);

export default QuoteSection;
