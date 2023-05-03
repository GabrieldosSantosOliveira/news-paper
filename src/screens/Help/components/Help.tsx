import { Text } from '@/components/Text';
import { useTheme } from '@/hooks/useTheme';
import { FC, ReactNode, memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
export interface HelpProps {
  icon: ReactNode;
  title: string;
  description: string;
}
export const HelpBase: FC<HelpProps> = ({ icon, description, title }) => {
  const { size, colors } = useTheme();
  return (
    <TouchableOpacity>
      <View
        style={{
          height: size[75],
          borderWidth: 1,
          borderRadius: 4,
          borderColor: colors.input.primary.icon,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 30,
        }}
      >
        {icon}
        <Text font="Poppins.600" style={{ textAlign: 'center' }}>
          {title}
        </Text>
        <Text
          size="sm"
          font="Lexend.400"
          color="subTitle"
          style={{ textAlign: 'center' }}
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const Help = memo(HelpBase);
