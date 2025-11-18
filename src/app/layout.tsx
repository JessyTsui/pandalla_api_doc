import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = localFont({
  src: [
    {
      path: '../fonts/inter-latin-wght-normal.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../fonts/inter-latin-wght-italic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
});

export const metadata: Metadata = {
  title: {
    default: 'Pandalla API Documentation',
    template: '%s | Pandalla API',
  },
  description: 'Comprehensive API documentation for Pandalla AI services. Learn how to integrate and use our AI APIs for your applications.',
  keywords: ['API', 'Documentation', 'Pandalla', 'AI', 'Machine Learning', 'Developer'],
  authors: [{ name: 'Pandalla AI' }],
  openGraph: {
    title: 'Pandalla API Documentation',
    description: 'Comprehensive API documentation for Pandalla AI services',
    url: 'https://docs.pandalla.ai',
    siteName: 'Pandalla API Docs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pandalla API Documentation',
    description: 'Comprehensive API documentation for Pandalla AI services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            enabled: true,
          }}
          theme={{
            enabled: true,
            defaultTheme: 'system',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
