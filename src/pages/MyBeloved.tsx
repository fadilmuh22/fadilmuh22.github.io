import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import ModelViewer from 'src/components/molecules/ModelView';

export const MyBeloved: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box width="100%" height="100vh">
      <Box
        display="flex"
        justifyContent="flex-end"
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
      <ModelViewer
        scale={5}
        modelPath="https://nwtnlgaukdxsafmslpsi.supabase.co/storage/v1/object/public/my-portofolio/rose.glb"
        position={[0, -2, 0]}
      />
    </Box>
  );
};
