/** @jsxImportSource @emotion/react */
import { quoteSectionCopy } from 'assets';
import {
  ContentSection,
  VerticalSplit,
  Blurb,
  Quote
} from 'components';

const QuoteSection = () => (
  <ContentSection title={quoteSectionCopy.title}>
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
  </ContentSection>
);

export default QuoteSection;
