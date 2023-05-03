import { Progressbar } from '@/components/Progressbar';
import { Text } from '@/components/Text';
import { useTheme } from '@/hooks/useTheme';
import { ISingInState, goBackScreen } from '@/redux/SingIn/singInSlice';
import { RootState } from '@/redux/SingIn/store';
import { Icons } from '@/styles/Icons';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
const HeaderBase = () => {
  const { colors, size } = useTheme();
  const { goBack, navigate } = useNavigation();
  const { progress, screen } = useSelector<RootState, ISingInState>(
    (state) => state.singIn,
  );
  const dispatch = useDispatch();
  return (
    <View
      style={{
        height: size[20],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 10,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          screen === 'FirstAndLastName' ? goBack() : dispatch(goBackScreen())
        }
      >
        <Icons.arrowLeft color={colors.text.primary} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Progressbar
          backgroundColor={colors.progressBar.primary}
          height={size[4]}
          progress={progress}
        />
      </View>
      <TouchableOpacity onPress={() => navigate('Help')}>
        <Text font="Roboto.400" size="xs" color="help">
          Ajuda
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export const Header = memo(HeaderBase);
