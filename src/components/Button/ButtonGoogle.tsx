import GoogleLogo from '@/assets/images/google-icon.svg';
import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { BoxEmpty } from '../BoxEmpty';
export interface ButtonGoogleProps {
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
}
export const ButtonGoogle: FC<ButtonGoogleProps> = ({
  onPress,
  isLoading = false,
}) => {
  const {
    theme: { size, colors, fontSize, fonts },
  } = useTheme();
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={{
        height: size[20],
        backgroundColor: colors.button.google,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 6,
      }}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#040F13" />
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              backgroundColor: colors.text.google,
              borderRadius: 8,
              padding: 8,
            }}
          >
            <GoogleLogo height={24} width={24} />
          </View>
          <Text
            style={{
              fontFamily: fonts.Roboto[500],
              fontSize: fontSize[15],
              color: colors.text.google,
            }}
          >
            Continuar com o Google
          </Text>
          <BoxEmpty />
        </View>
      )}
    </TouchableOpacity>
  );
};
