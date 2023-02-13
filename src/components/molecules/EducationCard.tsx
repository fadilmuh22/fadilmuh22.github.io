import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { EducationInterface } from 'src/interfaces/Education';
import { TagList } from './TagList';

type ExperienceCardProps = {
  education: EducationInterface;
};

export const EducationCard: React.FC<ExperienceCardProps> = ({ education }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ boxShadow: `var(--chakra-colors-mode-${colorMode}-shadow)` }}
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
            src={education.photo}
            alt={education.name}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.text`}>
              {education.name}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.subtext`}>
              {education.major}
            </Heading>

            <TagList
              display={{ sm: 'none', md: 'block' }}
              tags={education.skills}
            />
          </Stack>
        </Flex>
        <Stack>
          <Text fontSize={14} color={`mode.${colorMode}.subtext`}>
            {`${new Date(education.start_date).getFullYear()} - ${new Date(
              education.end_date
            ).getFullYear()}`}
          </Text>
        </Stack>
      </Flex>

      <TagList display={{ sm: 'block', md: 'none' }} tags={education.skills} />
    </Box>
  );
};
