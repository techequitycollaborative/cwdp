/** @jsxImportSource @emotion/react */
import { paySectionCopy } from 'assets';
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
  right: {
    backgroundColor: 'whitesmoke'
  },
};

const PaySection = () => (
  <ScrollSnapSection background="dark">
    <div css={styles.container}>
      <div css={styles.split}>
        <h1>{paySectionCopy.left.header}</h1>
        <p>{paySectionCopy.left.payValue}</p>
      </div>
      <div css={[styles.split, styles.right]}>
        <h1>{paySectionCopy.right.header}</h1>
        <p>{paySectionCopy.right.payValue}</p>
      </div>
    </div>
  </ScrollSnapSection>
);

export default PaySection;
