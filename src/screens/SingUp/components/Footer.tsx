import { ButtonGoogle } from '@/components/Button/ButtonGoogle';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/useToast';
import { useNavigation } from '@react-navigation/native';
import { memo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const FooterBase = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { colors, fontSize, fonts } = useTheme();

  const { navigate } = useNavigation();
  const { singUpWithGoogleProvider } = useAuth();
  const toast = useToast();
  const handleSingUpWithGoogleProvider = async () => {
    try {
      setIsLoading(true);
      await singUpWithGoogleProvider();
      toast.clear();
      navigate('Tab', {
        screen: 'Home',
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.show({
          type: 'error',
          message: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={{ paddingHorizontal: 20, paddingBottom: 40, gap: 20 }}>
      <ButtonGoogle
        onPress={handleSingUpWithGoogleProvider}
        isLoading={isLoading}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: fonts.Roboto[500],
            fontSize: fontSize[15],
            color: colors.text.primary,
          }}
        >
          Oops não possuo cadastro?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: fonts.Roboto[500],
              fontSize: fontSize[15],
              color: colors.text.help,
            }}
          >
            {' '}
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const Footer = memo(FooterBase);
