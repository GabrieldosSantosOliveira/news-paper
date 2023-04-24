import { HttpServiceContext } from '@/contexts';
import { WithoutProviderError } from '@/errors';
import { useContext } from 'react';
export const useHttpService = () => {
  const value = useContext(HttpServiceContext);
  if (!value) {
    throw new WithoutProviderError(
      'useHttpService must be used within an HttpServiceProvider',
    );
  }
  return value;
};