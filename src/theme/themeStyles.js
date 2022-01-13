import { breakpoints, mediaQueries } from './mediaQueries';

const themeStyles = {
  colors: {
    light: {
      background: '#FFF'
    },
    dark: {
      background: '#F2F8FB'
    },
    brandBlue: '#006AC3',
    brandNavy: '#172F6E',
    callToActionRed: '#CC3333',
    darkBlueGray: '#696C78',
    blueGray: '#9FA9B4'
  },
  text: {
    headline: {
      color: '#112353',
      fontSize: 52,
      fontWeight: 600,
      lineHeight: 'normal',
      marginTop: 0,
      [mediaQueries(breakpoints.mobile)]: {
        fontSize: 32,
      }
    },
    sectionTitle: {
      color: '#FFFFFF',
      lineHeight: 'normal',
      fontSize: 28,
      margin: 0,
      [mediaQueries(breakpoints.mobile)]: {
        fontSize: 24,
      }
    },
    description: {
      color: '#000000',
      fontSize: 20,
      fontWeight: 400,
      lineHeight: '28px',
      [mediaQueries(breakpoints.mobile)]: {
        fontSize: 18,
      }
    },
    subHeading: {
      color: '#172F6E', // brand navy
      fontWeight: 600,
      fontSize: 28,
      margin: 0,
      marginTop: 20,
    }
  },
};

export default themeStyles;
