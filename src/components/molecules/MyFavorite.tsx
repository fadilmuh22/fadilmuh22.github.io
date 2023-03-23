import { IconButton, useEventListener } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

const myFavoriteKey = import.meta.env.VITE_MY_FAVORITE_KEY;

export const MyFavorite = () => {
  const [typed, setTyped] = useState('');
  const [keyPassValid, setKeyPassValid] = useState(false);

  useEventListener('keydown', (event) => {
    setTyped((t) => t + event.key);
  });

  useEffect(() => {
    if (typed.includes(myFavoriteKey)) {
      setKeyPassValid(true);
    }
  }, [typed]);

  return !keyPassValid ? (
    <></>
  ) : (
    <Link to={myFavoriteKey}>
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
