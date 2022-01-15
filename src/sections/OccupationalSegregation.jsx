/** @jsxImportSource @emotion/react */
import { occupationalSegregationCopy, segregationImg } from 'assets';
import {
  VerticalSplit,
  Blurb,
  VideoPlaceholder
} from 'components';

const OccupationalSegregation = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={occupationalSegregationCopy.headline}
        description={occupationalSegregationCopy.description}
      />
    )}
    right={(<VideoPlaceholder source={segregationImg} altText="Occupational Segregation" />)}
  />
);

export default OccupationalSegregation;
