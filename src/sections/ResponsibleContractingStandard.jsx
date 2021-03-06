/** @jsxImportSource @emotion/react */
import {
  closingGapCopy,
  equalityImg,
  standardItemIcons
} from 'assets';
import { VerticalSplit, Accordion, Blurb, Image, Button } from 'components';
import { useViewPort } from 'hooks';
import { breakpoints, mediaQueries, themeStyles } from 'theme';

const styles = {
  standardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginBottom: 'auto',
    display: 'flex',
    paddingRight: '10%'
  },
  standardIcon: {
    width: 'auto',
    height: 'auto',
    alignSelf: 'flex-start',
    transform: 'translate(-15%, 30%)',
    maxWidth: '50px'
  },
  standardText: {
    margin: 0,
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    alignSelf: 'center',
  },
  standardsContainer: {
    margin: '70px 0px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    [mediaQueries(breakpoints.tablet)]: {
      margin: 0,
      marginRight: 10,
      paddingBottom: 30
    },
  },
  tabletStandardContainer: {
    paddingLeft: '8%',
  }
};

const renderMobileStandards = () => (
  <>
    {closingGapCopy.items.map(
      (item, index) => (
        <Accordion
          key={item.heading}
          title={item.heading}
          content={item.description}
          icon={standardItemIcons[index]}
        />
      )
    )}
  </>
);

const renderDesktopStandard = (item, imgSource) => (
  <div css={styles.standardContainer}>
    <img css={styles.standardIcon} src={imgSource} alt={imgSource} />
    <div>
      <p css={themeStyles.text.subHeading}>{item.heading}</p>
      <p css={themeStyles.text.description}>{item.description}</p>
    </div>
  </div>
);

const renderTabletStandards = () => (
  <>
    {closingGapCopy.items.map((item, index) => (
      <div key={item.heading} css={styles.tabletStandardContainer}>
        {renderDesktopStandard(item, standardItemIcons[index])}
      </div>
    ))}
  </>
);

const renderDesktopStandards = () => (
  <>
    {[...Array(closingGapCopy.items.length / 2)].map((_, index) => {
      const leftIndex = index * 2;
      const leftItem = closingGapCopy.items[leftIndex];
      const rightIndex = (index * 2) + 1;
      const rightItem = closingGapCopy.items[rightIndex];
      return (
        <VerticalSplit
          key={leftItem.heading}
          left={renderDesktopStandard(leftItem, standardItemIcons[leftIndex])}
          right={renderDesktopStandard(rightItem, standardItemIcons[rightIndex])}
        />
      );
    })}
  </>
);

const renderStandards = (width) => {
  if (width < breakpoints.mobile) {
    return renderMobileStandards();
  }

  if (width < breakpoints.tablet) {
    return renderTabletStandards();
  }

  return renderDesktopStandards();
};

const ResponsibleContractingStandard = () => {
  const { width } = useViewPort();
  return (
    <>
      <VerticalSplit
        left={(
          <Blurb
            headline={closingGapCopy.headline}
            description={closingGapCopy.description}
            button={{
              text: closingGapCopy.button.label,
              url: closingGapCopy.button.url,
              color: themeStyles.colors.brandBlue
            }}
          />
        )}
        right={(<Image source={equalityImg} altText="Equality" />)}
        reverseOnMobile
      />
      <div css={styles.standardsContainer}>
        {renderStandards(width)}
        <div css={styles.buttonContainer}>
          <Button
            url={closingGapCopy.button2.url}
            text={closingGapCopy.button2.label}
            color={themeStyles.colors.brandBlue}
          />
        </div>
      </div>
    </>
  );
};

export default ResponsibleContractingStandard;
