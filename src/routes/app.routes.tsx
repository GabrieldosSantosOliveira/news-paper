import { Details } from '@/screens/Details/Details';
import { ForgotPassword } from '@/screens/ForgotPassword/ForgotPassword';
import { Help } from '@/screens/Help/Help';
import { NoticesByCategory } from '@/screens/NoticesByCategory/NoticesByCategory';
import { Settings } from '@/screens/Settings/Settings';
import { SingIn } from '@/screens/SingIn/SingIn';
import { SingUp } from '@/screens/SingUp/SingUp';
import { Update } from '@/screens/Update/Update';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Tab } from './Tab';
const { Navigator, Screen } = createStackNavigator();
export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
      <Screen name="SingUp" component={SingUp} />
      <Screen name="Tab" component={Tab} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="SingIn" component={SingIn} />
      <Screen name="Details" component={Details} />
      <Screen name="Settings" component={Settings} />
      <Screen name="NoticesByCategory" component={NoticesByCategory} />
      <Screen name="Update" component={Update} />

      <Screen
        name="Help"
        component={Help}
        options={{
          gestureEnabled: true,
          presentation: 'modal',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Navigator>
  );
};
