import { DetailsParams } from '@/@types/navigation';
import { BoxEmpty } from '@/components/BoxEmpty';
import { Loading } from '@/components/Loading/Loading';
import { SafeAreaView } from '@/components/SafeAreaView';
import { useServiceNotice } from '@/hooks/useServiceNotice';
import { useTheme } from '@/hooks/useTheme';
import { ContentDto } from '@/models/ContentDto';
import { NoticeDto } from '@/models/NoticeDto';
import { useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Content } from './components/Content';
import { Header } from './components/Header';
export const Details = () => {
  const { size } = useTheme();
  const [notice, setNotice] = useState<NoticeDto>({} as NoticeDto);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const route = useRoute();
  const { id } = route.params as DetailsParams;
  const { serviceNotice } = useServiceNotice();
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const { data } = await serviceNotice.getOneNotice(id);
        setNotice(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotice();
  }, [id]);
  const renderItem: ListRenderItem<ContentDto> = useCallback(({ item }) => {
    return <Content content={item} />;
  }, []);
  if (isLoading) return <Loading />;
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <FlatList
        ListHeaderComponent={<Header notice={notice} />}
        data={notice.content}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <BoxEmpty height={size[5]} />}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
};
