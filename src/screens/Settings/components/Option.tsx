import { Text } from '@/components/Text';
import { useTheme } from '@/hooks/useTheme';
import { FC, ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
export interface OptionProps {
  icon: ReactNode;
  text: string;
  onPress: () => void;
}
export const Option: FC<OptionProps> = ({ icon, onPress, text }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          borderBottomWidth: 1,
          borderColor: colors.text.primary,
          paddingVertical: 15,
        }}
      >
        {icon}
        <Text font="Poppins.600" size="sm">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
