/** @jsxImportSource @emotion/react */
import {
  footerSectionCopy,
  facebookLogoSvg,
  instagramLogoSvg,
  twitterLogoSvg,
  linkedinLogoSvg,
  techEquityLogoSquareSvg
} from 'assets';
import { Button } from 'components';
import { themeStyles } from 'theme';

const styles = {
  footerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 30
  },
  techEquityLogo: {
    height: 200,
    width: 200
  },
  topBannerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomBannerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20
  },
  logo: {
    height: 30,
    width: 30,
    paddingRight: 30,
    paddingBottom: 10,
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
    paddingRight: 8
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
    margin: '5px 0px'
  },
  socialDescription: {
    margin: 0,
    fontWeight: 300,
    fontSize: 14
  }
};

const renderSocial = (url, svg, altText) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img key={altText} css={styles.logo} src={svg} alt={altText} />
  </a>
);

const renderClickabelText = (link, textStyle) => (
  <a css={styles.link} href={link.url} target="_blank" rel="noopener noreferrer">
    <p css={textStyle}>{link.label}</p>
  </a>
);

const renderLinkColumn = (links) => (
  <div>
    <hr css={styles.horizontalDivider} />
    {links.map((link) => (
      renderClickabelText(link, styles.columnLinkText)
    ))}
  </div>
);

const renderVerticalDivider = () => (
  <hr css={styles.verticalDivider} />
);

const FooterSection = () => (
  <div css={styles.footerContainer}>
    <div css={styles.topBannerContainer}>
      <img css={styles.techEquityLogo} src={techEquityLogoSquareSvg} alt="TEC Logo" />
      {renderLinkColumn(footerSectionCopy.linkColumns.firstColumn)}
      {renderLinkColumn(footerSectionCopy.linkColumns.secondColumn)}
      <div>
        {renderSocial(footerSectionCopy.socials.facebook, facebookLogoSvg, 'facebook')}
        {renderSocial(footerSectionCopy.socials.instagram, instagramLogoSvg, 'instagram')}
        {renderSocial(footerSectionCopy.socials.twitter, twitterLogoSvg, 'twitter')}
        {renderSocial(footerSectionCopy.socials.linkedin, linkedinLogoSvg, 'linkedin')}
        <p css={styles.socialDescription}>{footerSectionCopy.socialDescription}</p>
        <Button
          url={footerSectionCopy.button.url}
          text={footerSectionCopy.button.label}
          color={themeStyles.colors.brandNavy}
        />
      </div>
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

export default FooterSection;
