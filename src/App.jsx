import { Global } from '@emotion/react';

import { globalStyles } from 'theme';

import {
  LandingSection,
  VideoSection,
  PaySection,
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
      <PaySection />
      <VideoSection />
      <QuotesSection />
      <PrevalenceSection />
      <FooterSection />
    </ScrollSnapContainer>
  </>
);

export default App;
