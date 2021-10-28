/** @jsxImportSource @emotion/react */
import { prevalenceSectionCopy } from 'assets';
import { ScrollSnapSection } from 'components';

const styles = {
  box: {
    width: '100%',
    paddingBottom: '100%',
  },
  gridContainer: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: `repeat(${prevalenceSectionCopy.grid.totalBoxes / prevalenceSectionCopy.grid.numberOfRows}, 1fr)`,
    gridGap: '1em',
    alignContent: 'center',
    justifyContent: 'center'
  },
  outerFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 25,
  }
};

const renderBoxes = () => (

  Array.from(Array(prevalenceSectionCopy.grid.totalBoxes).keys()).map((x, i) => (
    <div key={`box-${x}`} css={[styles.box, { backgroundColor: i <= prevalenceSectionCopy.grid.subtotalBoxes ? 'white' : 'red' }]} />
  ))
);

const PrevalenceSection = () => (
  <ScrollSnapSection background="dark">
    <h1>{prevalenceSectionCopy.header}</h1>
    <p>{prevalenceSectionCopy.description}</p>
    <div css={styles.outerFlexContainer}>
      <div css={styles.gridContainer}>{renderBoxes()}</div>
    </div>
  </ScrollSnapSection>
);

export default PrevalenceSection;
