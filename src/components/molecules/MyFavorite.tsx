import { IconButton, useEventListener } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

const keyPass = import.meta.env.VITE_KEY_PASS;

export const MyFavorite = () => {
  const [typed, setTyped] = useState('');
  const [keyPassValid, setKeyPassValid] = useState(false);

  useEventListener('keydown', (event) => {
    setTyped((t) => t + event.key);
  });

  useEffect(() => {
    console.log(typed.includes(keyPass), typed, keyPass);
    if (typed.includes(keyPass)) {
      setKeyPassValid(true);
    }
  }, [typed]);

  return !keyPassValid ? (
    <></>
  ) : (
    <Link to="my-beloved">
      <IconButton
        aria-label="My Favorite"
        icon={<MdFavorite fill="red" />}
        size="lg"
        isRound={true}
        variant="ghost"
      />
    </Link>
  );
};
