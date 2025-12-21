// src/icons.ts

// استورد بس الأيقونات اللي تحتاجها
import { faCoffee, faTrash, faArrowRight, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// ماب للأيقونات المسموح استخدامها في المشروع
export const ICONS = {
  coffee: faCoffee,
  delete: faTrash,
  'arrow-right': faArrowRight,
  like: faHeart,
  twitter: faTwitter,
  sun: faSun,
  moon: faMoon
} as const;

export type IconName = keyof typeof ICONS;
