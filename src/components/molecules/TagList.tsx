import { Stack, Tag, useColorMode } from '@chakra-ui/react';

type TagListProps = {
  tags?: string;
  display: any;
};

export const TagList: React.FC<TagListProps> = ({ tags, display }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack display={display} spacing={2} mt={3} isInline alignItems="center">
      {tags &&
        tags.split(',').map((skill) => (
          <Tag
            size="sm"
            padding="0 3px"
            key={skill}
            fontWeight="bold"
            color={`mode.${colorMode}.career.subtext`}
            bgColor={`mode.${colorMode}.career.tagBG`}
          >
            {skill}
          </Tag>
        ))}
    </Stack>
  );
};
