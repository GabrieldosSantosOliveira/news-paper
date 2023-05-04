import { Loading } from '@/components/Loading/Loading';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { Icons } from '@/styles/Icons';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Header } from './components/Header';
import { Option } from './components/Option';
import { ThemeModal } from './modals/ThemeModal';
const SettingsBase = () => {
  const { author, singOut } = useAuth();
  const { size, colors } = useTheme();
  const { navigate } = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  if (!author) return <Loading />;
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            gap: 15,
          }}
        >
          <Image
            source={{ uri: author?.picture }}
            style={{
              height: size[50],
              width: size[50],
              borderRadius: 999,
              resizeMode: 'cover',
            }}
          />
          <Text size="xl" font="Lexend.500">
            Olá,
            <Text font="Lexend.500">
              {' ' + author.firstName + ' ' + author.lastName}
            </Text>
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Option
            icon={<Icons.moonLastQuarter color={colors.text.primary} />}
            text="Tema"
            onPress={() => {
              bottomSheetModalRef.current?.present();
            }}
          />
          <TouchableOpacity
            onPress={() => {
              singOut();
              navigate('Tab', { screen: 'Home' });
            }}
          >
            <Text
              font="Poppins.400"
              style={{ textDecorationLine: 'underline', marginTop: 25 }}
            >
              Sair da conta
            </Text>
          </TouchableOpacity>
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={[400]}
          backgroundStyle={{
            backgroundColor: colors.background.primary,
            borderTopWidth: 1,
            borderColor: colors.text.primary,
          }}
          handleIndicatorStyle={{ backgroundColor: colors.text.primary }}
        >
          <ThemeModal />
        </BottomSheetModal>
      </ScrollView>
    </SafeAreaView>
  );
};
export const Settings = gestureHandlerRootHOC(() => (
  <BottomSheetModalProvider>
    <SettingsBase />
  </BottomSheetModalProvider>
));
