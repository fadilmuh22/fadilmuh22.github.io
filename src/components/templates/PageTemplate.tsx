import { Flex, useColorModeValue } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
export const PageTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      padding="1.5rem 3rem"
      color="#2D3748"
      bg={useColorModeValue('white', 'gray.800')}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
      gap={10}
      flexDirection="column"
    >
      {children}
    </Flex>
  );
};
