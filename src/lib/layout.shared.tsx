import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { layoutConfig } from '@/app/layout.config';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Dubrify API',
    },
    links: layoutConfig.links,
  };
}
