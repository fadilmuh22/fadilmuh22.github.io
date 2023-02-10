import { Flex } from '@chakra-ui/react';
import { MyGreetings } from '../atoms/MyGreetings';

export const GreetingsSection = () => {
  return (
    <Flex gap={4}>
      <MyGreetings />
    </Flex>
  );
};
