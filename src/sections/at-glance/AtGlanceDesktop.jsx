/** @jsxImportSource @emotion/react */
import {
  atGlanceCopy,
  contractorBadgeSvg,
  contractorRaceSvg,
  contractorGenderSvg,
  fullTimeEmployeeBadge,
  fullTimeRaceSvg,
  fullTimeGenderSvg,
  fullTimeLadderImg,
  contractorLadderImg
} from 'assets';
import { Quote, VerticalSplit } from 'components';
import { breakpoints, mediaQueries, themeStyles } from 'theme';

const styles = {
  sectionContainer: {
    marginBottom: '60px'
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: '80%',
    margin: 'auto',
  },
  badge: {
    height: 100,
    margin: 25,
    [mediaQueries(breakpoints.mobile)]: {
      height: 80
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  benefits: {
    padding: 20,
    [mediaQueries(breakpoints.mobile)]: {
      margin: '0px 3%',
    }
  },
  paneHeaderText: {
    fontSize: 32,
    lineHeight: 'normal',
    textAlign: 'center',
    [mediaQueries(breakpoints.mobile)]: {
      fontSize: 25,
    }
  },
  benefit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  benefitText: {
    margin: '6px 12px',
  },
  salaryText: {
    fontWeight: 600,
    fontSize: 56,
    lineHeight: '104%',
    color: '#112353',
    margin: '0px 0px'
  },
  subHeading: {
    ...themeStyles.text.subHeading,
    margin: '10px 0px',
    textAlign: 'center'
  },
  subHeadingSubTitle: {
    fontWeight: 400,
    fontSize: '.8em',
    marginLeft: 4
  },
  salaryDescriptionText: {
    fontSize: '1.2em',
    margin: 0,
    marginTop: 10
  },
  demographicsBreakdown: {
    margin: '20px 10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  demographicsBreakdownTitle: {
    color: 'black',
    alignSelf: 'center',
    marginBottom: 10,
    textAlign: 'center'
  },
  demographicsSubtitle: {
    color: '#112353',
    textAlign: 'center',
    maxWidth: '400px',
    margin: '16px auto'
  },
  mobilityDescription: {
    fontSize: '1.7em',
    padding: '0px 30px',
    wordSpacing: '10em',
    width: '100%'
  },
  mobilityContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingRight: '5%',
    margin: '40px 0px'
  },
  ladderImg: {
    maxHeight: 500,
    width: '100%',
    objectFit: 'contain'
  },
  hiddenZero: {
    visibility: 'hidden'
  },
  breakdownImg: {
    width: '100%',
    objectFit: 'contain',
    marginLeft: '10%'
  },
  dividerHack: {
    marginBottom: 60
  }
};

const visualAssets = {
  contractor: {
    badge: contractorBadgeSvg,
    race: contractorRaceSvg,
    gender: contractorGenderSvg,
    ladder: contractorLadderImg
  },
  fullTime: {
    badge: fullTimeEmployeeBadge,
    race: fullTimeRaceSvg,
    gender: fullTimeGenderSvg,
    ladder: fullTimeLadderImg
  }
};

const infoPane = (copy, color, assets) => (
  <div css={styles.container}>
    <div css={styles.header}>
      <img css={styles.badge} src={assets.badge} alt="Worker Badge" />
      <h2 css={[themeStyles.text.headline, styles.paneHeaderText]}>{copy.header}</h2>
      <p css={styles.salaryText}>{copy.pay.salary}</p>
      <p css={styles.subHeading}>{copy.pay.type}</p>
      <p
        css={[themeStyles.text.description, styles.salaryDescriptionText]}
      >
        {copy.pay.description}
      </p>
    </div>
    <div css={styles.demographicsBreakdown}>
      <p css={styles.subHeading}>{atGlanceCopy.contractor.raceTitle}</p>
      <img css={styles.breakdownImg} src={assets.race} alt="Race breakdown" />
    </div>
    <div css={styles.demographicsBreakdown}>
      <p css={styles.subHeading}>{atGlanceCopy.contractor.genderTitle}</p>
      <img css={styles.breakdownImg} src={assets.gender} alt="Gender breakdown" />
    </div>
    <div>
      <p css={styles.demographicsSubtitle}>{copy.demographicsSubtitle}</p>
    </div>
    <div css={styles.benefits}>
      <p css={styles.subHeading}>
        {copy.benefits.title}
        <span css={styles.subHeadingSubTitle}>{copy.benefits.subTitle}</span>
      </p>
      {copy.benefits.items.map((benefit) => (
        <div key={benefit[1]} css={styles.benefit}>
          <p css={[themeStyles.text.subHeading, { paddingRight: 10, color }, styles.benefitText]}>
            {(benefit[0] === 0 ? <span aria-hidden css={styles.hiddenZero}>10</span> : null)}
            <span>{`${benefit[0]}%`}</span>
          </p>
          <p
            css={[themeStyles.text.description, { fontSize: 22 }, styles.benefitText]}
            key={benefit}
          >
            {benefit[1]}
          </p>
        </div>
      ))}
    </div>
    <div css={styles.mobilityContainer}>
      <p css={[themeStyles.text.headline, styles.mobilityDescription]}>
        {copy.mobilityDescription}
      </p>
      <img css={styles.ladderImg} src={assets.ladder} alt="Employee Ladder" />
    </div>
  </div>
);

const AtGlanceDesktop = () => (
  <div css={styles.sectionContainer}>
    <div css={styles.dividerHack}>
      <VerticalSplit
        left={infoPane(
          atGlanceCopy.contractor,
          themeStyles.colors.callToActionRed,
          visualAssets.contractor
        )}
        right={infoPane(
          atGlanceCopy.fullTime,
          themeStyles.colors.brandBlue,
          visualAssets.fullTime
        )}
        hasDivider
      />
    </div>
    <Quote author={atGlanceCopy.quote.author} text={atGlanceCopy.quote.text} background="dark" />
  </div>
);

export default AtGlanceDesktop;
