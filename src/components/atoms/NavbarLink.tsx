import { Link, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

type NavbarLinkProps = {
  to: string;
  title: string;
  onClick(value: boolean): any;
};

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  to,
  title,
  onClick,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Link
      as={NavLink}
      to={to}
      _activeLink={{
        background: useColorModeValue('#000', '#252424e0'),
        color: '#fff',
      }}
      borderRadius={{ sm: '5px' }}
      mr={{ sm: '0', md: '3' }}
      mt={{ sm: '2', md: '0' }}
      color={`mode.${colorMode}.color`}
      padding="0.7rem"
      display={{ sm: 'block' }}
      _visited={{ outline: 'none' }}
      _hover={{
        background: useColorModeValue('rgba(0, 0, 0, 0.7)', '#463d3de0'),
        color: '#fff',
      }}
      textTransform="capitalize"
      onClick={() => onClick(false)}
    >
      {title}
    </Link>
  );
};
