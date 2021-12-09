import { Global } from '@emotion/react';

import { globalStyles } from 'theme';

import {
  FooterSection,
  LandingSection,
  // VideoSection,
  PaySection,
  // PrevalenceSection,
  // FooterSection,
  QuoteSection
} from 'sections';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <div>
      <LandingSection />
      <PaySection />
      <QuoteSection />
      {/* <VideoSection />
      <PrevalenceSection /> */}
      <FooterSection />
    </div>
  </>
);

export default App;
