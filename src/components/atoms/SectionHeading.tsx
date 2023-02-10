import { Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type SectionHeadingProps = {
  title: string;
  Icon?: IconType;
  size: number;
};
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  Icon,
  size,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Heading color={`mode.${colorMode}.career.text`}>
      <Flex alignItems="center" gap={2}>
        <Text as="span" color={`mode.${colorMode}.career.text`}>
          {title}
        </Text>
        <Stack>
          {Icon && (
            <Icon size={size} color={`mode.${colorMode}.career.subtext`} />
          )}
        </Stack>
      </Flex>
    </Heading>
  );
};
