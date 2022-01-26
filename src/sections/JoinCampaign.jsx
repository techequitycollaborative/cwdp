/** @jsxImportSource @emotion/react */
import { joinImg, joinCampaignCopy, insideDisparitiesCopy } from 'assets';
import { VerticalSplit, Blurb, Image, Button } from 'components';
import { breakpoints, mediaQueries, themeStyles } from 'theme';

const styles = {
  blueBox: {
    background: '#00CEE1',
    padding: '5% 10%',
    marginTop: 0,
    [mediaQueries(breakpoints.mobile)]: {
      marginRight: -15
    }
  },
  borderBox: {
    border: 'solid white 1px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2% 8%',
    margin: '0% 5%',
  },
  disparitiesText: {
    textAlign: 'center',
    margin: 12
  },
  blurbPadding: {
    paddingBottom: 40
  }
};

const JoinCampaign = () => (
  <>
    <div css={styles.joinContainer}>
      <VerticalSplit
        left={(
          <>
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
            <div css={styles.blurbPadding} />
          </>
        )}
        right={(<Image bottomAlign source={joinImg} altText="Join Campaign" />)}
      />
    </div>
    <div css={styles.blueBox}>
      <div css={styles.borderBox}>
        <p css={[themeStyles.text.headline, styles.disparitiesText]}>
          {insideDisparitiesCopy.headline}
        </p>
        <p css={[themeStyles.text.description, styles.disparitiesText]}>
          {insideDisparitiesCopy.description}
        </p>
        <Button
          text={insideDisparitiesCopy.button.label}
          url={insideDisparitiesCopy.button.url}
          color={themeStyles.colors.brandBlue}
        />
      </div>
    </div>
  </>
);

export default JoinCampaign;
