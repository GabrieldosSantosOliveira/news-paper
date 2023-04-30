import { InputContext } from '@/contexts/InputContext';
import { WithoutProviderError } from '@/errors/WithoutProviderError';
import { useContext } from 'react';

export const useInput = () => {
  const value = useContext(InputContext);
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError('useInput must be used within an Input');
  }
  return value;
};
