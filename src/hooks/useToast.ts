import { ToastContext } from '@/contexts/ToastContext';
import { WithoutProviderError } from '@/errors';
import { useContext } from 'react';
export const useToast = () => {
  const value = useContext(ToastContext);
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useToast must be used within an ToastProvider',
    );
  }
  return value;
};
