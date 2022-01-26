/** @jsxImportSource @emotion/react */
import { glassDivideCopy } from 'assets';
import {
  VerticalSplit,
  Blurb,
  Quote
} from 'components';

const GlassDivide = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={glassDivideCopy.headline}
        description={glassDivideCopy.description}
      />
    )}
    right={(
      <Quote
        text={glassDivideCopy.quote.text}
        author={glassDivideCopy.quote.author}
      />
    )}
    verticalFix
  />
);

export default GlassDivide;
