/** @jsxImportSource @emotion/react */
import { mobilityAdvancementCopy } from 'assets';
import {
  VerticalSplit,
  Blurb,
  Quote
} from 'components';

const MobilityAdvancement = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={mobilityAdvancementCopy.headline}
        description={mobilityAdvancementCopy.description}
      />
    )}
    right={(
      <Quote
        text={mobilityAdvancementCopy.quote.text}
        author={mobilityAdvancementCopy.quote.author}
      />
    )}
    verticalFix
  />
);

export default MobilityAdvancement;
