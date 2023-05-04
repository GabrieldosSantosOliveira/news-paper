import { NavigatorScreenParams } from '@react-navigation/native';

export interface BottomTabParamList {
  Home: undefined;
}
export interface DetailsParams {
  id: string;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SingUp: undefined;
      ForgotPassword: undefined;
      Help: undefined;
      SingIn: undefined;
      Details: DetailsParams;
      Tab: NavigatorScreenParams<BottomTabParamList>;
    }
  }
}
