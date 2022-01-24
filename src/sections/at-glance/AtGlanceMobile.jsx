/** @jsxImportSource @emotion/react */
import {
  atGlanceCopy,
  contractorBadgeSvg,
  contractorRaceSvg,
  fullTimeEmployeeBadge,
  fullTimeRaceSvg,
  fullTimeLadderImg,
  contractorLadderImg,
  contractorGenderSvg,
  fullTimeGenderSvg
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
  },
  contractorPercentText: {
    fontWeight: 600,
    fontSize: 24,
    ...benefitSharedPadding,
    color: themeStyles.colors.callToActionRed
  },
  fullTimePercentText: {
    fontWeight: 600,
    fontSize: 24,
    ...benefitSharedPadding,
    color: themeStyles.colors.brandBlue
  },
  benefitBadge: {
    maxHeight: 60,
    ...benefitSharedPadding,
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

const renderSalary = (badgeSvg, salary, description) => (
  <div css={styles.salaryContainer}>
    <img src={badgeSvg} alt="worker badge" />
    <p css={themeStyles.text.subHeading}>{salary}</p>
    <p css={[themeStyles.text.description, styles.salaryDescriptionText]}>
      {description}
    </p>
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
    <p css={[styles.headerText, styles.salarySubtitle]}>{atGlanceCopy.contractor.pay.type}</p>
    <div css={styles.salariesContainer}>
      {renderSalary(
        contractorBadgeSvg,
        atGlanceCopy.contractor.pay.salary,
        atGlanceCopy.contractor.pay.description
      )}
      {renderSalary(
        fullTimeEmployeeBadge,
        atGlanceCopy.fullTime.pay.salary,
        atGlanceCopy.fullTime.pay.description
      )}
    </div>
    <hr css={styles.divider} />
    {renderBreakdown(
      atGlanceCopy.contractor.raceTitle,
      { header: atGlanceCopy.contractor.header, svg: contractorRaceSvg },
      { header: atGlanceCopy.fullTime.header, svg: fullTimeRaceSvg }
    )}
    <hr css={styles.divider} />
    {renderBreakdown(
      atGlanceCopy.contractor.genderTitle,
      { header: atGlanceCopy.contractor.header, svg: contractorGenderSvg },
      { header: atGlanceCopy.fullTime.header, svg: fullTimeGenderSvg }
    )}
    <hr css={styles.divider} />
    <div css={styles.benefits}>

      <div css={styles.allBenefitRows}>
        <div css={styles.benefitRow}>
          <img css={styles.benefitBadge} src={contractorBadgeSvg} alt="worker badge" />
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
