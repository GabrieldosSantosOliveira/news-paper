import { NoticeDto } from '@/models';

export const removeDuplicatedNotices = (
  previous: NoticeDto[] = [],
  notice: NoticeDto[],
) => {
  const notices = {} as { [key: string]: NoticeDto };
  [...previous, ...notice].forEach((item) => {
    notices[item.id] = item;
  });
  return Object.values(notices);
};
