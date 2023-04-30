import { AuthContext } from '@/contexts';
import { WithoutProviderError } from '@/errors';
import { useContext } from 'react';
export const useAuth = () => {
  const value = useContext(AuthContext);
  if (Object.keys(value).length === 0) {
    throw new WithoutProviderError(
      'useAuth must be used within an AuthContext',
    );
  }
  return value;
};
