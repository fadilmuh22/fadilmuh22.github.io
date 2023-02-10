import { useColorMode } from '@chakra-ui/react';

import { EducationsList } from 'src/components/organisms/EducationsList';
import { ExperiencesList } from 'src/components/organisms/ExperiencesList';
import { GreetingsSection } from 'src/components/organisms/GreetingsSection';
import { TechsList } from 'src/components/organisms/TechsList';
import { PageTemplate } from 'src/components/templates/PageTemplate';

export const HomePage = () => {
  const { colorMode } = useColorMode();

  return (
    <PageTemplate>
      <GreetingsSection />
      <TechsList />
      <ExperiencesList />
      <EducationsList />
    </PageTemplate>
  );
};
