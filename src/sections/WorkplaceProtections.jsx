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
        videoId={workplaceProtectionsCopy.video.id}
        title={workplaceProtectionsCopy.video.title}
        coverImg={shadowWorkforceImg}
        background="dark"
      />
    )}
    reverseOnMobile
    verticalFix
  />
);

export default WorkplaceProtections;
