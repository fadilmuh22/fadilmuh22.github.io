import { Flex } from '@chakra-ui/react';
import { useSelect } from 'react-supabase';
import { ProjectInterface } from 'src/interfaces/Project';
import { SectionHeading } from '../atoms/SectionHeading';
import { ProjectCard } from '../molecules/ProjectCard';

export const ProjectList = () => {
  const [{ count, data, error, fetching }, reexecute] = useSelect('projects');

  if (error) return <div>{error.message}</div>;
  if (fetching) return <div>Loading projects</div>;
  if (data?.length === 0) return <div>No projects</div>;

  return (
    <Flex gap={4} flexDirection="column">
      <SectionHeading title="My Projects" size={18} />
      {data &&
        (data as ProjectInterface[]).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </Flex>
  );
};
