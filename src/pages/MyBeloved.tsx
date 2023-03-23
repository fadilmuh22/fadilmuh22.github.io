import {
  Box,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import ModelViewer from 'src/components/molecules/ModelView';

const myFavoriteKey = import.meta.env.VITE_MY_FAVORITE_KEY;

export const MyBeloved: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box width="100%" height="100vh">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={3}
      >
        <Box></Box>
        <Text fontSize={20} textTransform="capitalize">
          For {myFavoriteKey}
        </Text>
        <IconButton
          aria-label="Color Mode"
          icon={useColorModeValue(<FaMoon />, <FiSun />)}
          onClick={toggleColorMode}
          size="lg"
          isRound={true}
          variant="ghost"
        />
      </Box>
      <ModelViewer
        scale={5}
        modelPath="https://nwtnlgaukdxsafmslpsi.supabase.co/storage/v1/object/public/my-portofolio/rose.glb"
        position={[0, -2, 0]}
      />
    </Box>
  );
};
