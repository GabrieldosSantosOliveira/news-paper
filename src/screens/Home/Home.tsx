import { BoxEmpty, LoadingFlatList, Notice, SafeAreaView } from '@/components';
import { useServiceNotice, useTheme } from '@/hooks';
import { NoticeDto } from '@/models';
import { removeDuplicatedNotices } from '@/utils/notice/removeDuplicatedNotices';
import { useState, useEffect, useCallback } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';

import { Header, ListEmptyNotice, LoadingNotices } from './components';

export interface FooterLoadingProps {
  isLoading: boolean;
}
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);

  const [page, setPage] = useState(1);
  const [notices, setNotices] = useState<NoticeDto[]>([]);

  const { serviceNotice } = useServiceNotice();
  const {
    theme: { size },
  } = useTheme();
  async function fetchNoticies() {
    try {
      if (!hasMoreData) return;
      const { data } = await serviceNotice.getAllNotice(page);
      const current = data.data;
      setNotices((prev) => removeDuplicatedNotices(prev, current));
      setPage((prev) => prev + 1);
      if (!data.info.next) {
        setHasMoreData(false);
      }
    } catch {
      setHasMoreData(false);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchNoticies();
  }, []);
  const renderItem: ListRenderItem<NoticeDto> = useCallback(({ item }) => {
    return <Notice notice={item} />;
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <Header />
      {isLoading ? (
        <LoadingNotices />
      ) : (
        <FlatList
          refreshControl={<RefreshControl refreshing={false} />}
          contentContainerStyle={[{ paddingBottom: 20 }]}
          data={notices}
          renderItem={renderItem}
          keyExtractor={({ id }) => id}
          onEndReached={fetchNoticies}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={<ListEmptyNotice />}
          ItemSeparatorComponent={() => (
            <BoxEmpty width="100%" height={size[15]} />
          )}
          ListFooterComponent={<LoadingFlatList isLoading={hasMoreData} />}
        />
      )}
    </SafeAreaView>
  );
};
