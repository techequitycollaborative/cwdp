/** @jsxImportSource @emotion/react */
import { benefitsSectionCopy } from 'assets';
import { ScrollSnapSection } from 'components';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    margin: '0px -100px',
  },
  split: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {
    backgroundColor: 'deepskyblue'
  },
  right: {
    backgroundColor: 'brown'
  },
};

const BenefitsSection = () => (
  <ScrollSnapSection>
    <div css={styles.container}>
      <div css={[styles.split, styles.left]}>
        <h1>{benefitsSectionCopy.left.header}</h1>
        {benefitsSectionCopy.left.benefits.map((benefit) => (<p key={benefit}>{benefit}</p>))}
      </div>
      <div css={[styles.split, styles.right]}>
        <h1>{benefitsSectionCopy.right.header}</h1>
        {benefitsSectionCopy.right.benefits.map((benefit) => (<p key={benefit}>{benefit}</p>))}
      </div>
    </div>
  </ScrollSnapSection>
);

export default BenefitsSection;
