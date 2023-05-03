import { SafeAreaView } from '@/components/SafeAreaView';
import { ISingInState } from '@/redux/SingIn/singInSlice';
import { RootState, store } from '@/redux/SingIn/store';
import { KeyboardAvoidingView } from 'react-native';
import { Provider, useSelector } from 'react-redux';

import { Header } from './components/Header';
import { EmailAndPassword } from './screens/EmailAndPassword';
import { FirstAndLastName } from './screens/FirstAndLastName';
const SingInBase = () => {
  const { screen } = useSelector<RootState, ISingInState>(
    (state) => state.singIn,
  );
  const screens = {
    EmailAndPassword,
    FirstAndLastName,
  };
  const Screen = screens[screen];
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <Screen />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export const SingIn = () => {
  return (
    <Provider store={store}>
      <SingInBase />
    </Provider>
  );
};
