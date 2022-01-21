/** @jsxImportSource @emotion/react */
import {
  landingSectionCopy,
  techEquityLogoSvg,
  badgesSvg,
  heroImg
} from 'assets';
import { breakpoints, mediaQueries, themeStyles } from 'theme';
import { VerticalSplit, Blurb, Video } from 'components';

const styles = {
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    [mediaQueries(breakpoints.mobile)]: {
      flexDirection: 'column',
      flex: 1,
      paddingBottom: 0
    },
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row'
  },
  logo: {
    [mediaQueries(breakpoints.mobile)]: {
      marginTop: 20,
    }
  },
  title: {
    lineHeight: 'normal',
    fontSize: 32,
    margin: 0,
    alignSelf: 'center',
    [mediaQueries(breakpoints.mobile)]: {
      fontSize: 25,
    }
  },
  badges: {
    paddingRight: 15,
  },
};

const LandingSection = () => (
  <>
    <div css={styles.headerContainer}>
      <div css={styles.headerLeft}>
        <img css={styles.badges} src={badgesSvg} alt="Badges" />
        <h1 css={[themeStyles.text.headline, styles.title]}>{landingSectionCopy.header}</h1>
      </div>
      <a href="https://techequitycollaborative.org" target="_blank" rel="noopener noreferrer">
        <img css={styles.logo} src={techEquityLogoSvg} alt="TEC Logo" />
      </a>
    </div>
    <VerticalSplit
      left={(
        <Blurb
          headline={landingSectionCopy.headline}
          description={landingSectionCopy.description}
          button={{ text: landingSectionCopy.button.label, url: landingSectionCopy.button.url }}
        />
      )}
      right={(
        <Video
          source={landingSectionCopy.video.source}
          coverImg={heroImg}
          title={landingSectionCopy.video.title}
        />
      )}
      reverseOnMobile
    />
  </>
);

export default LandingSection;
