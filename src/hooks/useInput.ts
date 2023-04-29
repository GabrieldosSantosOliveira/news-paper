import { InputContext } from '@/contexts';
import { WithoutProviderError } from '@/errors';
import { useContext } from 'react';

export const useInput = () => {
  const value = useContext(InputContext);
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError('useInput must be used within an Input');
  }
  return value;
};
