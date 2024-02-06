import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Artem Orlov - Front Developer | Portfolio',
    short_name: 'A.Orlov - FD | Portfolio',
    description: "Artem Orlov - Frontend Developer's Portfolio",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png"
      },
    ],
  }
}
