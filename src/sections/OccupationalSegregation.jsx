/** @jsxImportSource @emotion/react */
import { occupationalSegregationCopy, segregationImg } from 'assets';
import {
  VerticalSplit,
  Blurb,
  Video,
  Image
} from 'components';

const OccupationalSegregation = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={occupationalSegregationCopy.headline}
        description={occupationalSegregationCopy.description}
      />
    )}
    right={(<Image source={segregationImg} altText="Occupational Segregation" />)}
  />
);

export default OccupationalSegregation;
