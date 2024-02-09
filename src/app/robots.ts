import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    host: process.env.NEXT_PUBLIC_FRONTEND_HOST_URL, // set correct frontend host
    sitemap: `${process.env.NEXT_PUBLIC_FRONTEND_HOST_URL}sitemap.xml`, // set correct frontend host
  }
}
