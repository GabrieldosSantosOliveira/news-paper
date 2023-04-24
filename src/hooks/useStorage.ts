import { StorageContext } from '@/contexts';
import { WithoutProviderError } from '@/errors';
import { useContext } from 'react';
export const useStorage = () => {
  const value = useContext(StorageContext);
  if (!value) {
    throw new WithoutProviderError(
      'useStorage must be used within an StorageProvider',
    );
  }
  return value;
};
