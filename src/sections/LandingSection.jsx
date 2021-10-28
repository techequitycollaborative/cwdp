/** @jsxImportSource @emotion/react */
import { landingSectionCopy } from 'assets';
import { ScrollSnapSection } from 'components';

const LandingSection = () => (
  <ScrollSnapSection background="dark">
    <h1>{landingSectionCopy.header}</h1>
    <p>{landingSectionCopy.description}</p>
  </ScrollSnapSection>
);

export default LandingSection;
