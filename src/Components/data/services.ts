// servicesData.ts
import { Service } from "../types/services";

import VideoMaking from '../../../public/ourServices/VideoMaking.png';
import SocialMediaMarketing from '../../../public/ourServices/SocialMediaMarketing.png';
import MarketingStrategy from '../../../public/ourServices/MarketingStrategy.png';
import EmailMarketing from '../../../public/ourServices/EmailMarketing.png';
import ContentWriting from '../../../public/ourServices/ContentWriting.png';
import Branding from '../../../public/ourServices/Branding.png';

export const services: Service[] = [
  {
    title: 'Video Making',
    description: 'Random Content',
    icon: VideoMaking,
  },
  {
    title: 'Branding',
    description: 'Random Content to fill the blank content',
    icon: Branding,
  },
  {
    title: 'Marketing Strategy',
    description: 'Random Content to fill the blank content',
    icon: MarketingStrategy,
  },
  {
    title: 'Email Marketing',
    description: 'Random Content',
    icon: EmailMarketing,
  },
  {
    title: 'Social Media Managing',
    description: 'Random Content to fill the blank content',
    icon: SocialMediaMarketing,
  },
  {
    title: 'Content Writing',
    description: 'Random Content to fill the blank content',
    icon: ContentWriting,
  },
];
