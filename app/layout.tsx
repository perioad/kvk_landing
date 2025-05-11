import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import { Header } from '@/components/Header';

import './globals.css';

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'Коуч в кармане | AI-коучинг 24/7 для твоих задач',
  description:
    'Коуч в кармане - Ищи решение с AI-коучем: личные вопросы, быстрые советы, помощь 24/7 — всё в одном телеграм-боте!',
  keywords: [
    'коуч',
    'коучинг',
    'AI коуч',
    'онлайн коуч',
    'помощь AI',
    'советы AI',
    'личный коуч онлайн',
    'телеграм коуч',
    'бот психолог',
    'бот коучинг',
    'как решить проблему',
    'AI психолог',
    'виртуальный коучинг',
  ],
  metadataBase: new URL('https://www.kvkarmane.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Коуч в кармане | AI-коучинг 24/7 для твоих задач',
    description:
      'Коуч в кармане - Ищи решение с AI-коучем: личные вопросы, быстрые советы, помощь 24/7 — всё в одном телеграм-боте!',
    url: 'https://www.kvkarmane.ru',
    siteName: 'Коуч в кармане',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://www.kvkarmane.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Коуч в кармане - виртуальные коучи на базе AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Коуч в кармане | AI-коучинг 24/7 для твоих задач',
    description:
      'Коуч в кармане - Ищи решение с AI-коучем: личные вопросы, быстрые советы, помощь 24/7 — всё в одном телеграм-боте!',
    images: ['https://www.kvkarmane.ru/twitter-image.jpg'],
    creator: '@kvkarmane',
    site: '@kvkarmane',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Коуч в кармане' }],
  category: 'Коучинг',
  // verification: {
  //   google: 'google-site-verification-code', // Replace with your actual verification code
  //   yandex: 'yandex-verification-code', // Replace with your actual verification code
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Коуч в кармане',
              url: 'https://www.kvkarmane.ru',
              logo: 'https://www.kvkarmane.ru/logo.png',
              sameAs: ['https://t.me/k_v_karmane_bot'],
            }),
          }}
        />
      </head>
      <body className={`${mulish.variable} antialiased `}>
        <Header />
        <main className="w-full mt-[80px] max-w-screen-2xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
