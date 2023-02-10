import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ArticlesCard } from 'src/components/molecules/ArticlesCard';
import { PageTemplate } from 'src/components/templates/PageTemplate';
import { ArticleInterface } from 'src/interfaces/Article';

export const ArticlesPage = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>();

  const toast = useToast();

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=fadilmuh22')
      .then(async (data) => {
        setArticles(await data.json());
      })
      .catch((error: any) => {
        toast({
          title: 'Error getting articles',
          description: error.message,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
  }, []);

  return (
    <PageTemplate>
      {articles &&
        articles.map((article) => (
          <ArticlesCard key={article.id} article={article} />
        ))}
    </PageTemplate>
  );
};
