import { SafeAreaView } from '@/components/SafeAreaView';
import { useSelectorForgotPassword } from '@/hooks/useSelectorForgotPassword';
import { store } from '@/redux/ForgotPassword/store';
import { KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';

import { Header } from './components/Header';
import { EmailForRecovery } from './screens/EmailForRecovery';
import { ResetPassword } from './screens/ResetPassword';
import { ValidationCode } from './screens/ValidationCode';

const ForgotPasswordBase = () => {
  const { screen, progress } = useSelectorForgotPassword();
  const screens = {
    EmailForRecovery: EmailForRecovery,
    ResetPassword: ResetPassword,
    ValidationCode: ValidationCode,
  };
  const Screen = screens[screen];
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header progress={progress} />
        <Screen />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export const ForgotPassword = () => {
  return (
    <Provider store={store}>
      <ForgotPasswordBase />
    </Provider>
  );
};
