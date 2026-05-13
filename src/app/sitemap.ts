import { MetadataRoute } from 'next'
import { collections } from '@/data/collections'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextmovegroupexport.com'
 
  const collectionUrls = Object.keys(collections).map((id) => ({
    url: `${baseUrl}/collections/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...collectionUrls,
  ]
}
