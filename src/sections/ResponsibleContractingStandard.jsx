/** @jsxImportSource @emotion/react */
import {
  closingGapCopy,
  equalityImg,
  standardItemIcons
} from 'assets';
import { VerticalSplit, Blurb, Image, Button } from 'components';
import { themeStyles } from 'theme';

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
    alignSelf: 'flex-start'
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
    flexDirection: 'column'
  }
};

const renderStandard = (item, imgSource) => (
  <div css={styles.standardContainer}>
    <img css={styles.standardIcon} src={imgSource} alt={imgSource} />
    <div>
      <p css={themeStyles.text.subHeading}>{item.heading}</p>
      <p css={themeStyles.text.description}>{item.description}</p>
    </div>
  </div>
);

const ResponsibleContractingStandard = () => (
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
    />
    <div css={styles.standardsContainer}>
      {[...Array(closingGapCopy.items.length / 2)].map((_, index) => {
        const leftItem = closingGapCopy.items[index];
        const rightIndex = (closingGapCopy.items.length / 2) + index;
        const rightItem = closingGapCopy.items[rightIndex];
        return (
          <VerticalSplit
            key={leftItem.heading}
            left={renderStandard(leftItem, standardItemIcons[index])}
            right={renderStandard(rightItem, standardItemIcons[rightIndex])}
          />
        );
      })}
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

export default ResponsibleContractingStandard;
