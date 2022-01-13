import { Global } from '@emotion/react';

import { paySectionCopy, mobilityAdvancementCopy, workplaceProtectionsCopy } from 'assets';
import { globalStyles } from 'theme';
import { ContentSection, SectionIndicator, Footer } from 'components';
import { LandingSection, PaySection, QuoteSection, VideoSection } from 'sections';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <SectionIndicator>
      <ContentSection content={LandingSection()} />
      <ContentSection content={PaySection()} title={paySectionCopy.title} background="dark" />
      <ContentSection content={QuoteSection()} title={mobilityAdvancementCopy.title} />
      <ContentSection content={VideoSection()} title={workplaceProtectionsCopy.title} background="dark" />
    </SectionIndicator>
    <Footer />
  </>
);

export default App;
