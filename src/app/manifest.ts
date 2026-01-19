import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Akram Hadid Portfolio',
    short_name: 'Akram Hadid',
    description: 'Professional Portfolio of Akram Hadid - Historian & Public Administration Professional',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo-akram.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
