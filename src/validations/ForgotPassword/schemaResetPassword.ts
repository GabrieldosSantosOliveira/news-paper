import * as yup from 'yup';
export const schemaResetPassword = yup.object({
  passwordReset: yup
    .string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required(),
});
