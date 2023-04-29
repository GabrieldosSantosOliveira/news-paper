import {
  Button,
  ControlledInput,
  Heading,
  Root,
  SafeAreaView,
} from '@/components';
import { useTheme } from '@/hooks';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
export interface ISingUpForm {
  email: string;
  password: string;
}
export const SingUp = () => {
  const { control } = useForm<ISingUpForm>();
  const {
    theme: { fontSize, fonts, colors },
  } = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
            <Heading
              style={{ fontSize: fontSize[24], fontFamily: fonts.Lexend[500] }}
            >
              Olá,
            </Heading>
            <Heading
              style={{ fontSize: fontSize[24], fontFamily: fonts.Lexend[400] }}
            >
              Acesse sua conta
            </Heading>
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
            <Button title="Entrar" />
          </View>
        </View>
        <Footer />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
