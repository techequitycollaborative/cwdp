/** @jsxImportSource @emotion/react */
import { paySectionCopy, contractorBadgeSvg, fullTimeEmployeeBadge } from 'assets';
import { VerticalSplit } from 'components';
import { themeStyles } from 'theme';

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
    margin: 25
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  benefits: {
    background: '#FFFFFF',
    padding: 30,
    margin: '0px 15%',
  },
  paneHeaderText: {
    fontSize: 32,
    lineHeight: '50px',
  }
};

const infoPane = (header, benefits, badgeSvg) => (
  <div css={styles.container}>
    <div css={styles.header}>
      <img css={styles.badge} src={badgeSvg} alt="Worker Badge" />
      <h2 css={[themeStyles.text.headline, styles.paneHeaderText]}>{header}</h2>
    </div>
    <div css={styles.benefits}>
      {benefits.map((benefit) => (
        <p css={themeStyles.text.description} key={benefit}>{benefit}</p>
      ))}
    </div>
  </div>
);

const PaySection = () => (
  <VerticalSplit
    left={infoPane(
      paySectionCopy.contract.header,
      paySectionCopy.contract.benefits,
      contractorBadgeSvg
    )}
    right={infoPane(
      paySectionCopy.fullTime.header,
      paySectionCopy.fullTime.benefits,
      fullTimeEmployeeBadge
    )}
    hasDivider
  />
);

export default PaySection;
