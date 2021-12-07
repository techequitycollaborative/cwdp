import { Global } from '@emotion/react';

import { globalStyles } from 'theme';

import {
  LandingSection,
  VideoSection,
  PaySection,
  PrevalenceSection,
  FooterSection,
  QuoteSection
} from 'sections';

import { ScrollSnapContainer } from 'components';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <ScrollSnapContainer>
      <QuoteSection />
      <LandingSection />
      <PaySection />
      <VideoSection />
      <PrevalenceSection />
      <FooterSection />
    </ScrollSnapContainer>
  </>
);

export default App;
