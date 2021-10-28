/** @jsxImportSource @emotion/react */
import {
  footerSectionCopy,
  facebookLogoSvg,
  instagramLogoSvg,
  twitterLogoSvg,
  linkedinLogoSvg
} from 'assets';
import { ScrollSnapSection } from 'components';

const styles = {
  footerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    margin: '0px -100px',
  },
  footerSplit: {
    padding: '0px 30px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  conslusionContainer: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  socialsContainer: {
    padding: '20px 0px',
    display: 'flex',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'flex-start',
  },
  logo: {
    height: 20,
    width: 20,
    paddingRight: 30
  }
};

const renderSocial = (url, svg, altText) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img key={altText} css={styles.logo} src={svg} alt={altText} />
  </a>
);

const FooterSection = () => (
  <ScrollSnapSection>
    <div css={styles.conslusionContainer}>
      <h1>{footerSectionCopy.header}</h1>
      <p>{footerSectionCopy.description}</p>
    </div>
    <div css={styles.footerContainer}>
      <div css={styles.footerSplit}>
        <h2>{footerSectionCopy.leftSubHeader}</h2>
        <div>
          <input placeholder={footerSectionCopy.input.placeholder} />
          <button type="button">{footerSectionCopy.input.buttonText}</button>
        </div>
        <div css={styles.socialsContainer}>
          {renderSocial(footerSectionCopy.socials.facebook, facebookLogoSvg, 'facebook')}
          {renderSocial(footerSectionCopy.socials.instagram, instagramLogoSvg, 'instagram')}
          {renderSocial(footerSectionCopy.socials.twitter, twitterLogoSvg, 'twitter')}
          {renderSocial(footerSectionCopy.socials.linkedin, linkedinLogoSvg, 'linkedin')}
        </div>
      </div>
      <div css={styles.footerSplit}>
        <h2>{footerSectionCopy.rightSubHeader}</h2>
        {footerSectionCopy.links.map((link) => (
          <a key={`social-link-${link.label}`} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
        ))}
      </div>
    </div>
  </ScrollSnapSection>
);

export default FooterSection;
