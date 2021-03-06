import { Global } from '@emotion/react';

import { atGlanceCopy, mobilityAdvancementCopy, workplaceProtectionsCopy, closingGapCopy, joinCampaignCopy, policySolutionsCopy, glassDivideCopy, occupationalSegregationCopy } from 'assets';
import { globalStyles, themeStyles } from 'theme';
import { ContentSection, SectionIndicator, FloatingButton, Footer } from 'components';
import { LandingSection, AtGlance, MobilityAdvancement, WorkplaceProtections, ResponsibleContractingStandard, JoinCampaign, PolicySolutions, GlassDivide, OccupationalSegregation } from 'sections';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <SectionIndicator>
      <ContentSection content={LandingSection()} />
      <ContentSection content={AtGlance()} title={atGlanceCopy.title} background="dark" />
      <ContentSection content={ResponsibleContractingStandard()} title={closingGapCopy.title} />
      <ContentSection content={PolicySolutions()} title={policySolutionsCopy.title} background="dark" />
      <ContentSection
        content={JoinCampaign()}
        title={joinCampaignCopy.title}
        overrideBackground={themeStyles.colors.callToActionRed}
      />
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
