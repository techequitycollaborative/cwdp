import { Global } from '@emotion/react';

import { globalStyles } from 'theme';

import {
  LandingSection,
  VideoSection,
  PaySection,
  BenefitsSection,
  QuotesSection,
  PrevalenceSection,
  FooterSection
} from 'sections';

import { ScrollSnapContainer } from 'components';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <ScrollSnapContainer>
      <LandingSection />
      <VideoSection />
      <PaySection />
      <BenefitsSection />
      <QuotesSection />
      <PrevalenceSection />
      <FooterSection />
    </ScrollSnapContainer>
  </>
);

export default App;
