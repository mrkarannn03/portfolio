import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, Anton, Caveat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'
import localFont from "next/font/local"
import { Preloader } from '@/components/preloader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })
const manufacturingConsent = localFont({
  src: "./fonts/ManufacturingConsent-Regular.ttf",
  variable: "--font-logo",
})

export const metadata: Metadata = {
  title: 'Karan Singh — I love figuring stuff out',
  description:
    'Karan Singh — Freelancer. Full-stack developer and UX engineer building useful, beautiful and convertible products.',
  icons: {
    icon: [
      {
        url: '/light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/dark.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/light.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2f1ec' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${oswald.variable} ${anton.variable} ${caveat.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        try {
          var theme = localStorage.getItem("theme");
          var dark = theme === null ? true : theme === "dark";

          var root = document.documentElement;
          root.classList.toggle("dark", dark);
          root.classList.toggle("light", !dark);
        } catch (e) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        }
      })();
    `,
  }}
/>
      </head>
      <body
        className={`${manufacturingConsent.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <Preloader />
          <CustomCursor />
          {children}
        </ThemeProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
