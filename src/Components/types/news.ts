// components/News/newsTypes.ts
import { StaticImageData } from 'next/image';

export interface NewsItem {
  id: number;
  image: StaticImageData;
  title: string;
}
