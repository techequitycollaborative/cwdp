/** @jsxImportSource @emotion/react */
import {
  landingSectionCopy,
  techEquityLogoSvg,
  badgesSvg,
  landingSvg
} from 'assets';
import { breakpoints, mediaQueries, themeStyles } from 'theme';
import { VerticalSplit, Blurb } from 'components';

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
  disparityImage: {
    width: '100%',
  },
  contentRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
};

const right = () => (
  <div css={styles.contentRight}>
    <img css={styles.disparityImage} src={landingSvg} alt="Disparity" />
  </div>
);

const LandingSection = () => (
  <>
    <div css={styles.headerContainer}>
      <div css={styles.headerLeft}>
        <img css={styles.badges} src={badgesSvg} alt="Badges" />
        <h1 css={[themeStyles.text.headline, styles.title]}>{landingSectionCopy.header}</h1>
      </div>
      <img css={styles.logo} src={techEquityLogoSvg} alt="TEC Logo" />
    </div>
    <VerticalSplit
      left={(
        <Blurb
          headline={landingSectionCopy.headline}
          description={landingSectionCopy.description}
          button={{ text: landingSectionCopy.button.label, url: landingSectionCopy.button.url }}
        />
      )}
      right={right()}
    />
  </>
);

export default LandingSection;
