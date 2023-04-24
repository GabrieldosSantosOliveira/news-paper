import { Loading, StatusBar } from '@/components';
import {
  HttpServiceProvider,
  StorageProvider,
  ThemeProvider,
} from '@/contexts';
import { Home } from '@/screens/Home/Home';
import {
  useFonts,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from '@expo-google-fonts/lexend';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { SafeAreaView } from 'react-native-safe-area-context';
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
          <StatusBar />
          <SafeAreaView style={{ flex: 1 }}>
            {isFontsLoaded ? <Home /> : <Loading />}
          </SafeAreaView>
        </ThemeProvider>
      </StorageProvider>
    </HttpServiceProvider>
  );
}
