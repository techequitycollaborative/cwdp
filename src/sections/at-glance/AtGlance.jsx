/** @jsxImportSource @emotion/react */
import { useViewPort } from 'hooks';
import { breakpoints } from 'theme';

import AtGlanceDesktop from './AtGlanceDesktop';
import AtGlanceMobile from './AtGlanceMobile';

const AtGlance = () => {
  const { width } = useViewPort();
  return width < breakpoints.tablet ? <AtGlanceMobile /> : <AtGlanceDesktop />;
};

export default AtGlance;
