import { Button, ControlledInput, Root, SafeAreaView } from '@/components';
import { useAuth, useTheme } from '@/hooks';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import * as yup from 'yup';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
export interface ISingUpForm {
  email: string;
  password: string;
}
const schemaSingUpWithEmailAndPassword = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
export const SingUp = () => {
  const { control } = useForm<ISingUpForm>({
    resolver: yupResolver(schemaSingUpWithEmailAndPassword),
  });
  const {
    theme: { fontSize, fonts, colors },
  } = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { singUpWithEmailAndPassword } = useAuth();

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
            <Root _focus={{ borderWidth: 2 }}>
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
            <Root _focus={{ borderWidth: 2 }}>
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
              onPress={async () => {
                try {
                  setIsLoading(true);
                  await singUpWithEmailAndPassword({
                    email: 'gabreilsntosoliveira95@gmail.com',
                    password: '0',
                  });
                } catch (error) {
                  console.log(JSON.stringify(error));
                } finally {
                  setIsLoading(false);
                }
              }}
            />
          </View>
        </View>
        <Footer />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
