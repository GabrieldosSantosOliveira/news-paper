import { Heading } from '@/components/Heading';
import { useTheme } from '@/hooks/useTheme';
import { NoticeDto } from '@/models/NoticeDto';
import { FC, memo } from 'react';
import { View, Image } from 'react-native';

import { Author } from './Author';
export interface HeaderProps {
  notice: NoticeDto;
}
const HeaderBase: FC<HeaderProps> = ({ notice }) => {
  const { size } = useTheme();
  return (
    <View style={{ gap: 20 }}>
      <Author author={notice.author} createdAt={notice.createdAt} />
      <Heading size="lg" font="Lexend.500">
        {notice.title}
      </Heading>
      <Heading size="sm" color="subTitle">
        {notice.description}
      </Heading>
      <Image
        source={{ uri: notice.image }}
        style={{
          width: '100%',
          height: size[90],
          borderRadius: 8,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};
export const Header = memo(HeaderBase);
