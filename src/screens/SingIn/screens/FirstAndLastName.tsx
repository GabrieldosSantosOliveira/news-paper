import { Button } from '@/components/Button/Button';
import { ControlledInput } from '@/components/Input/ControlledInput';
import { Root } from '@/components/Input/Root';
import { useToast } from '@/hooks/useToast';
import { setName } from '@/redux/SingIn/singInSlice';
import { schemaFirstAndLastName } from '@/validations/SingIn/schemaFirstAndLastName';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm, SubmitErrorHandler } from 'react-hook-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
export interface IFirstAndLastNameForm {
  firstName: string;
  lastName: string;
}
export const FirstAndLastName = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<IFirstAndLastNameForm>({
    resolver: yupResolver(schemaFirstAndLastName),
  });

  const dispatch = useDispatch();
  const toast = useToast();

  const handleSaveFirstAndLastName = ({
    firstName,
    lastName,
  }: IFirstAndLastNameForm) => {
    try {
      toast.clear();
      dispatch(setName({ firstName, lastName }));
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
  const handleSendMessageOfError: SubmitErrorHandler<IFirstAndLastNameForm> = ({
    firstName,
    lastName,
  }) => {
    if (firstName?.message) {
      toast.show({
        message: firstName?.message,
        position: 'top',
        type: 'error',
      });
    }
    if (lastName?.message) {
      toast.show({
        message: lastName?.message,
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
        paddingVertical: 20,
        justifyContent: 'space-between',
      }}
    >
      <View style={{ gap: 20, justifyContent: 'flex-end' }}>
        <Root>
          <ControlledInput
            placeholder="Nome"
            name="firstName"
            control={control}
            autoComplete="name-given"
          />
        </Root>
        <Root>
          <ControlledInput
            placeholder="Sobrenome"
            name="lastName"
            control={control}
            autoComplete="name-family"
            onSubmitEditing={handleSubmit(
              handleSaveFirstAndLastName,
              handleSendMessageOfError,
            )}
          />
        </Root>
      </View>
      <Button
        title="Continuar"
        isLoading={isLoading}
        onPress={handleSubmit(
          handleSaveFirstAndLastName,
          handleSendMessageOfError,
        )}
      />
    </View>
  );
};
