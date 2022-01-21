/** @jsxImportSource @emotion/react */
import { arrowSvg } from 'assets';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { themeStyles } from 'theme';

const styles = {
  container: {
    border: '1px solid #E5E5E5',
    borderRadius: 10,
    margin: '20px 35px',
    paddingTop: 20,
    paddingBottom: 10,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0px 15px'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    maxHeight: 60,
    maxWidth: 60,
  },
  moreLessContainer: {
    marginTop: 20,
    borderTop: '1px solid #E5E5E5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  moreLessText: {
    fontWeight: 600,
    color: themeStyles.colors.brandBlue,
    fontSize: 18,
    textDecoration: 'underline',
    paddingRight: 10
  },
  descriptionText: {
    padding: '0px 15px'
  },
  titleText: {
    margin: 0
  },
  expandedArrorw: {
    transform: 'rotateX(180deg)'
  }
};

const Accordion = ({ title, content, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.titleContainer}>
        {icon && (
          <div css={styles.iconContainer}>
            <img css={styles.icon} src={icon} alt="standards icon" />
          </div>
        )}
        <p css={[themeStyles.text.subHeading, styles.titleText]}>{title}</p>
      </div>
      <AnimateHeight duration={300} height={isExpanded ? 'auto' : 0}>
        <p css={[themeStyles.text.description, styles.descriptionText]}>{content}</p>
      </AnimateHeight>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        css={styles.moreLessContainer}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        label="Expand contracting standards section"
      >
        <p css={styles.moreLessText}>{isExpanded ? 'Less' : 'Read More'}</p>
        <img css={isExpanded ? styles.expandedArrorw : undefined} src={arrowSvg} alt="arrow icon" />
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Accordion.defaultProps = {
  icon: '',
};

export default Accordion;
