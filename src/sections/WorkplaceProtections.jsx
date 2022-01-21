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
        source={workplaceProtectionsCopy.video.source}
        title={workplaceProtectionsCopy.video.title}
        coverImg={shadowWorkforceImg}
        background="dark"
      />
    )}
    reverseOnMobile
  />
);

export default WorkplaceProtections;
