/** @jsxImportSource @emotion/react */
import {
  footerSectionCopy,
  facebookLogoSvg,
  instagramLogoSvg,
  twitterLogoSvg,
  linkedinLogoSvg,
  techEquityLogoSvg
} from 'assets';
import { useViewPort } from 'hooks';
import { breakpoints, mediaQueries, themeStyles } from 'theme';

import { Button } from './Button';

const styles = {
  footerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 30
  },
  techEquityLogo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginLeft: '20px'
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'center'
  },
  topBannerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [mediaQueries(breakpoints.tablet)]: {
      flexDirection: 'column',
      alignItems: 'stretch'
    },
  },
  linkColumnContainer: {
    [mediaQueries(breakpoints.tablet)]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 15,
    },
  },
  bottomBannerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20
  },
  socialLogo: {
    height: 30,
    width: 30,
    paddingRight: 30,
    paddingBottom: 10,
    [mediaQueries(breakpoints.tablet)]: {
      padding: 0,
    },
  },
  link: {
    textDecoration: 'none',
  },
  columnLinkText: {
    color: themeStyles.colors.brandNavy,
    fontSize: 20,
    lineHeight: '29px',
    fontWeight: 700,
    margin: 0
  },
  bottomBannerText: {
    color: themeStyles.colors.blueGray,
    fontSize: 17,
    lineHeight: '21px',
    margin: 0,
    paddingRight: 8,
    textAlign: 'center'
  },
  bottomBannerTextBold: {
    fontWeight: 700,
    color: themeStyles.colors.darkBlueGray
  },
  verticalDivider: {
    borderLeft: `1px solid ${themeStyles.colors.blueGray}`,
    margin: 0,
    marginRight: 8,
  },
  horizontalDivider: {
    width: '20%',
    borderColor: themeStyles.colors.brandNavy,
    margin: '5px 0px',
    [mediaQueries(breakpoints.mobile)]: {
      marginBottom: 10
    },
  },
  socialDescription: {
    margin: 0,
    fontWeight: 300,
    fontSize: 14
  },
  socialsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  tabletLayoutRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  allSocialIcons: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    [mediaQueries(breakpoints.mobile)]: {
      marginTop: 10
    },
  }
};

const renderSocial = (url, svg, altText) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img key={altText} css={styles.socialLogo} src={svg} alt={altText} />
  </a>
);

const renderClickabelText = (link, textStyle) => (
  <a key={link.label} css={styles.link} href={link.url} target="_blank" rel="noopener noreferrer">
    <p css={textStyle}>{link.label}</p>
  </a>
);

const renderLinkColumn = (links) => (
  <div css={styles.linkColumnContainer}>
    <hr css={styles.horizontalDivider} />
    {links.map((link) => (
      renderClickabelText(link, styles.columnLinkText)
    ))}
  </div>
);

const renderVerticalDivider = () => (
  <hr css={styles.verticalDivider} />
);

const renderAllSocials = () => (
  <div css={styles.socialsContainer}>
    <div css={styles.allSocialIcons}>
      {renderSocial(footerSectionCopy.socials.facebook, facebookLogoSvg, 'facebook')}
      {renderSocial(footerSectionCopy.socials.instagram, instagramLogoSvg, 'instagram')}
      {renderSocial(footerSectionCopy.socials.twitter, twitterLogoSvg, 'twitter')}
      {renderSocial(footerSectionCopy.socials.linkedin, linkedinLogoSvg, 'linkedin')}
    </div>
    <p css={styles.socialDescription}>{footerSectionCopy.socialDescription}</p>
    <Button
      url={footerSectionCopy.button.url}
      text={footerSectionCopy.button.label}
      color={themeStyles.colors.brandNavy}
    />
  </div>
);

const renderMobileAndDesktop = () => (
  <>
    <a css={styles.logoLink} href="https://techequity.us" target="_blank" rel="noopener noreferrer">
      <img css={styles.techEquityLogo} src={techEquityLogoSvg} alt="TEC Logo" />
    </a>
    {renderLinkColumn(footerSectionCopy.linkColumns.firstColumn)}
    {renderLinkColumn(footerSectionCopy.linkColumns.secondColumn)}
    {renderAllSocials()}
  </>
);

const renderTablet = () => (
  <div>
    <div css={styles.tabletLayoutRow}>
      <img css={styles.techEquityLogo} src={techEquityLogoSvg} alt="TEC Logo" />
      {renderAllSocials()}
    </div>
    <div css={styles.tabletLayoutRow}>
      {renderLinkColumn(footerSectionCopy.linkColumns.firstColumn)}
      {renderLinkColumn(footerSectionCopy.linkColumns.secondColumn)}
    </div>
  </div>
);

const Footer = () => {
  const { width } = useViewPort();
  return (
    <div css={styles.footerContainer}>
      <div css={styles.topBannerContainer}>
        {width >= breakpoints.mobile && width < breakpoints.desktop
          ? renderTablet() : renderMobileAndDesktop()}
      </div>
      <div css={styles.bottomBannerContainer}>
        {renderClickabelText(
          footerSectionCopy.bottomBanner.privacyPolicy,
          { ...styles.bottomBannerText, ...styles.bottomBannerTextBold }
        )}
        {renderVerticalDivider()}
        {renderClickabelText(
          footerSectionCopy.bottomBanner.termsOfUse,
          { ...styles.bottomBannerText, ...styles.bottomBannerTextBold }
        )}
        {renderVerticalDivider()}
        {renderClickabelText(footerSectionCopy.bottomBanner.telephone, styles.bottomBannerText)}
        {renderVerticalDivider()}
        {renderClickabelText(footerSectionCopy.bottomBanner.email, styles.bottomBannerText)}
        <p css={styles.bottomBannerText}>{footerSectionCopy.bottomBanner.copyright.label}</p>
      </div>
    </div>
  );
};

export default Footer;
