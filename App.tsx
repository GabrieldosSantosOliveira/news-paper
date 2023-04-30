import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { Loading, StatusBar } from '@/components';
import {
  AuthProvider,
  HttpServiceProvider,
  StorageProvider,
  ThemeProvider,
} from '@/contexts';
import { ToastProvider } from '@/contexts/ToastContext';
import { SingUp } from '@/screens/SingUp/SingUp';
import {
  useFonts,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from '@expo-google-fonts/lexend';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  const [isFontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Poppins_600SemiBold,
  });
  return (
    <HttpServiceProvider>
      <StorageProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <AuthProvider>
              <ToastProvider>
                <StatusBar />
                {isFontsLoaded ? <SingUp /> : <Loading />}
              </ToastProvider>
            </AuthProvider>
          </SafeAreaProvider>
        </ThemeProvider>
      </StorageProvider>
    </HttpServiceProvider>
  );
}
