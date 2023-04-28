import { useTheme } from '@/hooks';
import { NoticeDto } from '@/models';
import { FC, memo, useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import { Skeleton } from '../Skeleton';
export interface NoticeProps {
  notice: NoticeDto;
}
const NoticeBase: FC<NoticeProps> = ({
  notice: { image, title, description },
}) => {
  const [isImageLoad, setIsImageLoad] = useState<boolean>(false);
  const {
    theme: { colors, fontSize, fonts, size },
  } = useTheme();
  return (
    <TouchableOpacity>
      <View style={{ width: 'auto', gap: 10 }}>
        <View
          style={{
            width: '100%',
            height: size[80],
            borderRadius: 8,
          }}
        >
          <Image
            source={{ uri: image }}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 8,
              position: 'absolute',
              zIndex: isImageLoad ? 10 : 1,
            }}
            onLoadEnd={() => setIsImageLoad(true)}
          />
          {isImageLoad ? null : (
            <Skeleton
              backgroundColor={colors.skeleton}
              height="100%"
              width="100%"
              style={{
                position: 'absolute',
                zIndex: 2,
              }}
            />
          )}
        </View>
        <Text
          style={{
            fontFamily: fonts.Poppins[600],
            fontSize: fontSize[20],
            color: colors.text.primary,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: fonts.Lexend[500],
            fontSize: fontSize[14],
            color: colors.text.subTitle,
          }}
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const Notice = memo(NoticeBase);
