import { Button } from '@/components/Button/Button';
import { IconPasswordChangeVisibility } from '@/components/IconPasswordChangeVisibility';
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
import { schemaResetPassword } from '@/validations/ForgotPassword/schemaResetPassword';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useForm, SubmitErrorHandler } from 'react-hook-form';
import { View } from 'react-native';
export type IResetPasswordForm = {
  passwordReset: string;
};
export const ResetPassword = () => {
  const { control, handleSubmit } = useForm<IResetPasswordForm>({
    resolver: yupResolver(schemaResetPassword),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { colors } = useTheme();

  const { code, email } = useSelectorForgotPassword();
  const { httpService } = useHttpService();

  const { navigate } = useNavigation();

  const toast = useToast();

  const serviceResetPassword = new ServiceResetPassword(httpService);

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
  const handleSendMessageOfError: SubmitErrorHandler<IResetPasswordForm> = ({
    passwordReset,
  }) => {
    if (passwordReset?.message) {
      toast.show({
        message: passwordReset?.message,
        position: 'top',
        type: 'error',
      });
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
      <View style={{ gap: 20, justifyContent: 'flex-end' }}>
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
            onSubmitEditing={handleSubmit(
              handleResetPassword,
              handleSendMessageOfError,
            )}
          />
          <IconPasswordChangeVisibility
            changeVisibility={() => setShowPassword((prev) => !prev)}
            visibility={showPassword}
          />
        </Root>
      </View>
      <Button
        title="Confirmar"
        isLoading={isLoading}
        onPress={handleSubmit(handleResetPassword, handleSendMessageOfError)}
      />
    </View>
  );
};
