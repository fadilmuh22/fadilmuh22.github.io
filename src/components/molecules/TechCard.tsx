import {
  Box,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { TechInterface } from 'src/interfaces/Tech';
import { MotionBox } from 'src/utils/Motion';
import { item } from 'src/utils/Transition';

export const TechCard: React.FC<TechInterface> = ({
  name,
  Icon,
  description,
}) => {
  const { colorMode } = useColorMode();

  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -5 }}>
        <HStack
          p={4}
          bg={`mode.${colorMode}.background`}
          rounded="xl"
          borderWidth="1px"
          borderColor={`mode.${colorMode}.border`}
          w="100%"
          textAlign="left"
          align="start"
          spacing={4}
          _hover={{ shadow: 'md' }}
        >
          <Box
            rounded="lg"
            p={2}
            position="relative"
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.03)"
          >
            <Icon size={26} color={useColorModeValue('#2D3748', '#ffffffde')} />
          </Box>
          <VStack
            align="start"
            justify="flex-start"
            spacing={1}
            maxW="lg"
            h="100%"
          >
            <VStack spacing={0} align="start" flexGrow="1">
              <Text
                fontWeight="bold"
                fontSize="md"
                noOfLines={2}
                color={`mode.${colorMode}.text`}
              >
                {name}
              </Text>
              <Text fontSize="sm" color={`mode.${colorMode}.text`}>
                {description}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </MotionBox>
    </MotionBox>
  );
};
