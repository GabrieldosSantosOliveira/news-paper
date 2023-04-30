import { ButtonGoogle } from '@/components';
import { useAuth, useTheme } from '@/hooks';
import { View, Text, TouchableOpacity } from 'react-native';
export const Footer = () => {
  const {
    theme: { colors, fontSize, fonts },
  } = useTheme();
  const { singUpWithGoogleProvider, authorLoading } = useAuth();

  return (
    <View style={{ paddingHorizontal: 20, paddingBottom: 40, gap: 20 }}>
      <ButtonGoogle
        onPress={singUpWithGoogleProvider}
        isLoading={authorLoading}
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
