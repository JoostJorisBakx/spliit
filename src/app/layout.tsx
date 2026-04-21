import { ApplePwaSplash } from '@/app/apple-pwa-splash'
import { LocaleSwitcher } from '@/components/locale-switcher'
import { ProgressBar } from '@/components/progress-bar'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { env } from '@/lib/env'
import { TRPCProvider } from '@/trpc/client'
import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import Link from 'next/link'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: 'Spliit - spliit.jorisbakx.nl',
    template: '%s - Spliit',
  },
  description:
    'Private expense splitting for shared dinners, trips, and households on jorisbakx.nl.',
  openGraph: {
    title: 'Spliit - spliit.jorisbakx.nl',
    description:
      'Private expense splitting for shared dinners, trips, and households on jorisbakx.nl.',
    images: `/banner.png`,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    images: `/banner.png`,
    title: 'Spliit - spliit.jorisbakx.nl',
    description:
      'Private expense splitting for shared dinners, trips, and households on jorisbakx.nl.',
  },
  appleWebApp: {
    capable: true,
    title: 'Spliit',
  },
  applicationName: 'Spliit',
  icons: [
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
}

function Content({ children }: { children: React.ReactNode }) {
  const t = useTranslations()
  return (
    <TRPCProvider>
      <header className="sticky left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b bg-background/90 px-4 backdrop-blur-md after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-primary/45 after:via-[#9966ff]/35 after:to-[hsl(var(--success))]/45 sm:px-8">
        <div className="flex items-center gap-3">
          <Link
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            href="https://jorisbakx.nl"
          >
            ← jorisbakx.nl
          </Link>
          <span className="text-border">|</span>
          <Link
            className="font-display text-sm font-semibold text-foreground transition-colors hover:text-primary sm:text-base"
            href="/"
          >
            Spliit
          </Link>
        </div>
        <div role="navigation" aria-label="Menu" className="flex">
          <ul className="flex items-center gap-1 text-sm">
            <li>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-muted-foreground hover:text-foreground"
              >
                <Link href="/groups">{t('Header.groups')}</Link>
              </Button>
            </li>
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </header>

      <div className="flex flex-1 flex-col">{children}</div>

      <footer className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-3 border-t px-4 py-6 text-xs text-muted-foreground sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="https://jorisbakx.nl"
            className="transition-colors hover:text-foreground"
          >
            jorisbakx.nl
          </Link>
          <span className="text-border">·</span>
          <Link
            href="/"
            className="font-display text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Spliit
          </Link>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <span>Private shared expenses</span>
          <span className="[&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a:hover]:text-foreground">
            {t.rich('Footer.builtBy', {
              author: (txt) => (
                <a href="https://scastiel.dev" target="_blank" rel="noopener">
                  {txt}
                </a>
              ),
              source: (txt) => (
                <a
                  href="https://github.com/spliit-app/spliit/graphs/contributors"
                  target="_blank"
                  rel="noopener"
                >
                  {txt}
                </a>
              ),
            })}
          </span>
        </div>
      </footer>
      <Toaster />
    </TRPCProvider>
  )
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <ApplePwaSplash icon="/logo-with-text.png" color="#0a0a0c" />
      <body className="flex min-h-[100dvh] flex-col items-stretch bg-background">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense>
              <ProgressBar />
            </Suspense>
            <Content>{children}</Content>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
