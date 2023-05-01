import { BoxEmpty } from '@/components/BoxEmpty';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, Image } from 'react-native';
export const Header = () => {
  const {
    theme: { colors, fontSize, fonts, size },
  } = useTheme();
  const { navigate } = useNavigation();
  const { author } = useAuth();
  const Icon = author?.picture
    ? () => (
        <Image
          source={{ uri: author?.picture }}
          style={{ width: 26, height: 26, borderRadius: 100 }}
        />
      )
    : () => (
        <FontAwesome
          name="user-circle-o"
          size={26}
          color={colors.text.primary}
        />
      );
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
      <TouchableOpacity onPress={() => navigate('SingUp')}>
        <Icon />
      </TouchableOpacity>
    </View>
  );
};
