import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
// import Footer from '@/components/Footer'
import { Navbar } from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollingBanner from '@/components/scrolling-banner'
import Script from 'next/script'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Alberta Colour Painting',
  description: 'Alberta Colour Painting',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    image: [
      'https://www.albertacolourpainting.com/images/best-of-the-best-homestars-award-winner-2024-white-version.png',
      'https://www.albertacolourpainting.com/images/bbb-A+-alberta-colour-painting.webp',
      'https://www.albertacolourpainting.com/images/google-reviews-4.9-rating.png',
    ],
    '@id': 'https://www.albertacolourpainting.com/',
    name: 'Alberta Colour Painting Ltd',
    hasMap:
      'https://www.google.com/maps/place/Alberta+Colour+Painting+Ltd./@50.9240786-113.9508035,15z/data=!4m6!3m5!1s0x5371773f98224b4f:0xb012918acd574a36!8m2!3d50.9240786!4d-113.9508035!16s%2Fg%2F11h1dpzfmw?hl=en&entry=ttu',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '370 Brightonstone Green SE',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      postalCode: 'T2Z 0H1',
      addressCountry: 'Canada',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    url: 'https://www.albertacolourpainting.com/',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '122',
    },
    sameAs: [
      'https://www.instagram.com/albertacolourpaintingltd/?hl=en',
      'https://www.youtube.com/@albertacolourpainting',
      'https://www.facebook.com/albertacolourpainting/',
      'https://homestars.com/companies/YOUR_CORRECT_HOMESTARS_LINK',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Calgary',
    },
    telephone: '+15879666547',
    priceRange: 'Call for Quote',
  }
  return (
    <html lang='en'>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-DVMYRWNF3T`}
        strategy='afterInteractive'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DVMYRWNF3T');
      `,
        }}
      />
      <Script
        type='application/ld+json'
        id='json-ld'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></Script>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>
          {/* <ScrollingBanner /> */}
          <Navbar />
          {children}
          {/* It's better to place the script tag at the bottom of the body for performance */}
        </main>
        <Toaster />
        <Footer />
        <script
          type='module'
          dangerouslySetInnerHTML={{
            __html: `
              import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

              const swiper = new Swiper('.swiper-container', {
                // Swiper configuration options
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
