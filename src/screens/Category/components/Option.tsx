import { Text } from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import { FC, ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
export interface OptionProps {
  icon: ReactNode;
  categoryTitle: string;
}
export const Option: FC<OptionProps> = ({ categoryTitle, icon }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('NoticesByCategory', { categoryTitle })}
    >
      <View style={{ flexDirection: 'row', gap: 20, paddingVertical: 20 }}>
        {icon}
        <Text font="Poppins.600">{categoryTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
