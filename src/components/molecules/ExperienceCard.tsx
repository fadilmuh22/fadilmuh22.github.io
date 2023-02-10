import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import { ExperienceInterface } from 'src/interfaces/Experience';
import { TagList } from './TagList';

type ExperienceCardProps = {
  experience: ExperienceInterface;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: 'md' }}
      borderWidth="1px"
      borderColor={`mode.${colorMode}.border`}
      bg={useColorModeValue('white', 'gray.800')}
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
            src={experience.photo}
            alt={experience.name}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {experience.company_name}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {experience.name}
            </Heading>

            <TagList
              display={{ sm: 'none', md: 'block' }}
              tags={experience.techs}
            />
          </Stack>
        </Flex>
        <Stack>
          <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
            {formatDistance(
              new Date(experience.start_date),
              new Date(experience.end_date)
            )}
          </Text>
        </Stack>
      </Flex>

      <TagList display={{ sm: 'block', md: 'none' }} tags={experience.techs} />
    </Box>
  );
};
