import * as yup from 'yup';
export const schemaEmailAndPassword = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
