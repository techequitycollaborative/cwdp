import { Global } from '@emotion/react';

import { paySectionCopy, quoteSectionCopy } from 'assets';
import { globalStyles } from 'theme';
import { ContentSection, SectionIndicator } from 'components';

import {
  FooterSection,
  LandingSection,
  PaySection,
  QuoteSection
} from 'sections';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <SectionIndicator>
      <ContentSection content={LandingSection()} />
      <ContentSection content={PaySection()} title={paySectionCopy.title} background="dark" />
      <ContentSection content={QuoteSection()} title={quoteSectionCopy.title} />
    </SectionIndicator>
    <FooterSection />
  </>
);

export default App;
