import { useTheme } from '@/hooks/useTheme';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
export const Header = () => {
  const {
    theme: { size, colors },
  } = useTheme();
  return (
    <View style={{ width: '100%', height: size[20], justifyContent: 'center' }}>
      <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color={colors.text.primary} />
      </TouchableOpacity>
    </View>
  );
};
