import { Box, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { TechInterface } from 'src/interfaces/Tech';
import { MotionBox } from 'src/utils/Motion';
import { item } from 'src/utils/Transition';

export const TechCard: React.FC<TechInterface> = ({
  name,
  Icon,
  description,
}) => {
  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -5 }}>
        <HStack
          p={4}
          bg={useColorModeValue('white', 'gray.800')}
          rounded="xl"
          borderWidth="1px"
          borderColor={useColorModeValue('gray.100', 'gray.700')}
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
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Icon size={26} color={useColorModeValue('#2D3748', '#fff')} />
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
                color={useColorModeValue('gray.500', 'gray.200')}
              >
                {name}
              </Text>
              <Text
                fontSize="sm"
                color={useColorModeValue('gray.500', 'gray.200')}
              >
                {description}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </MotionBox>
    </MotionBox>
  );
};
