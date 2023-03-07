/** @jsxImportSource @emotion/react */
import { liftImg, ab1356Copy } from 'assets';
import { VerticalSplit, Blurb, Image } from 'components';
import { themeStyles } from 'theme';

const styles = {
  borderBox: {
    border: 'solid white 1px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2% 8%',
    margin: '0% 5%',
  },
  disparitiesText: {
    textAlign: 'center',
    margin: 12
  },
  padBottom: {
    paddingBottom: '1.4em',
  }
};

const AB1156 = () => (
  <>
    <div css={styles.shortContainer}>
      <VerticalSplit
        left={(
          <div css={styles.padBottom}>
            <Blurb
              headline={ab1356Copy.headline}
              description={ab1356Copy.description}
              invertTextColors
              button={{
                text: ab1356Copy.button.label,
                url: ab1356Copy.button.url,
                color: themeStyles.colors.brandBlue
              }}
            />
          </div>
        )}
        right={(<Image bottomAlign source={liftImg} altText="Learn about AB 1356" />)}
      />
    </div>
  </>
);

export default AB1156;
