import { Button } from '@/components/Button/Button';
import { ControlledInput } from '@/components/Input/ControlledInput';
import { Root } from '@/components/Input/Root';
import { Loading } from '@/components/Loading/Loading';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/useToast';
import { schemaUpdate } from '@/validations/Update/schemaUpdate';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useId, useState } from 'react';
import { useForm, SubmitErrorHandler } from 'react-hook-form';
import { View, KeyboardAvoidingView } from 'react-native';

import { Header } from './components/Header';
export interface IUpdateForm {
  picture: string;
  firstName: string;
  lastName: string;
}
export const Update = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<IUpdateForm>({
    resolver: yupResolver(schemaUpdate),
  });
  const { author, updateAccount } = useAuth();
  const { colors } = useTheme();
  const toast = useToast();
  const { navigate } = useNavigation();
  const firstName = useId();
  const lastName = useId();
  const picture = useId();
  const firstNameID = `firstName-${firstName}`;
  const lastNameID = `lastName-${lastName}`;
  const pictureID = `picture-${picture}`;
  const handleUpdateAuthor = async ({
    firstName,
    lastName,
    picture,
  }: IUpdateForm) => {
    try {
      setIsLoading(true);
      await updateAccount({ firstName, lastName, picture });
      navigate('Tab', {
        screen: 'Home',
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.show({
          message: error.message,
          type: 'error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleSendMessageOfError: SubmitErrorHandler<IUpdateForm> = async ({
    firstName,
    lastName,
    picture,
  }) => {
    if (lastName?.message) {
      toast.show({
        message: lastName?.message,
        position: 'top',
        type: 'error',
      });
    }
    if (firstName?.message) {
      toast.show({
        message: firstName?.message,
        position: 'top',
        type: 'error',
      });
    }
    if (picture?.message) {
      toast.show({
        message: picture?.message,
        position: 'top',
        type: 'error',
      });
    }
  };
  if (!author) return <Loading />;
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}
      >
        <Header />

        <View
          style={{
            flex: 1,
            paddingVertical: 20,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ gap: 10, justifyContent: 'flex-end' }}>
            <Text size="sm" font="Lexend.500" nativeID={firstNameID}>
              Nome
            </Text>
            <Root
              _focus={{
                borderWidth: 2,
                borderColor: colors.input.primary.borderOnFocus,
              }}
            >
              <ControlledInput
                defaultValue={author?.firstName}
                name="firstName"
                control={control}
                autoComplete="name-given"
                accessibilityLabelledBy={firstNameID}
                aria-labelledby={firstNameID}
              />
            </Root>
            <Text size="sm" font="Lexend.500" nativeID={lastNameID}>
              Sobrenome
            </Text>

            <Root
              _focus={{
                borderWidth: 2,
                borderColor: colors.input.primary.borderOnFocus,
              }}
            >
              <ControlledInput
                defaultValue={author?.lastName}
                name="lastName"
                control={control}
                autoComplete="name-family"
                accessibilityLabelledBy={lastNameID}
                aria-labelledby={lastNameID}
              />
            </Root>
            <Text size="sm" font="Lexend.500" nativeID={pictureID}>
              Imagem
            </Text>

            <Root
              _focus={{
                borderWidth: 2,
                borderColor: colors.input.primary.borderOnFocus,
              }}
            >
              <ControlledInput
                defaultValue={author?.picture}
                name="picture"
                control={control}
                accessibilityLabelledBy={pictureID}
                aria-labelledby={pictureID}
              />
            </Root>
          </View>
          <Button
            title="Atualizar"
            isLoading={isLoading}
            onPress={handleSubmit(handleUpdateAuthor, handleSendMessageOfError)}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
