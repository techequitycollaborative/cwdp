/** @jsxImportSource @emotion/react */
import { quoteSectionCopy } from 'assets';
import {
  ScrollSnapSection,
  VerticalSplit,
  Blurb,
  Quote
} from 'components';

const QuoteSection = () => (
  <ScrollSnapSection title={quoteSectionCopy.title}>
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
  </ScrollSnapSection>
);

export default QuoteSection;
