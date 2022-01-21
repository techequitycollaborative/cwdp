/** @jsxImportSource @emotion/react */
import { workplaceProtectionsCopy, shadowWorkforceImg } from 'assets';
import {
  VerticalSplit,
  Blurb,
  VideoPlaceholder
} from 'components';

const WorkplaceProtections = () => (
  <VerticalSplit
    left={(
      <Blurb
        headline={workplaceProtectionsCopy.headline}
        description={workplaceProtectionsCopy.description}
      />
    )}
    right={(<VideoPlaceholder source={shadowWorkforceImg} altText="Silencing Worker Voices" />)}
    reverseOnMobile
  />
);

export default WorkplaceProtections;
