/** @jsxImportSource @emotion/react */
import { scalesImg, policySolutionsCopy, insideDisparitiesCopy } from 'assets';
import { VerticalSplit, Accordion, Blurb, Image, ThreeColumnSplit, Button } from 'components';
import { themeStyles, breakpoints } from 'theme';
import { useViewPort } from 'hooks';

const styles = {
  miniBlurb: {
    paddingRight: '10%'
  },
  blueBox: {
    background: '#00CEE1',
    padding: '5% 10%',
    marginTop: 40
  },
  borderBox: {
    border: 'solid white 1px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2% 10%'
  },
  disparitiesText: {
    textAlign: 'center',
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
            button={{
              text: policySolutionsCopy.button.label,
              url: policySolutionsCopy.button.url,
              color: themeStyles.colors.brandBlue
            }}
          />
        )}
        right={(<Image source={scalesImg} altText="Scales" />)}
      />
      {width < breakpoints.mobile
        ? (policySolutionsCopy.items.map((item) => (
          <Accordion title={item.heading} content={item.description} />
        ))) : (
          <ThreeColumnSplit
            left={renderMiniBlurb(policySolutionsCopy.items[0])}
            center={renderMiniBlurb(policySolutionsCopy.items[1])}
            right={renderMiniBlurb(policySolutionsCopy.items[2])}
          />
        )}
      <div css={styles.blueBox}>
        <div css={styles.borderBox}>
          <p css={[themeStyles.text.subHeading, styles.disparitiesText]}>
            {insideDisparitiesCopy.headline}
          </p>
          <p css={[themeStyles.text.description, styles.disparitiesText]}>
            {insideDisparitiesCopy.description}
          </p>
          <Button
            text={insideDisparitiesCopy.button.label}
            url={insideDisparitiesCopy.button.url}
            color={themeStyles.colors.brandBlue}
          />
        </div>
      </div>
    </>
  );
};

export default PolicySolutions;
