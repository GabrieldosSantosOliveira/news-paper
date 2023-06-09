import { Text } from '@/components/Text';
import { useTheme } from '@/hooks/useTheme';
import { Icons } from '@/styles/Icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
export const Header = () => {
  const { size, colors } = useTheme();
  const { goBack, navigate } = useNavigation();
  return (
    <View
      style={{
        height: size[20],
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
      }}
    >
      <TouchableOpacity onPress={goBack}>
        <Icons.arrowLeft color={colors.text.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Update')}>
        <Text size="sm" font="Lexend.500">
          Editar
        </Text>
      </TouchableOpacity>
    </View>
  );
};
