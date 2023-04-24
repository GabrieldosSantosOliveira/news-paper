import { View } from 'react-native';

import { Header } from './components/Header';
export const Home = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <Header height={50} opacity={1} />
    </View>
  );
};
