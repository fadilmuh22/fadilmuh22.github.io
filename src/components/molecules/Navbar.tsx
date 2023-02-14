import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FiMenu, FiSun } from 'react-icons/fi';
import { NavbarLink } from '../atoms/NavbarLink';

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow((s) => !s);
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="#2D3748"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
    >
      <Flex
        align="center"
        mr={{ md: '5' }}
        width={{ sm: '100%', md: 'auto' }}
        justifyContent={{ sm: 'space-between', md: 'flex-start' }}
      >
        <Box></Box>
        <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
          <FiMenu
            fontSize="2.5rem"
            color={useColorModeValue('#2D3748', '#ffffffde')}
          />
        </Box>
      </Flex>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        flexDirection={{ sm: 'column', md: 'row' }}
        width={{ sm: '100px', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <NavbarLink to="/" title="home" onClick={setShow} />
        <NavbarLink to="projects" title="projects" onClick={setShow} />
        <NavbarLink to="articles" title="articles" onClick={setShow} />
      </Box>

      <Box
        position={{ sm: 'absolute', md: 'unset' }}
        top="1.25rem"
        right="5.5rem"
      >
        <IconButton
          aria-label="Color Mode"
          icon={useColorModeValue(<FaMoon />, <FiSun />)}
          onClick={toggleColorMode}
          size="lg"
          isRound={true}
          variant="ghost"
        />
      </Box>
    </Flex>
  );
};
