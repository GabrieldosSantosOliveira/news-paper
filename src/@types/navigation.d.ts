import { NavigatorScreenParams } from '@react-navigation/native';

export interface BottomTabParamList {
  Home: undefined;
  Category: undefined;
}
export interface DetailsParams {
  id: string;
}
export interface NoticesByCategoryParams {
  categoryTitle: string;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      NoticesByCategory: NoticesByCategoryParams;
      SingUp: undefined;
      ForgotPassword: undefined;
      Help: undefined;
      SingIn: undefined;
      Settings: undefined;
      Details: DetailsParams;
      Update: undefined;
      Tab: NavigatorScreenParams<BottomTabParamList>;
    }
  }
}
