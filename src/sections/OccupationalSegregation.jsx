/** @jsxImportSource @emotion/react */
import { occupationalSegregationCopy, segregationImg } from 'assets';
import { VerticalSplit, Blurb, Video } from 'components';

const OccupationalSegregation = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={occupationalSegregationCopy.headline}
        description={occupationalSegregationCopy.description}
      />
    )}
    right={(
      <Video
        title={occupationalSegregationCopy.video.title}
        source={occupationalSegregationCopy.video.source}
        coverImg={segregationImg}
        background="dark"
      />
    )}
  />
);

export default OccupationalSegregation;
