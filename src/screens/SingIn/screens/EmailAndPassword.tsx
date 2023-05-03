import { Button } from '@/components/Button/Button';
import { IconPasswordChangeVisibility } from '@/components/IconPasswordChangeVisibility';
import { ControlledInput } from '@/components/Input/ControlledInput';
import { Root } from '@/components/Input/Root';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/useToast';
import { ISingInState } from '@/redux/SingIn/singInSlice';
import { RootState } from '@/redux/SingIn/store';
import { Icons } from '@/styles/Icons';
import { schemaEmailAndPassword } from '@/validations/SingIn/schemaEmailAndPassword';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useForm, SubmitErrorHandler } from 'react-hook-form';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
export interface IEmailAndPasswordForm {
  email: string;
  password: string;
}
export const EmailAndPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<IEmailAndPasswordForm>({
    resolver: yupResolver(schemaEmailAndPassword),
  });
  const { colors } = useTheme();
  const toast = useToast();
  const { singInWithEmailAndPassword } = useAuth();
  const { firstName, lastName } = useSelector<RootState, ISingInState>(
    (state) => state.singIn,
  );
  const { navigate } = useNavigation();
  const handleSingIn = async ({ email, password }: IEmailAndPasswordForm) => {
    try {
      setIsLoading(true);
      toast.clear();
      if (!firstName || !lastName) {
        throw new UnexpectedError();
      }
      await singInWithEmailAndPassword({
        email,
        firstName,
        lastName,
        password,
      });
      navigate('Tab', {
        screen: 'Home',
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.show({
          message: error.message,
          position: 'top',
          type: 'error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleSendMessageOfError: SubmitErrorHandler<IEmailAndPasswordForm> = ({
    email,
    password,
  }) => {
    if (email?.message) {
      toast.show({
        message: email?.message,
        position: 'top',
        type: 'error',
      });
    }
    if (password?.message) {
      toast.show({
        message: password?.message,
        position: 'top',
        type: 'error',
      });
    }
  };
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
      }}
    >
      <View style={{ gap: 20, justifyContent: 'flex-end' }}>
        <Root>
          <Icons.envelope color={colors.input.primary.icon} />
          <ControlledInput
            autoComplete="email"
            placeholder="Email"
            name="email"
            control={control}
          />
        </Root>
        <Root>
          <Icons.lock color={colors.input.primary.icon} />
          <ControlledInput
            placeholder="Senha"
            autoComplete="password-new"
            name="password"
            secureTextEntry={!showPassword}
            control={control}
            onSubmitEditing={handleSubmit(
              handleSingIn,
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
        title="Cadastrar"
        isLoading={isLoading}
        onPress={handleSubmit(handleSingIn, handleSendMessageOfError)}
      />
    </View>
  );
};
