import { Flex } from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import { useSelect } from 'react-supabase';
import { SectionHeading } from '../atoms/SectionHeading';
import { EducationCard } from '../molecules/EducationCard';

export const EducationsList = () => {
  const [{ count, data, error, fetching }, reexecute] = useSelect('educations');

  if (error) return <div>{error.message}</div>;
  if (fetching) return <div>Loading educations</div>;
  if (data?.length === 0) return <div>No educations</div>;

  return (
    <Flex gap={4} flexDirection="column">
      <SectionHeading title="Educations" Icon={FaGraduationCap} size={24} />

      {data &&
        data.map((edu) => <EducationCard key={edu.id} education={edu} />)}
    </Flex>
  );
};
