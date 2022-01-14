/** @jsxImportSource @emotion/react */
import { downloadSvg } from 'assets';

const text = 'Download the report';
const url = '';
const color = '#CC3333';

const styles = {
  button: {
    padding: '16px 24px 16px 24px',
    borderRadius: '50px 0 0 50px',
    background: color,
    border: `3px solid ${color}`,
    borderRight: 'none',
    color: '#FFFFFF',
    fontSize: 20,
    margin: '20px 0',
    fontWeight: 700,
    position: 'fixed',
    bottom: 20,
    right: 0,
    '&:active': {
      opacity: '.5'
    },
    '&:hover': {
      background: '#FFFFFF',
      cursor: 'pointer',
      color
    }
  },
  downloadIcon: {
    height: '1em',
    margin: '0 0 -.15em .5em'
  },
  buttonText: {
    paddingLeft: '14px'
  }
};

const FloatingButton = () => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <button css={styles.button} type="button">
      <span css={styles.buttonText}>{text}</span>
      <img css={styles.downloadIcon} src={downloadSvg} alt="Download" />
    </button>
  </a>
);

export default FloatingButton;
