/** @jsxImportSource @emotion/react */
import { videoSectionCopy, shadowWorkforceImg } from 'assets';
import {
  VerticalSplit,
  Blurb,
  Video
} from 'components';

const VideoSection = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={videoSectionCopy.headline}
        description={videoSectionCopy.description}
      />
    )}
    right={(
      <Video
        title={videoSectionCopy.video.title}
        source={videoSectionCopy.video.source}
        coverImg={shadowWorkforceImg}
      />
    )}
  />
);

export default VideoSection;
