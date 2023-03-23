/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { landingSectionCopy, downloadSvg, downloadAltSvg } from 'assets';

const downloadButtonLabel = landingSectionCopy.downloadButton.label;
const downloadButtonUrl = landingSectionCopy.downloadButton.url;
const color = '#CC3333';

const styles = {
  button: {
    padding: '16px 24px 16px 24px',
    borderRadius: '50px 0 0 50px',
    background: color,
    border: `3px solid ${color}`,
    borderRight: 'none',
    color: '#FFFFFF',
    fontSize: 22,
    margin: '20px 0',
    fontWeight: 600,
    fontFamily: 'freight-sans-pro',
    position: 'fixed',
    bottom: 20,
    right: 0,
    boxShadow: '1px 4px 4px #bbb',
    transition: 'min-width .25s linear',
    '&:active': {
      opacity: '.5'
    },
    '&:hover': {
      background: '#FFFFFF',
      cursor: 'pointer',
      boxShadow: 'none',
      color,
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

const downloadIconDefaultStyles = {
  white: {
    display: 'inline-block'
  },
  red: {
    display: 'none'
  }
};

const downloadIconHoverStyles = {
  white: {
    display: 'none'
  },
  red: {
    display: 'inline-block'
  }
};

const expandedStyles = {
  button: {
    minWidth: '200px'
  },
  buttonText: {
    display: 'inline-block'
  }
};

const minimizedStyles = {
  button: {
    minWidth: '50px',
    boxShadow: 'none'
  },
  buttonText: {
    display: 'none'
  }
};

const FloatingButton = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollStyles, setScrollStyles] = useState(minimizedStyles);
  const [downloadIconToggle, setDownoloadIconToggle] = useState(downloadIconDefaultStyles);

  const handleMouseOver = () => {
    setScrollStyles(expandedStyles);
    setDownoloadIconToggle(downloadIconHoverStyles);
  };

  const handleMouseLeave = () => {
    if (scrollTop < window.innerHeight) {
      setScrollStyles(minimizedStyles);
    } else if (scrollTop < window.innerHeight * 2) {
      setScrollStyles(expandedStyles);
    } else {
      setScrollStyles(minimizedStyles);
    }
    setDownoloadIconToggle(downloadIconDefaultStyles);
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);

      if (scrollTop < window.innerHeight) {
        setScrollStyles(minimizedStyles);
      } else if (scrollTop < window.innerHeight * 2) {
        setScrollStyles(expandedStyles);
      } else {
        setScrollStyles(minimizedStyles);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <a href={downloadButtonUrl} target="_blank" rel="noopener noreferrer">
      <button
        css={[styles.button, scrollStyles.button]}
        type="button"
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onBlur={handleMouseLeave}
      >
        <span css={[styles.buttonText, scrollStyles.buttonText]}>
          {downloadButtonLabel}
        </span>
        <img css={[styles.downloadIcon, downloadIconToggle.white]} src={downloadSvg} alt="Download" />
        <img css={[styles.downloadIcon, downloadIconToggle.red]} src={downloadAltSvg} alt="Download" />
      </button>
    </a>
  );
};

export default FloatingButton;
