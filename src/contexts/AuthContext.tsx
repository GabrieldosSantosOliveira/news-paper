import { env } from '@/config/env';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { useHttpService } from '@/hooks/useHttpService';
import { useStorage } from '@/hooks/useStorage';
import { AuthorDto } from '@/models/AuthorDto';
import { ServiceAuthor } from '@/services/ServiceAuthor';
import { ServiceRefreshToken } from '@/services/ServiceRefreshToken';
import { ServiceSingInWithEmailAndPassword } from '@/services/ServiceSingInWithEmailAndPassword';
import { ServiceSingUpWithEmailAndPassword } from '@/services/ServiceSingUpWithEmailAndPassword';
import { ServiceSingUpWithGoogleProvider } from '@/services/ServiceSingUpWithGoogleProvider';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { Platform } from 'react-native';
export interface SingUpWithEmailAndPasswordParams {
  password: string;
  email: string;
}
export interface SingInWithEmailAndPasswordParams {
  password: string;
  email: string;
  lastName: string;
  firstName: string;
}
export interface IAuthContext {
  singUpWithGoogleProvider: () => Promise<void>;
  author: AuthorDto | null;
  singUpWithEmailAndPassword: (
    data: SingUpWithEmailAndPasswordParams,
  ) => Promise<void>;
  singInWithEmailAndPassword: (
    data: SingInWithEmailAndPasswordParams,
  ) => Promise<void>;
  isAuthenticated: boolean;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const [author, setAuthor] = useState<AuthorDto | null>(null);
  const { httpService } = useHttpService();
  const { storage } = useStorage();
  const serviceSingUpWithEmailAndPassword =
    new ServiceSingUpWithEmailAndPassword(httpService);
  const serviceSingUpWithGoogleProvider = new ServiceSingUpWithGoogleProvider(
    httpService,
  );
  const serviceAuthor = new ServiceAuthor(httpService);
  const serviceRefreshToken = new ServiceRefreshToken(httpService);

  const serviceSingInWithEmailAndPassword =
    new ServiceSingInWithEmailAndPassword(httpService);
  const promptAsyncGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      await GoogleSignin.signIn();
      return await GoogleSignin.getTokens();
    } catch {
      throw new UnexpectedError();
    }
  };
  const singUpWithGoogleProvider = async () => {
    const { accessToken } = await promptAsyncGoogle();
    const refreshAndAccessToken = await serviceSingUpWithGoogleProvider.handle(
      accessToken,
    );
    await storage.multiSet([
      ['@refreshToken', refreshAndAccessToken.data.refreshToken],
      ['@accessToken', refreshAndAccessToken.data.accessToken],
    ]);
    const author = await serviceAuthor.get(
      refreshAndAccessToken.data.accessToken,
    );
    setAuthor(author.data);
  };

  const singUpWithEmailAndPassword = async ({
    email,
    password,
  }: SingUpWithEmailAndPasswordParams) => {
    const refreshAndAccessToken =
      await serviceSingUpWithEmailAndPassword.handle({ email, password });
    await storage.multiSet([
      ['@refreshToken', refreshAndAccessToken.data.refreshToken],
      ['@accessToken', refreshAndAccessToken.data.accessToken],
    ]);
    const author = await serviceAuthor.get(
      refreshAndAccessToken.data.accessToken,
    );
    setAuthor(author.data);
  };
  const singInWithEmailAndPassword = async ({
    email,
    firstName,
    lastName,
    password,
  }: SingInWithEmailAndPasswordParams) => {
    const { data } = await serviceSingInWithEmailAndPassword.handle({
      email,
      firstName,
      lastName,
      password,
    });
    await storage.multiSet([
      ['@refreshToken', data.refreshToken],
      ['@accessToken', data.accessToken],
    ]);
    const author = await serviceAuthor.get(data.accessToken);
    setAuthor(author.data);
  };
  useEffect(() => {
    const CLIENT_ID =
      Platform.OS === 'ios'
        ? env.IOS_GOOGLE_CLIENT_ID
        : env.ANDROID_GOOGLE_CLIENT_ID;
    GoogleSignin.configure({
      offlineAccess: true,
      webClientId: CLIENT_ID,
    });
  }, []);
  const recoverApplicationAuthor = useCallback(async () => {
    try {
      const [refreshToken] = await storage.multiGet([
        '@refreshToken',
        '@accessToken',
      ]);
      const { data } = await serviceRefreshToken.handle({
        refreshToken,
      });
      await storage.set('@accessToken', data.accessToken);
      const author = await serviceAuthor.get(data.accessToken);
      setAuthor(author.data);
    } catch {
      await storage.multiRemove(['@refreshToken', '@accessToken']);
    }
  }, []);
  useEffect(() => {
    recoverApplicationAuthor();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        singUpWithGoogleProvider,
        author,
        singUpWithEmailAndPassword,
        singInWithEmailAndPassword,
        isAuthenticated: Boolean(author),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
