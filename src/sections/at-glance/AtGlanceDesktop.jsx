/** @jsxImportSource @emotion/react */
import {
  atGlanceCopy,
  contractorBadgeSvg,
  contractorBadgesSmSvg,
  contractorBadgesMdSvg,
  contractorBadgesLgSvg,
  contractorWageImg,
  contractorGenderSvg,
  fullTimeEmployeeBadge,
  fullTimeWageImg,
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
    textAlign: 'center',
    [mediaQueries(breakpoints.mobile)]: {
      margin: '0px 3%',
    }
  },
  paneHeaderText: {
    fontSize: 32,
    padding: 0,
    marginTop: 0,
    color: '#112353',
    lineHeight: 'normal',
    textAlign: 'center',
    [mediaQueries(breakpoints.mobile)]: {
      fontSize: 25,
    }
  },
  benefitWrapper: {
    display: 'inline-block',
    margin: 'auto'
  },
  benefit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 30
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
    margin: '10px 0px 20px 0',
    textAlign: 'center',
    fontSize: '2.6em'
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
    fontSize: '2em',
    padding: 0,
    wordSpacing: '5em',
    width: '5em'
  },
  mobilityContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '5%',
    margin: '40px 0px'
  },
  ladderImg: {
    maxHeight: 500,
    objectFit: 'contain'
  },
  hiddenZero: {
    visibility: 'hidden'
  },
  breakdownImg: {
    width: '120%',
    objectFit: 'contain'
  },
  wageImg: {
    objectFit: 'contain',
    maxWidth: 180,
    margin: 'auto'
  },
  dividerHack: {
    marginBottom: 60
  },
  raceBadgesImg: {
    maxHeight: 90,
    display: 'inline-block',
    marginTop: 30
  },
  comparisonSubTitle: {
    marginLeft: 6,
    fontWeight: 400,
    fontSize: '.6em'
  },
  comparisonTextWrapper: {
    height: '2em',
    marginBottom: '1.6em'
  },
  comparisonText: {
    textAlign: 'center',
    fontSize: '1.4em',
    margin: '0'
  },
  boldNumber: {
    fontSize: '1.6em',
    fontWeight: 600
  },
  divider: {
    width: '80%',
    margin: '20px auto',
    border: '1px solid #E5E5E5',
  },
};

const visualAssets = {
  contractor: {
    badge: contractorBadgeSvg,
    wage: contractorWageImg,
    race1: contractorBadgesSmSvg,
    race2: contractorBadgesMdSvg,
    race3: contractorBadgesLgSvg,
    gender: contractorGenderSvg,
    ladder: contractorLadderImg
  },
  fullTime: {
    badge: fullTimeEmployeeBadge,
    wage: fullTimeWageImg,
    race1: fullTimeEmployeeBadge,
    race2: fullTimeEmployeeBadge,
    race3: fullTimeEmployeeBadge,
    gender: fullTimeGenderSvg,
    ladder: fullTimeLadderImg
  }
};

const infoPane = (copy, color, assets) => (
  <div css={styles.container}>
    <div css={styles.demographicsBreakdown}>
      <p css={styles.subHeading}>
        {atGlanceCopy.wageTitle}
        <span css={styles.comparisonSubTitle}>
          {copy.comparisonSubTitle}
        </span>
      </p>
      <img css={styles.wageImg} src={assets.wage} alt="Wages" />
      <div css={styles.comparisonTextWrapper}>
        <p css={styles.comparisonText}>
          {copy.wagesText[0]}
          <span css={styles.boldNumber}>{copy.wagesText[1]}</span>
          {copy.wagesText[2]}
        </p>
      </div>
    </div>
    <div css={styles.demographicsBreakdown}>
      <p css={styles.subHeading}>
        {atGlanceCopy.raceTitle}
        <span css={styles.comparisonSubTitle}>
          {copy.comparisonSubTitle}
        </span>
      </p>
      <img css={styles.raceBadgesImg} src={assets.race1} alt="Badges 1" />
      <div css={styles.comparisonTextWrapper}>
        <p css={styles.comparisonText}>
          {copy.race.black[0]}
          <span css={styles.boldNumber}>{copy.race.black[1]}</span>
          {copy.race.black[2]}
        </p>
      </div>
      <img css={styles.raceBadgesImg} src={assets.race2} alt="Badges 2" />
      <div css={styles.comparisonTextWrapper}>
        <p css={styles.comparisonText}>
          {copy.race.latinx[0]}
          <span css={styles.boldNumber}>{copy.race.latinx[1]}</span>
          {copy.race.latinx[2]}
        </p>
      </div>
      <img css={styles.raceBadgesImg} src={assets.race3} alt="Badges 3" />
      <div css={styles.comparisonTextWrapper}>
        <p css={styles.comparisonText}>
          {copy.race.native[0]}
          <span css={styles.boldNumber}>{copy.race.native[1]}</span>
          {copy.race.native[2]}
        </p>
      </div>
    </div>
    <div css={styles.demographicsBreakdown}>
      <p css={styles.subHeading}>
        {atGlanceCopy.genderTitle}
        <span css={styles.comparisonSubTitle}>
          {copy.comparisonSubTitle}
        </span>
      </p>
      <img css={styles.breakdownImg} src={assets.gender} alt="Gender breakdown" />
    </div>
    <div css={styles.benefits}>
      <p css={styles.subHeading}>
        {copy.benefits.title}
        <span css={styles.comparisonSubTitle}>
          {copy.comparisonSubTitle}
        </span>
      </p>
      <div css={styles.benefitWrapper}>
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
        left={(
          <div css={styles.header}>
            <img css={styles.badge} src={visualAssets.contractor.badge} alt="Worker Badge" />
            <p css={styles.paneHeaderText}>{atGlanceCopy.contractor.header}</p>
          </div>
        )}
        right={(
          <div css={styles.header}>
            <img css={styles.badge} src={visualAssets.fullTime.badge} alt="Worker Badge" />
            <p css={styles.paneHeaderText}>{atGlanceCopy.fullTime.header}</p>
          </div>
        )}
      />
      <hr css={styles.divider} />
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
      />
    </div>
    <Quote fullWidth author={atGlanceCopy.quote.author} text={atGlanceCopy.quote.text} background="dark" />
  </div>
);

export default AtGlanceDesktop;
