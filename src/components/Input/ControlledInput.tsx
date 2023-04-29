import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

import { Input, InputProps } from './Input';
export type ControlledInput<T extends FieldValues> = InputProps &
  UseControllerProps<T>;
export function ControlledInput<FormType extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...props
}: ControlledInput<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onBlur, onChange, value } }) => (
        <Input onBlur={onBlur} onChange={onChange} value={value} {...props} />
      )}
    />
  );
}
