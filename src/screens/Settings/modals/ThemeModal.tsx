import { useTheme } from '@/hooks/useTheme';
import { Icons } from '@/styles/Icons';
import { View } from 'react-native';

import { Option } from './components/Option';
export const ThemeModal = () => {
  const {
    changeThemeToAutomatic,
    changeThemeToDark,
    changeThemeToLight,
    colors,
    currentTheme,
  } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.primary,
        paddingHorizontal: 20,
      }}
    >
      <Option
        icon={<Icons.moon color={colors.text.primary} />}
        title="Escuro"
        onPress={changeThemeToDark}
        isSelect={currentTheme === 'dark'}
      />
      <Option
        icon={<Icons.sun color={colors.text.primary} />}
        title="Claro"
        onPress={changeThemeToLight}
        isSelect={currentTheme === 'light'}
      />
      <Option
        icon={<Icons.moonLastQuarter color={colors.text.primary} />}
        title="Sistema"
        onPress={changeThemeToAutomatic}
        isSelect={currentTheme === 'automatic'}
      />
    </View>
  );
};
