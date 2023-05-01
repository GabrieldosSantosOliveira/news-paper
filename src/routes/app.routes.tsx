import { SingUp } from '@/screens/SingUp/SingUp';
import { createStackNavigator } from '@react-navigation/stack';

import { Tab } from './Tab';
const { Navigator, Screen } = createStackNavigator();
export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
      <Screen name="SingUp" component={SingUp} />
      <Screen name="Tab" component={Tab} />
    </Navigator>
  );
};
