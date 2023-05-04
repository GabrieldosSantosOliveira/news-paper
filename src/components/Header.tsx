import { BoxEmpty } from '@/components/BoxEmpty';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { Icons } from '@/styles/Icons';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
const HeaderBase = () => {
  const { colors, fontSize, fonts, size } = useTheme();
  const { navigate } = useNavigation();
  const { author, isAuthenticated } = useAuth();
  const Icon = author?.picture
    ? () => (
        <Image
          source={{ uri: author?.picture }}
          style={{ width: 24, height: 24, borderRadius: 100 }}
        />
      )
    : () => <Icons.userCircleO color={colors.text.primary} />;
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
      <TouchableOpacity
        onPress={() => {
          isAuthenticated ? navigate('Settings') : navigate('SingUp');
        }}
      >
        <Icon />
      </TouchableOpacity>
    </View>
  );
};
export const Header = memo(HeaderBase);
