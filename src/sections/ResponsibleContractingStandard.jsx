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
    transform: 'translateY(30%)',
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
    [mediaQueries(breakpoints.mobile)]: {
      margin: 0,
      marginRight: 10
    },
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

const renderDesktopStandards = () => (
  <>
    {[...Array(closingGapCopy.items.length / 2)].map((_, index) => {
      const leftItem = closingGapCopy.items[index];
      const rightIndex = (closingGapCopy.items.length / 2) + index;
      const rightItem = closingGapCopy.items[rightIndex];
      return (
        <VerticalSplit
          key={leftItem.heading}
          left={renderDesktopStandard(leftItem, standardItemIcons[index])}
          right={renderDesktopStandard(rightItem, standardItemIcons[rightIndex])}
        />
      );
    })}
  </>
);

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
        { width < breakpoints.mobile ? renderMobileStandards() : renderDesktopStandards()}
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
