/** @jsxImportSource @emotion/react */
import {
  landingSectionCopy,
  techEquityLogoSvg,
  badgesSvg,
  landingSvg
} from 'assets';
import { themeStyles } from 'theme';
import {
  ContentSection,
  VerticalSplit,
  Blurb
} from 'components';

const styles = {
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row'
  },
  logos: {
    height: 70,
  },
  title: {
    fontSize: 32,
    margin: 0
  },
  badges: {
    paddingRight: 15
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
  <ContentSection>
    <div css={styles.headerContainer}>
      <div css={styles.headerLeft}>
        <img css={[styles.logos, styles.badges]} src={badgesSvg} alt="Badges" />
        <h1 css={[themeStyles.text.headline, styles.title]}>{landingSectionCopy.header}</h1>
      </div>
      <img css={styles.logos} src={techEquityLogoSvg} alt="TEC Logo" />
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
  </ContentSection>
);

export default LandingSection;
