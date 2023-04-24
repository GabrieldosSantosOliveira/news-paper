import { HttpService } from '@/interfaces';
import { HttpServiceImpl } from '@/services';
import { createContext, FC, ReactNode } from 'react';
export interface IHttpServiceContext {
  httpService: HttpService;
  authHttpService: HttpService;
}
export const HttpServiceContext = createContext<IHttpServiceContext>(
  {} as IHttpServiceContext,
);
export interface IHttpServiceProvider {
  children: ReactNode;
}

export const HttpServiceProvider: FC<IHttpServiceProvider> = ({ children }) => {
  const httpServiceImpl = new HttpServiceImpl();
  return (
    <HttpServiceContext.Provider
      value={{
        authHttpService: httpServiceImpl,
        httpService: httpServiceImpl,
      }}
    >
      {children}
    </HttpServiceContext.Provider>
  );
};
