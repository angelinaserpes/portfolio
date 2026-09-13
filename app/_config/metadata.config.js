/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('http://localhost:3000'),

  title: {
    template: '%s | Angelina Serpes',
    default: 'Angelina Serpes | Portfolio',
  },

  description:
    'The personal portfolio of Angelina Serpes — projects, creative work, and digital experiences.',

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

  robots: {
    index: false,
    follow: false,
  },
};