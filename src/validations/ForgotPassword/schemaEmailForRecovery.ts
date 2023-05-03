import * as yup from 'yup';

export const schemaEmailForRecovery = yup.object({
  email: yup.string().email('Email inválido').required('Informe o email'),
});
