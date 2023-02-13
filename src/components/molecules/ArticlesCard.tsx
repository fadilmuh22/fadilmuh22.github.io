import { Box, Heading, Stack, Tag, Text, useColorMode } from '@chakra-ui/react';
import { FiBookmark } from 'react-icons/fi';
import { ArticleInterface } from 'src/interfaces/Article';

type ArticleCardProps = {
  article: ArticleInterface;
};

export const ArticlesCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { colorMode } = useColorMode();

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
        color={`mode.${colorMode}.text`}
        fill={`mode.${colorMode}.text`}
        right="0.5rem"
        top="-8px"
        marginBottom="1rem"
      />
      <Heading fontSize="xl" color={`mode.${colorMode}.text`}>
        {article.title}
      </Heading>
      <Stack spacing={1} mt={1} isInline alignItems="center">
        {article.tag_list.map((tag) => (
          <Tag size="sm" key={tag} color="#4299E1" bgColor="#EBF8FF">
            {tag}
          </Tag>
        ))}
      </Stack>
      <Text mt={2} color={`mode.${colorMode}.text`}>
        {article.description.replace(/\s+/g, ' ').trim()}
      </Text>
    </Box>
  );
};
