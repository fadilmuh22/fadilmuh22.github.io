import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import { ProjectInterface } from 'src/interfaces/Project';
import { TagList } from './TagList';

type ProjectCardProps = {
  project: ProjectInterface;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      borderWidth="1px"
      borderColor={`mode.${colorMode}.border`}
      bg={`mode.${colorMode}.background`}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            width="4rem"
            height="4rem"
            objectFit="cover"
            src={project.photo}
            alt={project.name}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.text`}>
              {project.name}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.subtext`}>
              {project.role}
            </Heading>

            <TagList
              display={{ sm: 'none', md: 'block' }}
              tags={project.techs}
            />
          </Stack>
        </Flex>
        <Stack>
          <Text fontSize={14} color={`mode.${colorMode}.subtext`}>
            {formatDistance(
              new Date(project.start_date),
              new Date(project.end_date)
            )}
          </Text>
        </Stack>
      </Flex>

      <TagList display={{ sm: 'block', md: 'none' }} tags={project.techs} />
    </Box>
  );
};
