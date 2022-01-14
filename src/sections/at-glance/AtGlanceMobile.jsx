/** @jsxImportSource @emotion/react */
import {
  atGlanceCopy,
  contractorBadgeSvg,
  contractorRaceSvg,
  fullTimeEmployeeBadge,
  fullTimeRaceSvg,
  fullTimeLadderImg,
  contractorLadderImg,
  bipocHandSvg,
  whiteHandSvg
} from 'assets';
import { Quote } from 'components';
import { themeStyles } from 'theme';

const benefitSharedPadding = {
  paddingLeft: 20,
  paddingRight: 40
};

const styles = {
  container: {
    margin: '0px 30px',
    marginBottom: 60
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
  raceBreakdown: {
    padding: '0px 5%',
  },
  raceBreakdownSvg: {
    width: '100%',
    marginBottom: 15
  },
  raceTitle: {
    textAlign: 'center'
  },
  raceBreakdownTitles: {
    color: '#112353',
    fontWeight: 600,
    fontSize: 20,
    margin: '5px 0px',
  },
  benefitsHeader: {
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
  raceGapTextRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  raceGapText: {
    margin: 0,
    paddingRight: 10
  },
  raceRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  handSvg: {
    paddingRight: 10,
    paddingTop: 20
  },
  handRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textAlign: {
    textAlign: 'center'
  },
  raceGapContainer: {
    marginBottom: 30
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
  }
};

const renderRaceGapRow = (handCount, handSvg, altText, stats) => (
  <div css={styles.raceRow}>
    <div css={styles.handRow}>
      {Array.from(Array(handCount).keys()).map(
        (index) => (<img key={`${altText}-${index}`} css={styles.handSvg} src={handSvg} alt={altText} />)
      )}
    </div>
    <div css={styles.raceGapTextRow}>
      <p css={[themeStyles.text.subHeading, styles.raceGapText]}>{`${stats[0]}%`}</p>
      <p css={[themeStyles.text.description, styles.raceGapText]}>{stats[1]}</p>
    </div>
  </div>
);

const renderBenefitRow = (contractorPercent, fullTimePercent, benefit) => (
  <div key={benefit} css={styles.benefitsHeader}>
    <p css={styles.contractorPercentText}>{`${contractorPercent}%`}</p>
    <p css={styles.fullTimePercentText}>{`${fullTimePercent}%`}</p>
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

const renderRaceBreakdown = () => (
  <div css={styles.raceBreakdown}>
    <p css={[themeStyles.text.subHeading, styles.raceTitle]}>
      {atGlanceCopy.contractor.raceTitle}
    </p>
    <p css={styles.raceBreakdownTitles}>
      {atGlanceCopy.contractor.header}
    </p>
    <img css={styles.raceBreakdownSvg} src={contractorRaceSvg} alt="Race breakdown" />
    <p css={styles.raceBreakdownTitles}>
      {atGlanceCopy.fullTime.header}
    </p>
    <img css={styles.raceBreakdownSvg} src={fullTimeRaceSvg} alt="Race breakdown" />
  </div>
);

const renderMobilityColumn = (img, description) => (
  <div css={styles.mobilityColumn}>
    <div>
      <img css={styles.ladderImg} src={img} alt="Employee Ladder" />
    </div>
    <p css={[styles.raceBreakdownTitles, styles.textAlign]}>
      {description}
    </p>
  </div>
);

const AtGlanceMobile = () => (
  <div css={styles.container}>
    <p css={[themeStyles.text.headline, styles.headerText]}>{`${atGlanceCopy.contractor.header} vs ${atGlanceCopy.fullTime.header}`}</p>
    <p css={[themeStyles.text.subHeading, styles.headerText]}>{atGlanceCopy.contractor.pay.type}</p>
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
    {renderRaceBreakdown()}
    <hr css={styles.divider} />
    <div>
      <div css={styles.benefitsHeader}>
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
    <hr css={styles.divider} />
    <div css={styles.raceGapContainer}>
      <p css={[themeStyles.text.subHeading, styles.textAlign]}>{atGlanceCopy.raceGap.title}</p>
      {renderRaceGapRow(4, whiteHandSvg, 'white hand', atGlanceCopy.raceGap.stats.white)}
      {renderRaceGapRow(3, bipocHandSvg, 'BIPOC hand', atGlanceCopy.raceGap.stats.bipoc)}
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
