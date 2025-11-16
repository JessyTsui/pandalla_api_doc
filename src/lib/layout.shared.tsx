import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { layoutConfig } from '@/app/layout.config';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Pandalla API',
    },
    links: layoutConfig.links,
  };
}
