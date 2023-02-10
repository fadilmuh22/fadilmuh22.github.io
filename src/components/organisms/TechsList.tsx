import { Flex, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react';
import { useSelect } from 'react-supabase';
import { TechIconMapping } from 'src/interfaces/Tech';
import { TechCard } from '../molecules/TechCard';

export const TechsList = () => {
  const { colorMode } = useColorMode();
  const [{ count, data, error, fetching }, reexecute] = useSelect('skills');

  if (error) return <div>{error.message}</div>;
  if (fetching) return <div>Loading techs</div>;
  if (data?.length === 0) return <div>No techs</div>;

  return (
    <Flex gap={4} flexDirection="column">
      <Heading color={`mode.${colorMode}.text`}>Skills</Heading>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {data &&
          data.map((skill) => (
            <TechCard
              key={skill.id}
              name={skill.name}
              Icon={TechIconMapping[skill.icon]}
              description={skill.description}
            />
          ))}
      </SimpleGrid>
    </Flex>
  );
};
