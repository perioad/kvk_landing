import { MetadataRoute } from 'next';

export const dynamic = 'error';
export const dynamicParams = false;
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kvkarmane.ru';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
