import { Flex } from '@chakra-ui/react';
import { FaBriefcase } from 'react-icons/fa';
import { useSelect } from 'react-supabase';
import { SectionHeading } from '../atoms/SectionHeading';
import { ExperienceCard } from '../molecules/ExperienceCard';

export const ExperiencesList = () => {
  const [{ count, data, error, fetching }, reexecute] =
    useSelect('experiences');

  if (error) return <div>{error.message}</div>;
  if (fetching) return <div>Loading experiences</div>;
  if (data?.length === 0) return <div>No experiences</div>;

  return (
    <Flex gap={4} flexDirection="column">
      <SectionHeading title="Experiences" Icon={FaBriefcase} size={18} />
      {data &&
        data.map((exp) => <ExperienceCard key={exp.id} experience={exp} />)}
    </Flex>
  );
};
