import {
  Avatar,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import ProfileImage from 'src/assets/profile.jpg';

export const MyGreetings = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
        <Avatar name="Fadil Muh" size="lg" src={ProfileImage} />
      </Heading>
      <Stack spacing={2} marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`} display="flex">
          Hi, I'm Fadil
        </Heading>
        <Flex flexDirection="row" alignItems="center">
          <Box>
            <Text color={`mode.${colorMode}.subtext`}>
              I am a Mobile developer from Indonesia
            </Text>
          </Box>
        </Flex>
      </Stack>
    </>
  );
};
