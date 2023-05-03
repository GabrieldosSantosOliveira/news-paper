import { ForgotPassword } from '@/screens/ForgotPassword/ForgotPassword';
import { Help } from '@/screens/Help/Help';
import { SingIn } from '@/screens/SingIn/SingIn';
import { SingUp } from '@/screens/SingUp/SingUp';
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
