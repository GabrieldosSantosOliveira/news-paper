import * as yup from 'yup';
export const schemaSingUpWithEmailAndPassword = yup.object({
  email: yup.string().email('Email inválido').required('Informe o email'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha precisa ter no mínimo 6 caracteres'),
});
