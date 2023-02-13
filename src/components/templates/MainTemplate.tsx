import { Box, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../molecules/Navbar';

export const MainTemplate = () => {
  const { colorMode } = useColorMode();

  return (
    <Box bg={`mode.${colorMode}.background`} minH="100vh">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </Box>
  );
};
