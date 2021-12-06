/** @jsxImportSource @emotion/react */
import {
  landingSectionCopy,
  tecLogoSvg,
  badgesSvg,
  landingSvg
} from 'assets';
import { themeStyles } from 'theme';
import { ScrollSnapSection, VerticalSplit } from 'components';

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
  button: {
    padding: '16px 38px',
    borderRadius: 50,
    background: '#CC3333',
    border: '1px solid #CC3333',
    color: '#FFFFFF',
    fontSize: 20,
    margin: '20px 0',
    fontWeight: 700
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

const left = () => (
  <div>
    <h1 css={[themeStyles.text.headline]}>{landingSectionCopy.headline}</h1>
    <p css={themeStyles.text.description}>{landingSectionCopy.description}</p>
    <button css={styles.button} type="button">{landingSectionCopy.button}</button>
  </div>
);

const right = () => (
  <div css={styles.contentRight}>
    <img css={styles.disparityImage} src={landingSvg} alt="Disparity" />
  </div>
);

const LandingSection = () => (
  <ScrollSnapSection>
    <div css={styles.headerContainer}>
      <div css={styles.headerLeft}>
        <img css={[styles.logos, styles.badges]} src={badgesSvg} alt="Badges" />
        <h1 css={[themeStyles.text.headline, styles.title]}>{landingSectionCopy.header}</h1>
      </div>
      <img css={styles.logos} src={tecLogoSvg} alt="TEC Logo" />
    </div>
    <VerticalSplit
      left={left()}
      right={right()}
    />
  </ScrollSnapSection>
);

export default LandingSection;
