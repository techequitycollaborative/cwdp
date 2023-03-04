import { Global } from '@emotion/react';

import { atGlanceCopy, mobilityAdvancementCopy, workplaceProtectionsCopy, closingGapCopy, ab1356Copy, sb1162Copy, policySolutionsCopy, glassDivideCopy, occupationalSegregationCopy } from 'assets';
import { globalStyles, themeStyles } from 'theme';
import { ContentSection, SectionIndicator, FloatingButton, Footer } from 'components';
import { LandingSection, AtGlance, MobilityAdvancement, WorkplaceProtections, ResponsibleContractingStandard, AB1356, SB1162, PolicySolutions, GlassDivide, OccupationalSegregation } from 'sections';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <SectionIndicator>
      <ContentSection content={LandingSection()} />
      <ContentSection content={AtGlance()} title={atGlanceCopy.title} background="dark" />
      <ContentSection content={ResponsibleContractingStandard()} title={closingGapCopy.title} />
      <ContentSection content={PolicySolutions()} title={policySolutionsCopy.title} background="dark" />
      <ContentSection
        content={AB1356()}
        title={ab1356Copy.title}
        overrideBackground={themeStyles.colors.callToActionRed}
        overrideHeight
      />
      <ContentSection content={SB1162()} title={sb1162Copy.title} />
      <ContentSection content={MobilityAdvancement()} title={mobilityAdvancementCopy.title} />
      <ContentSection content={WorkplaceProtections()} title={workplaceProtectionsCopy.title} background="dark" />
      <ContentSection content={GlassDivide()} title={glassDivideCopy.title} />
      <ContentSection content={OccupationalSegregation()} title={occupationalSegregationCopy.title} background="dark" />
    </SectionIndicator>
    <FloatingButton />
    <Footer />
  </>
);

export default App;
