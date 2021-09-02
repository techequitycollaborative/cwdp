export const breakpoints = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
};

// Usage: mediaQueries(breakpoints.mobile)
export const mediaQueries = (breakpoint) => () => `@media (max-width: ${breakpoint})`;
