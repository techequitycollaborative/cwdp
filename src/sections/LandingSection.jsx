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
      <a css={styles.logoLink} href="https://techequitycollaborative.org" target="_blank" rel="noopener noreferrer">
        <img css={styles.logo} src={techEquityLogoSvg} alt="TEC Logo" />
      </a>
    </div>
    <VerticalSplit
      left={(
        <Blurb
          headline={landingSectionCopy.headline}
          description={landingSectionCopy.description}
          scrollButton={{ text: landingSectionCopy.button.label, section: 4 }}
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
