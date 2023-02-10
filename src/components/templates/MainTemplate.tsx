import { Box, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../molecules/Navbar';

export const MainTemplate = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} minH="100vh">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </Box>
  );
};
