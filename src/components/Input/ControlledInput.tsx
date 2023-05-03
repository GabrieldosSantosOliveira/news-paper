import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

import { Input, InputProps } from './Input';
export type ControlledInputProps<T extends FieldValues> = InputProps &
  UseControllerProps<T>;
export function ControlledInput<FormType extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  onBlur,
  onChangeText,
  ...props
}: ControlledInputProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <Input
          onBlur={(e) => {
            field.onBlur();
            onBlur ? onBlur(e) : null;
          }}
          onChangeText={(text) => {
            field.onChange(text);
            onChangeText ? onChangeText(text) : null;
          }}
          value={field.value}
          {...props}
        />
      )}
    />
  );
}
