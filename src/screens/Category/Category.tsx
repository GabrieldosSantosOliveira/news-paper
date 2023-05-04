import { Header } from '@/components/Header';
import { SafeAreaView } from '@/components/SafeAreaView';
import { useTheme } from '@/hooks/useTheme';
import { categorys } from '@/utils/categorys/categorys';
import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Option } from './components/Option';
export const Category = () => {
  const { colors } = useTheme();

  const renderItem: ListRenderItem<(typeof categorys)[0]> = useCallback(
    ({ item: { icon: Icon, categoryTitle } }) => {
      return (
        <Option
          categoryTitle={categoryTitle}
          icon={<Icon color={colors.text.primary} />}
        />
      );
    },
    [],
  );
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <Header />
      <FlatList
        data={categorys}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
      />
    </SafeAreaView>
  );
};
