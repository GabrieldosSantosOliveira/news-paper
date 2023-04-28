import { AuthorDto } from './AuthorDto';
import { CategoryDto } from './CategoryDto';
import { ContentDto } from './ContentDto';

export interface NoticeDto {
  id: string;
  author: AuthorDto;
  category: CategoryDto;
  content: ContentDto[];
  createdAt: string;
  description: string;
  image: string;
  title: string;
  updatedAt: string;
}
