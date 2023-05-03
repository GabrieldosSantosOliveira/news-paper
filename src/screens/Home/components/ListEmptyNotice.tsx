import { useTheme } from '@/hooks/useTheme';
import { memo } from 'react';
import { View, Text } from 'react-native';

const ListEmptyNoticeBase = () => {
  const { fontSize, size, fonts, colors } = useTheme();
  return (
    <View
      style={{
        width: '100%',
        height: size[50],
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: fonts.Lexend[400],
          fontSize: fontSize[18],
          textAlign: 'center',
          color: colors.text.primary,
        }}
      >
        Algo de errado ocorreu, tente novamente mais tarde
      </Text>
    </View>
  );
};
export const ListEmptyNotice = memo(ListEmptyNoticeBase);
