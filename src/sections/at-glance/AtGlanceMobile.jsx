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
import { Quote } from 'components';
import { breakpoints, mediaQueries, themeStyles } from 'theme';

const benefitSharedPadding = {
  paddingLeft: 20,
  paddingRight: 40
};

const styles = {
  container: {
    margin: '0px 30px',
    marginBottom: 50
  },
  salarySubtitle: {
    color: '#112353',
    fontWeight: 600,
    fontSize: 24,
    marginTop: 40,
    marginBottom: 30
  },
  salariesContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  salaryContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  salaryDescriptionText: {
    textAlign: 'center',
    padding: '0px 30px',
  },
  headerText: {
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    padding: '0px 20px'
  },
  breakdown: {
    padding: '0px 5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  breakdownSvg: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 60,
    alignSelf: 'center',
    [mediaQueries(breakpoints.tablet)]: {
      width: '80%',
    },
    [mediaQueries(breakpoints.mobile)]: {
      width: '100%',
    }
  },
  breakdownTitle: {
    textAlign: 'center'
  },
  breakdownTitles: {
    color: '#112353',
    fontWeight: 600,
    fontSize: 20,
    margin: '5px 0px',
  },
  benefitRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: '8px 0'
  },
  wagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wageBreakdown: {
    textAlign: 'center',
    margin: '0 16px'
  },
  wageImg: {
    maxWidth: 120
  },
  comparisonTextWrapper: {
    height: '2em',
    marginBottom: '1.6em'
  },
  comparisonText: {
    textAlign: 'center',
    margin: '0'
  },
  boldNumber: {
    fontSize: '1.6em',
    fontWeight: 600
  },
  badgesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  raceColumn: {
    textAlign: 'center',
    margin: '0 16px',
    maxWidth: '50%'
  },
  raceBadgesImg: {
    maxHeight: 40,
    display: 'inline-block',
    marginTop: 30
  },
  contractorPercentText: {
    fontWeight: 600,
    maxWidth: 42,
    fontSize: 24,
    ...benefitSharedPadding,
    color: themeStyles.colors.callToActionRed,
    paddingRight: 0,
    margin: 0
  },
  fullTimePercentText: {
    fontWeight: 600,
    fontSize: 24,
    ...benefitSharedPadding,
    color: themeStyles.colors.brandBlue,
    margin: 0
  },
  benefitsText: {
    margin: 0
  },
  benefitBadge: {
    maxHeight: 60,
    ...benefitSharedPadding,
  },
  contractorBadge: {
    paddingRight: 0
  },
  mobilityText: {
    textAlign: 'center',
    padding: '0px 20px'
  },
  ladderImg: {
    maxHeight: 200,
  },
  mobilityContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  mobilityColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    width: '80%',
    margin: '40px auto',
    border: '1px solid #E5E5E5',
  },
  hiddenZero: {
    visibility: 'hidden'
  },
  benefits: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  allBenefitRows: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
};

const renderBenefitRow = (contractorPercent, fullTimePercent, benefit) => (
  <div key={benefit} css={styles.benefitRow}>
    <p css={styles.contractorPercentText}>{`${contractorPercent}%`}</p>
    <p css={styles.fullTimePercentText}>
      {(fullTimePercent === 0 ? <span aria-hidden css={styles.hiddenZero}>10</span> : null)}
      <span>{`${fullTimePercent}%`}</span>
    </p>
    <p css={[styles.benefitsText, themeStyles.text.description]}>{benefit}</p>
  </div>
);

const renderSalary = (wageImg, copy) => (
  <div css={styles.wageBreakdown}>
    <img css={styles.wageImg} src={wageImg} alt="Wages" />
    <div css={styles.comparisonTextWrapper}>
      <p css={styles.comparisonText}>
        {copy.wagesText[0]}
        <span css={styles.boldNumber}>{copy.wagesText[1]}</span>
        {copy.wagesText[2]}
      </p>
    </div>
  </div>
);

const renderRaceBadges = (badgeBlack, badgeLatinx, badgeNative, copy) => (
  <div css={styles.raceColumn}>
    <img css={styles.raceBadgesImg} src={badgeBlack} alt="Badges 1" />
    <div css={styles.comparisonTextWrapper}>
      <p css={styles.comparisonText}>
        {copy.race.black[0]}
        <span css={styles.boldNumber}>{copy.race.black[1]}</span>
        {copy.race.black[2]}
      </p>
    </div>
    <img css={styles.raceBadgesImg} src={badgeLatinx} alt="Badges 2" />
    <div css={styles.comparisonTextWrapper}>
      <p css={styles.comparisonText}>
        {copy.race.latinx[0]}
        <span css={styles.boldNumber}>{copy.race.latinx[1]}</span>
        {copy.race.latinx[2]}
      </p>
    </div>
    <img css={styles.raceBadgesImg} src={badgeNative} alt="Badges 3" />
    <div css={styles.comparisonTextWrapper}>
      <p css={styles.comparisonText}>
        {copy.race.native[0]}
        <span css={styles.boldNumber}>{copy.race.native[1]}</span>
        {copy.race.native[2]}
      </p>
    </div>
  </div>
);

const renderBreakdown = (title, contractor, fullTime) => (
  <div css={styles.breakdown}>
    <p css={[themeStyles.text.subHeading, styles.breakdownTitle]}>
      {title}
    </p>
    <p css={styles.breakdownTitles}>
      {contractor.header}
    </p>
    <img css={styles.breakdownSvg} src={contractor.svg} alt="Breakdown" />
    <p css={styles.breakdownTitles}>
      {fullTime.header}
    </p>
    <img css={styles.breakdownSvg} src={fullTime.svg} alt="Breakdown" />
  </div>
);

const renderMobilityColumn = (img, description) => (
  <div css={styles.mobilityColumn}>
    <div>
      <img css={styles.ladderImg} src={img} alt="Employee Ladder" />
    </div>
    <p css={[styles.breakdownTitles, styles.mobilityText]}>
      {description}
    </p>
  </div>
);

const AtGlanceMobile = () => (
  <div css={styles.container}>
    <p css={[themeStyles.text.headline, styles.headerText]}>{`${atGlanceCopy.contractor.header} vs ${atGlanceCopy.fullTime.header}`}</p>
    <p css={[styles.headerText, styles.salarySubtitle]}>{atGlanceCopy.wageTitle}</p>
    <div css={styles.wagesContainer}>
      {renderSalary(
        contractorWageImg,
        atGlanceCopy.contractor
      )}
      {renderSalary(
        fullTimeWageImg,
        atGlanceCopy.fullTime
      )}
    </div>
    <hr css={styles.divider} />
    <p css={[styles.headerText, styles.salarySubtitle]}>{atGlanceCopy.raceTitle}</p>
    <div css={styles.badgesContainer}>
      {renderRaceBadges(
        contractorBadgesSmSvg,
        contractorBadgesMdSvg,
        contractorBadgesLgSvg,
        atGlanceCopy.contractor
      )}
      {renderRaceBadges(
        fullTimeEmployeeBadge,
        fullTimeEmployeeBadge,
        fullTimeEmployeeBadge,
        atGlanceCopy.fullTime
      )}
    </div>
    <hr css={styles.divider} />
    <p css={[styles.headerText, styles.salarySubtitle]}>{atGlanceCopy.genderTitle}</p>
    {renderBreakdown(
      atGlanceCopy.contractor.genderTitle,
      { header: atGlanceCopy.contractor.header, svg: contractorGenderSvg },
      { header: atGlanceCopy.fullTime.header, svg: fullTimeGenderSvg }
    )}
    <hr css={styles.divider} />
    <div css={styles.benefits}>

      <div css={styles.allBenefitRows}>
        <div css={styles.benefitRow}>
          <img css={[styles.benefitBadge, styles.contractorBadge]} src={contractorBadgeSvg} alt="worker badge" />
          <img css={styles.benefitBadge} src={fullTimeEmployeeBadge} alt="worker badge" />
          <p css={[themeStyles.text.subHeading, { paddingLeft: '2%' }]}>
            {atGlanceCopy.contractor.benefits.title}
          </p>
        </div>
        {atGlanceCopy.contractor.benefits.items.map((item, index) => (
          renderBenefitRow(item[0], atGlanceCopy.fullTime.benefits.items[index][0], item[1])
        ))}
      </div>

    </div>
    <hr css={styles.divider} />
    <div css={styles.mobilityContainer}>
      {renderMobilityColumn(contractorLadderImg, atGlanceCopy.contractor.mobilityDescription)}
      {renderMobilityColumn(fullTimeLadderImg, atGlanceCopy.fullTime.mobilityDescription)}
    </div>
    <hr css={styles.divider} />
    <Quote author={atGlanceCopy.quote.author} text={atGlanceCopy.quote.text} background="dark" />
  </div>
);

export default AtGlanceMobile;
