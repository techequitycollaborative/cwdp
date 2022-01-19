/** @jsxImportSource @emotion/react */
import {
  useRef,
  useEffect,
  useState,
  Children,
  cloneElement
} from 'react';
import PropTypes from 'prop-types';

import { breakpoints, mediaQueries } from 'theme';

const INDICATOR_SIZE = 12;
const ACTIVE_INDICATOR_SIZE = INDICATOR_SIZE + 2;

const intersectionObserverOptions = {
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9] // Check for rerender on every 10%
};

const styles = {
  indicatorContainer: {
    marginRight: 10,
    position: 'fixed',
    top: 0,
    right: '2%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [mediaQueries(breakpoints.mobile)]: {
      right: 0,
    }
  },
  indicator: {
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: '50%',
    background: '#000000',
    margin: '15px auto',
    opacity: '.2',
    cursor: 'pointer'
  },
  activeIndicator: {
    opacity: '1',
    width: ACTIVE_INDICATOR_SIZE,
    height: ACTIVE_INDICATOR_SIZE,
    borderRadius: '50%',
    background: '#E08585',
  }
};

const SectionIndicator = ({ children }) => {
  const childrenRefs = useRef([]);

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
  }, [childrenRefs]);

  // https://dev.to/maciekgrzybek/create-section-navigation-with-react-and-intersection-observer-fg0
  useEffect(() => {
    const handleIntersection = (entries) => {
      let maxIntersection = 0;
      let viewportHeight = 0;
      let updateActive = 0;
      entries.forEach((entry) => {
        // Keep track of which section has most of the viewport height. Update later.
        viewportHeight = entry.rootBounds.height;
        const entryIdInteger = parseInt(entry.target.id, 10);
        if (entry.intersectionRect.height > maxIntersection && entry.isIntersecting) {
          maxIntersection = entry.intersectionRect.height;
          updateActive = entryIdInteger;
        }
      });
      if (activeSectionIndex !== updateActive && maxIntersection >= viewportHeight / 2) {
        // Only update active if the new section is at least 50% of viewport height.
        // This is necessary to prevent flickering because the observer fires for only
        // one element when only one of the two in view crosses a 0.X threshold.
        setActiveSectionIndex(updateActive);
      }
    };
    const observer = new IntersectionObserver(handleIntersection, intersectionObserverOptions);
    if (childrenRefs.current) {
      childrenRefs.current.forEach((childRef) => observer.observe(childRef));
    }
    return () => observer.disconnect(); // Clenaup the observer if component unmount.
  }, [activeSectionIndex, setActiveSectionIndex, childrenRefs]);

  const handleIndicatorClick = (index) => () => {
    childrenRefs.current[index].scrollIntoView();
  };

  const handleKeyDown = (index) => (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      childrenRefs.current[index].scrollIntoView();
    }
  };

  const renderDots = (count, activeIndex) => (
    <nav>
      {Array.from(Array(count).keys()).map((x, index) => (
        <div
          key={`indicator-dot-${x}`}
          css={[styles.indicator, activeIndex === index ? styles.activeIndicator : undefined]}
          onClick={handleIndicatorClick(index)}
          onKeyDown={handleKeyDown(index)}
          role="button"
          tabIndex={index}
          label="Navigate sections"
        />
      ))}
    </nav>
  );

  // https://stackoverflow.com/questions/63654496/is-it-possible-to-add-ref-to-the-props-children-elements
  return (
    <>
      {Children.map(children, (child, index) => cloneElement(child, {
        id: `${index}`,
        key: `indicator-child-${index}`,
        // eslint-disable-next-line no-return-assign
        ref: (ref) => (childrenRefs.current[index] = ref)
      }))}
      <div css={styles.indicatorContainer}>
        {renderDots(Children.count(children), activeSectionIndex)}
      </div>
    </>
  );
};

SectionIndicator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionIndicator;
