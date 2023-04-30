import { BoxEmpty } from '@/components/BoxEmpty';
import { useTheme } from '@/hooks/useTheme';
import { FontAwesome } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export const Header = () => {
  const {
    theme: { colors, fontSize, fonts, size },
  } = useTheme();
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: size[20],
      }}
    >
      <BoxEmpty />
      <Text
        style={{
          fontFamily: fonts.Lexend[500],
          fontSize: fontSize[18],
          color: colors.text.primary,
        }}
      >
        News Papper
      </Text>
      <TouchableOpacity>
        <FontAwesome
          name="user-circle-o"
          size={24}
          color={colors.text.primary}
        />
      </TouchableOpacity>
    </View>
  );
};
