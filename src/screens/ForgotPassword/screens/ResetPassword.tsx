import { Button } from '@/components/Button/Button';
import { ControlledInput } from '@/components/Input/ControlledInput';
import { Root } from '@/components/Input/Root';
import { Text } from '@/components/Text';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { useHttpService } from '@/hooks/useHttpService';
import { useSelectorForgotPassword } from '@/hooks/useSelectorForgotPassword';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/useToast';
import { ServiceResetPassword } from '@/services/ServiceResetPassword';
import { Icons } from '@/styles/Icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export type IResetPasswordForm = {
  passwordReset: string;
};
export const ResetPassword = () => {
  const { control, handleSubmit } = useForm<IResetPasswordForm>();
  const {
    theme: { colors },
  } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { httpService } = useHttpService();
  const serviceResetPassword = new ServiceResetPassword(httpService);
  const { code, email } = useSelectorForgotPassword();
  const toast = useToast();
  const { navigate } = useNavigation();
  const handleResetPassword = async ({ passwordReset }: IResetPasswordForm) => {
    try {
      setIsLoading(true);
      if (!code || !email) {
        throw new UnexpectedError();
      }
      await serviceResetPassword.resetPassword({ code, email, passwordReset });
      navigate('Tab', {
        screen: 'Home',
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.show({
          message: error.message,
          type: 'error',
          position: 'top',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        paddingVertical: 20,
      }}
    >
      <View style={{ gap: 20 }}>
        <Text font="Lexend.600" style={{ textAlign: 'center' }}>
          Atualizar Senha
        </Text>
        <Root
          _focus={{
            borderWidth: 2,
            borderColor: colors.input.primary.borderOnFocus,
          }}
        >
          <Icons.lock color={colors.text.primary} size={24} />
          <ControlledInput
            placeholder="Nova senha"
            name="passwordReset"
            autoComplete="password-new"
            secureTextEntry={!showPassword}
            control={control}
          />
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <Icons.eye color={colors.input.primary.icon} size={24} />
            ) : (
              <Icons.eyeOff color={colors.input.primary.icon} size={24} />
            )}
          </TouchableOpacity>
        </Root>
      </View>
      <Button
        title="Confirmar"
        isLoading={isLoading}
        onPress={handleSubmit(handleResetPassword)}
      />
    </View>
  );
};
