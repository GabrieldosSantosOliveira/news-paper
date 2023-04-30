import { Button } from '@/components/Button/Button';
import { ControlledInput } from '@/components/Input/ControlledInput';
import { Root } from '@/components/Input/Root';
import { SafeAreaView } from '@/components/SafeAreaView';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/useToast';
import { schemaSingUpWithEmailAndPassword } from '@/validations/schemaSingUpWithEmailAndPassword';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
export interface ISingUpForm {
  email: string;
  password: string;
}

export const SingUp = () => {
  const { control, handleSubmit } = useForm<ISingUpForm>({
    resolver: yupResolver(schemaSingUpWithEmailAndPassword),
  });
  const {
    theme: { fontSize, fonts, colors },
  } = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { singUpWithEmailAndPassword } = useAuth();
  const toast = useToast();
  const handleSingUpWithEmail: SubmitHandler<ISingUpForm> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);
      await singUpWithEmailAndPassword({
        email,
        password,
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
  const handleSendMessageOfError: SubmitErrorHandler<ISingUpForm> = ({
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
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Header />
          <View
            style={{
              paddingHorizontal: 20,
              gap: 20,
              justifyContent: 'flex-end',
            }}
          >
            <Heading>Olá,</Heading>
            <Heading fontWeight="400">Acesse sua conta</Heading>
            <Root
              _focus={{
                borderWidth: 2,
                borderColor: colors.input.primary.borderOnFocus,
              }}
            >
              <FontAwesome
                name="envelope-o"
                size={24}
                color={colors.text.primary}
              />
              <ControlledInput
                placeholder="Email"
                name="email"
                control={control}
                autoComplete="email"
              />
            </Root>
            <Root
              _focus={{
                borderWidth: 2,
                borderColor: colors.input.primary.borderOnFocus,
              }}
            >
              <Feather name="lock" size={24} color={colors.text.primary} />
              <ControlledInput
                control={control}
                placeholder="Senha"
                name="password"
                autoComplete="password"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <Feather name="eye" size={24} color={colors.text.primary} />
                ) : (
                  <Feather
                    name="eye-off"
                    size={24}
                    color={colors.text.primary}
                  />
                )}
              </TouchableOpacity>
            </Root>
            <Text
              style={{
                color: colors.text.primary,
                fontFamily: fonts.Roboto[500],
                fontSize: fontSize[15],
              }}
            >
              Esqueceu sua senha ?
            </Text>
            <Button
              title="Entrar"
              isLoading={isLoading}
              onPress={handleSubmit(
                handleSingUpWithEmail,
                handleSendMessageOfError,
              )}
            />
          </View>
        </View>
        <Footer />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
