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
import { Quote, VerticalSplit } from 'components';
import { breakpoints, mediaQueries, themeStyles } from 'theme';

const maxHandCount = 4;

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch'
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
    padding: 30,
    margin: '0px 15%',
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
    margin: '15px 0px',
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
  salaryDescriptionText: {
    margin: 0,
    marginTop: 10
  },
  raceBreakdown: {
    margin: '20px 10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  raceBreakdownTitle: {
    color: 'black',
    alignSelf: 'center',
    marginBottom: 10,
    textAlign: 'center'
  },
  mobilityDescription: {
    fontSize: 40,
    padding: '0px 30px'
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
  raceGapRow: {
    display: 'flex',
    justifyContent: 'center'
  },
  hiddenHand: {
    visibility: 'hidden',
  },
  raceGapText: {
    paddingLeft: 15
  },
  handSvg: {
    padding: 7,
  }
};

const visualAssets = {
  contractor: {
    badge: contractorBadgeSvg,
    race: contractorRaceSvg,
    ladder: contractorLadderImg
  },
  fullTime: {
    badge: fullTimeEmployeeBadge,
    race: fullTimeRaceSvg,
    ladder: fullTimeLadderImg
  }
};

const renderRaceGapRow = (handCount, handSvg, altText, stats) => (
  <div css={styles.raceGapRow}>
    { maxHandCount > handCount // render hidden hands to make the spacing line up
      && Array.from(Array(maxHandCount - handCount).keys()).map(
        (index) => (<img key={`hidden-${index}-${altText}`} css={[styles.handSvg, styles.hiddenHand]} src={handSvg} alt={altText} />)
      )}
    {Array.from(Array(handCount).keys()).map(
      (index) => (<img key={`${altText}-${index}`} css={styles.handSvg} src={handSvg} alt={altText} />)
    )}
    <p css={[themeStyles.text.subHeading, styles.raceGapText]}>{`${stats[0]}%`}</p>
    <p css={[themeStyles.text.description, styles.raceGapText]}>{stats[1]}</p>
  </div>
);

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
    <div css={styles.raceBreakdown}>
      <p css={styles.subHeading}>{atGlanceCopy.raceTitle}</p>
      <img src={assets.race} alt="Race breakdown" />
    </div>
    <div css={styles.benefits}>
      <p css={styles.subHeading}>{copy.benefits.title}</p>
      {copy.benefits.items.map((benefit) => (
        <div key={benefit[1]} css={styles.benefit}>
          <p css={[themeStyles.text.subHeading, { paddingRight: 10, color }, styles.benefitText]}>{`${benefit[0]}%`}</p>
          <p
            css={[themeStyles.text.description, { fontSize: 22 }, styles.benefitText]}
            key={benefit}
          >
            {benefit[1]}
          </p>
        </div>
      ))}
    </div>
    <div css={copy.raceGap ? undefined : { visibility: 'hidden' }}>
      <p css={styles.subHeading}>{atGlanceCopy.raceGap.title}</p>
      {renderRaceGapRow(maxHandCount, whiteHandSvg, 'white hand', atGlanceCopy.raceGap.stats.white)}
      {renderRaceGapRow(3, bipocHandSvg, 'BIPOC hand', atGlanceCopy.raceGap.stats.bipoc)}
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
  <>
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
    <Quote author={atGlanceCopy.quote.author} text={atGlanceCopy.quote.text} />
  </>
);

export default AtGlanceDesktop;
