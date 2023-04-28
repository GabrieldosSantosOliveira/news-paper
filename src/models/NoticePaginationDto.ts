import { InfoDto } from './InfoDto';
import { NoticeDto } from './NoticeDto';

export interface NoticePaginationDto {
  info: InfoDto;
  data: NoticeDto[];
}
