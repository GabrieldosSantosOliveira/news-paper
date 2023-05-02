import { NavigatorScreenParams } from '@react-navigation/native';

interface BottomTabParamList {
  Home: undefined;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SingUp: undefined;
      ForgotPassword: undefined;
      Help: undefined;
      Tab: NavigatorScreenParams<BottomTabParamList>;
    }
  }
}
