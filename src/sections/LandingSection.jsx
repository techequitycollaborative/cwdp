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
  container: {
    paddingBottom: 30,
    [mediaQueries(breakpoints.mobile)]: {
      paddingBottom: 0
    }
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: '5%',
    [mediaQueries(breakpoints.mobile)]: {
      flexDirection: 'column-reverse',
      flex: 1,
      paddingBottom: 0
    },
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row'
  },
  techEquityLogo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginRight: '20px'
  },
  logo: {
    [mediaQueries(breakpoints.tablet)]: {
      width: '95%',
    },
    [mediaQueries(breakpoints.mobile)]: {
      margin: '20px 0px',
      width: '80%',
    }
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    lineHeight: 'normal',
    fontSize: 32,
    margin: 0,
    alignSelf: 'center',
    [mediaQueries(breakpoints.tablet)]: {
      fontSize: 28,
      paddingRight: 10
    },
    [mediaQueries(breakpoints.mobile)]: {
      fontSize: 22,
    }
  },
  badges: {
    paddingRight: 15,
  },
};

const LandingSection = () => (
  <div css={styles.container}>
    <div css={styles.headerContainer}>
      <div css={styles.headerLeft}>
        <img css={styles.badges} src={badgesSvg} alt="Badges" />
        <h1 css={[themeStyles.text.headline, styles.title]}>{landingSectionCopy.header}</h1>
      </div>
      <a css={styles.logoLink} href="https://techequity.us" target="_blank" rel="noopener noreferrer">
        <img css={styles.techEquityLogo} src={techEquityLogoSvg} alt="TEC Logo" />
      </a>
    </div>
    <VerticalSplit
      left={(
        <Blurb
          headline={landingSectionCopy.headline}
          description={landingSectionCopy.description}
          button={{ text: landingSectionCopy.button.label, url: landingSectionCopy.button.url }}
          textColumn
        />
      )}
      right={(
        <Video
          videoId={landingSectionCopy.video.id}
          coverImg={heroImg}
          title={landingSectionCopy.video.title}
        />
      )}
      reverseOnMobile
    />
  </div>
);

export default LandingSection;
