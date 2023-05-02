import { useTheme } from '@/hooks/useTheme';
import { Icons } from '@/styles/Icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
export const Header = () => {
  const {
    theme: { size, colors },
  } = useTheme();
  const { goBack } = useNavigation();

  return (
    <View style={{ height: size[10], flexDirection: 'row' }}>
      <TouchableOpacity onPress={goBack}>
        <Icons.close size={24} color={colors.text.primary} />
      </TouchableOpacity>
    </View>
  );
};
