import * as yup from 'yup';
const message = 'Informe os 6 dígitos do código de verificação';
export const schemaValidationCode = yup.object({
  code1: yup.string().min(1, message).required(message),
  code2: yup.string().min(1, message).required(message),
  code3: yup.string().min(1, message).required(message),
  code4: yup.string().min(1, message).required(message),
  code5: yup.string().min(1, message).required(message),
  code6: yup.string().min(1, message).required(message),
});
