import { useTheme } from '@/hooks/useTheme';
import { Icons } from '@/styles/Icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
export const Header = () => {
  const { size, colors } = useTheme();
  const { goBack } = useNavigation();
  return (
    <View
      style={{
        height: size[20],
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      <TouchableOpacity onPress={goBack}>
        <Icons.arrowLeft color={colors.text.primary} />
      </TouchableOpacity>
    </View>
  );
};
