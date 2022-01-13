/** @jsxImportSource @emotion/react */
import { workplaceProtectionsCopy, shadowWorkforceImg } from 'assets';
import {
  VerticalSplit,
  Blurb,
  Video
} from 'components';

const WorkplaceProtections = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={workplaceProtectionsCopy.headline}
        description={workplaceProtectionsCopy.description}
      />
    )}
    right={(
      <Video
        title={workplaceProtectionsCopy.video.title}
        source={workplaceProtectionsCopy.video.source}
        coverImg={shadowWorkforceImg}
      />
    )}
  />
);

export default WorkplaceProtections;
