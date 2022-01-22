/** @jsxImportSource @emotion/react */
import { scalesImg, policySolutionsCopy } from 'assets';
import { VerticalSplit, Accordion, Blurb, Image, ThreeColumnSplit } from 'components';
import { themeStyles, breakpoints, mediaQueries } from 'theme';
import { useViewPort } from 'hooks';

const styles = {
  miniBlurb: {
    paddingRight: '10%'
  },
  solutionsContainer: {
    [mediaQueries(breakpoints.mobile)]: {
      marginRight: 10
    },
    paddingBottom: 40
  }
};

const renderMiniBlurb = (item) => (
  <div css={styles.miniBlurb}>
    <p css={themeStyles.text.subHeading}>{item.heading}</p>
    <p css={themeStyles.text.description}>{item.description}</p>
  </div>
);

const PolicySolutions = () => {
  const { width } = useViewPort();

  return (
    <>
      <VerticalSplit
        left={(
          <Blurb
            headline={policySolutionsCopy.headline}
            description={policySolutionsCopy.description}
          />
        )}
        right={(<Image source={scalesImg} altText="Scales" />)}
        reverseOnMobile
      />
      <div css={styles.solutionsContainer}>
        {width < breakpoints.mobile
          ? (policySolutionsCopy.items.map((item) => (
            <Accordion key={item.heading} title={item.heading} content={item.description} />
          ))) : (
            <ThreeColumnSplit
              left={renderMiniBlurb(policySolutionsCopy.items[0])}
              center={renderMiniBlurb(policySolutionsCopy.items[1])}
              right={renderMiniBlurb(policySolutionsCopy.items[2])}
            />
          )}
      </div>

    </>
  );
};

export default PolicySolutions;
