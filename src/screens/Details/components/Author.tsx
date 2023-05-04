import { Text } from '@/components/Text';
import { useTheme } from '@/hooks/useTheme';
import { AuthorDto } from '@/models/AuthorDto';
import { DateZone } from '@/utils/date/DateZone';
import { FC } from 'react';
import { View, Image } from 'react-native';
export interface AuthorProps {
  author: AuthorDto;
  createdAt: string;
}
export const Author: FC<AuthorProps> = ({ author, createdAt }) => {
  const { size } = useTheme();
  const ProfileImage = author.picture
    ? () => (
        <Image
          source={{ uri: author.picture }}
          style={{ height: size[20], width: size[20], borderRadius: 999 }}
        />
      )
    : () => <></>;
  return (
    <View
      style={{
        height: size[30],
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 10,
      }}
    >
      <ProfileImage />
      <View
        style={{ flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Text size="xs" font="Poppins.600" color="subTitle">
          Por {author.firstName + ' ' + author.lastName}
        </Text>
        <Text size="xs" font="Poppins.600" color="subTitle">
          {DateZone(new Date(createdAt))} às {new Date(createdAt).getHours()}h
          {new Date(createdAt).getMinutes()}
        </Text>
      </View>
    </View>
  );
};
