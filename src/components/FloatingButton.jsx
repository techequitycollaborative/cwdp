/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { downloadSvg, downloadAltSvg } from 'assets';

const text = 'Download the report';
const url = '';
const color = '#CC3333';

const scrollThreshold = 50;

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

const scrollTopStyles = {
  button: {
    minWidth: '200px'
  },
  buttonText: {
    display: 'inline-block'
  }
};

const scrollDownStyles = {
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
  const [scrollStyles, setScrollStyles] = useState(scrollTopStyles);
  const [downloadIconToggle, setDownoloadIconToggle] = useState(downloadIconDefaultStyles);

  const handleMouseOver = () => {
    setScrollStyles(scrollTopStyles);
    setDownoloadIconToggle(downloadIconHoverStyles);
  };

  const handleMouseLeave = () => {
    if (scrollTop > scrollThreshold) {
      setScrollStyles(scrollDownStyles);
    }
    setDownoloadIconToggle(downloadIconDefaultStyles);
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);

      if (scrollTop > scrollThreshold) {
        setScrollStyles(scrollDownStyles);
      } else {
        setScrollStyles(scrollTopStyles);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        css={[styles.button, scrollStyles.button]}
        type="button"
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onBlur={handleMouseLeave}
      >
        <span css={[styles.buttonText, scrollStyles.buttonText]}>
          {text}
        </span>
        <img css={[styles.downloadIcon, downloadIconToggle.white]} src={downloadSvg} alt="Download" />
        <img css={[styles.downloadIcon, downloadIconToggle.red]} src={downloadAltSvg} alt="Download" />
      </button>
    </a>
  );
};

export default FloatingButton;
