import { useTheme } from '@/hooks';
import { FontAwesome } from '@expo/vector-icons';
import { FC } from 'react';
import { View, Text } from 'react-native';
export interface HeaderProps {
  height: number;
  opacity: number;
}
export const Header: FC<HeaderProps> = ({ height, opacity }) => {
  const { theme } = useTheme();
  const { fontSize, fonts } = theme;
  const BoxEmpty = () => <View style={{ width: 5, height: 5 }} />;
  return (
    <View
      style={{
        height,
        opacity,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <BoxEmpty />
      <Text style={{ fontFamily: fonts.Lexend[600], fontSize: fontSize[18] }}>
        News Papper
      </Text>
      <FontAwesome name="user-circle-o" size={24} color="black" />
    </View>
  );
};
