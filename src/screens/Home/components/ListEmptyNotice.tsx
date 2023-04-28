import { useTheme } from '@/hooks';
import { View, Text } from 'react-native';

export const ListEmptyNotice = () => {
  const {
    theme: { fontSize, size, fonts, colors },
  } = useTheme();
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
        selectable={true}
      >
        Algo de errado ocorreu, tente novamente mais tarde
      </Text>
    </View>
  );
};
