/** @jsxImportSource @emotion/react */
import { joinImg, joinCampaignCopy } from 'assets';
import { VerticalSplit, Blurb, Image } from 'components';
import { themeStyles } from 'theme';

const JoinCampaign = () => (
  <>
    <VerticalSplit
      left={(
        <Blurb
          headline={joinCampaignCopy.headline}
          description={joinCampaignCopy.description}
          invertTextColors
          button={{
            text: joinCampaignCopy.button.label,
            url: joinCampaignCopy.button.url,
            color: themeStyles.colors.brandBlue
          }}
        />
      )}
      right={(<Image source={joinImg} altText="Join Campaign" />)}
    />
  </>
);

export default JoinCampaign;
