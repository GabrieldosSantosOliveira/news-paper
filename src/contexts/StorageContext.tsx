import { Storage } from '@/interfaces';
import { StorageImpl } from '@/services';
import { createContext, FC, ReactNode } from 'react';
export interface IStorageContext {
  storage: Storage;
}
export const StorageContext = createContext<IStorageContext>(
  {} as IStorageContext,
);
export interface IStorageProvider {
  children: ReactNode;
}

export const StorageProvider: FC<IStorageProvider> = ({ children }) => {
  const storageImpl = new StorageImpl();
  return (
    <StorageContext.Provider
      value={{
        storage: storageImpl,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
