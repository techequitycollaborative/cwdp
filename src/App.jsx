import { Global } from '@emotion/react';

import { paySectionCopy, mobilityAdvancementCopy, workplaceProtectionsCopy, closingGapCopy, joinCampaignCopy, policySolutionsCopy, glassDivideCopy, occupationalSegregationCopy } from 'assets';
import { globalStyles, themeStyles } from 'theme';
import { ContentSection, SectionIndicator, Footer } from 'components';
import { LandingSection, AtGlance, MobilityAdvancement, WorkplaceProtections, ResponsibleContractingStandard, JoinCampaign, PolicySolutions, GlassDivide, OccupationalSegregation } from 'sections';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <SectionIndicator>
      <ContentSection content={LandingSection()} />
      <ContentSection content={AtGlance()} title={paySectionCopy.title} background="dark" />
      <ContentSection content={ResponsibleContractingStandard()} title={closingGapCopy.title} />
      <ContentSection
        content={JoinCampaign()}
        title={joinCampaignCopy.title}
        overrideBackground={themeStyles.colors.callToActionRed}
      />
      <ContentSection content={PolicySolutions()} title={policySolutionsCopy.title} />
      <ContentSection content={MobilityAdvancement()} title={mobilityAdvancementCopy.title} />
      <ContentSection content={WorkplaceProtections()} title={workplaceProtectionsCopy.title} background="dark" />
      <ContentSection content={GlassDivide()} title={glassDivideCopy.title} />
      <ContentSection content={OccupationalSegregation()} title={occupationalSegregationCopy.title} background="dark" />
    </SectionIndicator>
    <Footer />
  </>
);

export default App;
