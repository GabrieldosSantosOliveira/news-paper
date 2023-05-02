import { Icons } from '@/components/Icons/Icons';
import { Progressbar } from '@/components/Progressbar';
import { Text } from '@/components/Text';
import { useSelectorForgotPassword } from '@/hooks/useSelectorForgotPassword';
import { useTheme } from '@/hooks/useTheme';
import { goBackScreen } from '@/redux/ForgotPassword/forgotPasswordSlice';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
export interface HeaderProps {
  progress: number;
}
export const Header: FC<HeaderProps> = ({ progress }) => {
  const {
    theme: { size, colors },
  } = useTheme();
  const { navigate, goBack } = useNavigation();
  const { screen } = useSelectorForgotPassword();
  const dispatch = useDispatch();
  return (
    <View
      style={{
        height: size[20],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 10,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          screen === 'EmailForRecovery' ? goBack() : dispatch(goBackScreen())
        }
      >
        <Icons.arrowLeft color={colors.text.primary} size={24} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Progressbar
          height={size[4]}
          progress={progress}
          backgroundColor={colors.progressBar.primary}
        />
      </View>
      <TouchableOpacity onPress={() => navigate('Help')}>
        <Text font="Roboto.400" color="help" size="xs">
          Ajuda
        </Text>
      </TouchableOpacity>
    </View>
  );
};
