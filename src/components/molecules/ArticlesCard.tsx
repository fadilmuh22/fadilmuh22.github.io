import {
  Box,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { ArticleInterface } from 'src/interfaces/Article';

type ArticleCardProps = {
  article: ArticleInterface;
};

export const ArticlesCard: React.FC<ArticleCardProps> = ({ article }) => {
  const openUrl = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Box
      p={5}
      _hover={{ shadow: 'md' }}
      cursor="pointer"
      borderWidth="1px"
      borderColor="#e2e8f0"
      position="relative"
      rounded="md"
      onClick={() => openUrl(article.url)}
    >
      <Box
        as={FiBookmark}
        size="25px"
        width="1.5rem"
        height="1.5rem"
        position="absolute"
        color={useColorModeValue('#2D3748', '#fff')}
        fill={useColorModeValue('#2D3748', '#fff')}
        right="0.5rem"
        top="-8px"
        marginBottom="1rem"
      />
      <Heading fontSize="xl" color={useColorModeValue('#2D3748', '#fff')}>
        {article.title}
      </Heading>
      <Stack spacing={1} mt={1} isInline alignItems="center">
        {article.tag_list.map((tag) => (
          <Tag size="sm" key={tag} color="#4299E1" bgColor="#EBF8FF">
            {tag}
          </Tag>
        ))}
        <Tooltip label="Source Code" placement="right">
          <Link
            href={'https://github.com/fadilmuh22'}
            isExternal
            style={{ textDecoration: 'none' }}
          >
            <FaGithub color={useColorModeValue('#2D3748', '#fff')} />
          </Link>
        </Tooltip>
      </Stack>
      <Text mt={2} color={useColorModeValue('#2D3748', '#fff')}>
        {article.description}
      </Text>
    </Box>
  );
};
