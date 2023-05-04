import { Text } from '@/components/Text';
import { ContentDto } from '@/models/ContentDto';
import { FC } from 'react';
import { View } from 'react-native';
export interface ContentProps {
  content: ContentDto;
}
export const Content: FC<ContentProps> = ({ content }) => {
  return (
    <View>
      <Text size="lg" font="Poppins.600">
        {content.heading}
      </Text>
      <Text color="subTitle">{content.text}</Text>
    </View>
  );
};
