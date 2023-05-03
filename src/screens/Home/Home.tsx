import { BoxEmpty } from '@/components/BoxEmpty';
import { LoadingFlatList } from '@/components/Loading/LoadingFlatList';
import { Notice } from '@/components/Notice/Notice';
import { SafeAreaView } from '@/components/SafeAreaView';
import { useServiceNotice } from '@/hooks/useServiceNotice';
import { useTheme } from '@/hooks/useTheme';
import { NoticeDto } from '@/models/NoticeDto';
import { removeDuplicatedNotices } from '@/utils/notice/removeDuplicatedNotices';
import { useState, useEffect, useCallback } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';

import { Header } from './components/Header';
import { ListEmptyNotice } from './components/ListEmptyNotice';
import { LoadingNotices } from './components/LoadingNotices';

export interface FooterLoadingProps {
  isLoading: boolean;
}
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [notices, setNotices] = useState<NoticeDto[]>([]);

  const { serviceNotice } = useServiceNotice();
  const { size } = useTheme();

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
  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      setIsLoading(true);
      setHasMoreData(true);
      const { data } = await serviceNotice.getAllNotice(1);
      const current = data.data;
      setNotices(current);
      setPage(2);
      if (!data.info.next) {
        setHasMoreData(false);
      }
    } catch {
      setHasMoreData(false);
      setNotices([]);
    } finally {
      setIsRefreshing(false);
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <Header />
      {isLoading ? (
        <LoadingNotices />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
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
