/** @jsxImportSource @emotion/react */
import {
  useRef,
  useEffect,
  useState,
  Children,
  cloneElement
} from 'react';
import PropTypes from 'prop-types';

const INDICATOR_SIZE = 12;
const ACTIVE_INDICATOR_SIZE = INDICATOR_SIZE + 2;

const intersectionObserverOptions = {
  threshold: 0.5
};

const styles = {
  indicatorContainer: {
    position: 'fixed',
    top: 0,
    right: 20,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE / 2,
    background: '#000000',
    margin: '15px auto',
    opacity: '.2',
    cursor: 'pointer'
  },
  activeIndicator: {
    opacity: '1',
    width: ACTIVE_INDICATOR_SIZE,
    height: ACTIVE_INDICATOR_SIZE,
    borderRadius: ACTIVE_INDICATOR_SIZE / 2,
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
      entries.forEach((entry) => {
        const entryIdInteger = parseInt(entry.target.id, 10);
        if (entryIdInteger !== activeSectionIndex && entry.isIntersecting) {
          setActiveSectionIndex(entryIdInteger);
        }
      });
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