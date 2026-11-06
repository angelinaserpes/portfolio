/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://angelinaserpes.vercel.app'),

  title: {
    template: '%s | Angelina Serpes',
    default: 'Angelina Serpes | Portfolio',
  },

  description:
    'Angelina Serpes, Computer Engineering student and creative technologist in Mumbai. Seven projects across Python, React and design, plus a hidden fit check.',

  generator: 'Next.js',
  applicationName: 'Angelina Serpes',

  referrer: 'origin-when-cross-origin',

  keywords: [
    'Angelina Serpes',
    'Portfolio',
    'Technology',
    'Development',
    'Design',
    'Projects',
  ],

  authors: [{ name: 'Angelina Serpes' }],
  creator: 'Angelina Serpes',
  publisher: 'Angelina Serpes',

  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Angelina Serpes',
    title: 'Angelina Serpes | Portfolio',
    description:
      'Computer Engineering student and creative technologist in Mumbai. Seven projects across Python, React and design.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Angelina Serpes portfolio' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Angelina Serpes | Portfolio',
    description: 'Computer Engineering student and creative technologist in Mumbai.',
    images: ['/og.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};