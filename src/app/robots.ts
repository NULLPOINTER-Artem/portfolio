import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    host: 'http://localhost:3000', // set correct frontend host
    sitemap: 'http://localhost:3000/sitemap.xml', // set correct frontend host
  }
}
