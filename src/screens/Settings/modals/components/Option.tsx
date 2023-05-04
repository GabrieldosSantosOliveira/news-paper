import { Text } from '@/components/Text';
import { useTheme } from '@/hooks/useTheme';
import { FC, ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
export interface OptionProps {
  icon: ReactNode;
  title: string;
  onPress: () => void;
  isSelect: boolean;
}
export const Option: FC<OptionProps> = ({ icon, title, onPress, isSelect }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 25,
          borderColor: colors.text.primary,
          borderBottomWidth: 1,
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {icon}
          <Text size="sm" font="Lexend.500">
            {title}
          </Text>
        </View>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 999,
            backgroundColor: isSelect
              ? colors.text.primary
              : colors.background.primary,
            borderColor: colors.text.primary,
            borderWidth: 4,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
