import { env } from '@/config';
import { useHttpService } from '@/hooks/useHttpService';
import { AuthorDto } from '@/models';
import { ServiceAuthor } from '@/services/ServiceAuthor';
import { ServiceSingUpWithEmailAndPassword } from '@/services/ServiceSingUpWithEmailAndPassword';
import { ServiceSingUpWithGoogleProvider } from '@/services/ServiceSingUpWithGoogleProvider';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createContext, FC, ReactNode, useState, useEffect } from 'react';
import { Platform } from 'react-native';
export interface SingUpWithEmailAndPasswordParams {
  password: string;
  email: string;
}
export interface IAuthContext {
  singUpWithGoogleProvider: () => Promise<void>;
  author: AuthorDto | null;
  singUpWithEmailAndPassword: (
    data: SingUpWithEmailAndPasswordParams,
  ) => Promise<void>;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const [author, setAuthor] = useState<AuthorDto | null>(null);
  const { httpService } = useHttpService();
  const serviceSingUpWithEmailAndPassword =
    new ServiceSingUpWithEmailAndPassword(httpService);
  const serviceSingUpWithGoogleProvider = new ServiceSingUpWithGoogleProvider(
    httpService,
  );
  const serviceAuthor = new ServiceAuthor(httpService);

  const singUpWithGoogleProvider = async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    await GoogleSignin.signOut();
    await GoogleSignin.signIn();
    const { accessToken } = await GoogleSignin.getTokens();
    const refreshAndAccessToken = await serviceSingUpWithGoogleProvider.handle(
      accessToken,
    );
    const author = await serviceAuthor.get(
      refreshAndAccessToken.data.accessToken,
    );
    setAuthor(author.data);
  };

  const singUpWithEmailAndPassword = async ({
    email,
    password,
  }: SingUpWithEmailAndPasswordParams) => {
    const {
      data: { accessToken },
    } = await serviceSingUpWithEmailAndPassword.handle({ email, password });
    const author = await serviceAuthor.get(accessToken);
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
  return (
    <AuthContext.Provider
      value={{
        singUpWithGoogleProvider,
        author,
        singUpWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
