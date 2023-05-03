import * as yup from 'yup';
export const schemaFirstAndLastName = yup.object({
  firstName: yup
    .string()
    .required('Informe o nome')
    .min(2, 'A nome precisa ter no mínimo 2 caracteres'),
  lastName: yup
    .string()
    .required('Informe o sobrenome')
    .min(2, 'A sobrenome precisa ter no mínimo 2 caracteres'),
});
