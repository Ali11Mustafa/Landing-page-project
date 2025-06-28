// types.ts
import { StaticImageData } from 'next/image';

export interface Service {
  title: string;
  description: string;
  icon: StaticImageData;
}
