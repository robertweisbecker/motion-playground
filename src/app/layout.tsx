// 'use client';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Mona_Sans, Inter, Geist_Mono, Onest } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

import './styles/globals.css';
import './styles/components.css';

import {
  SidebarInset,
  SidebarProvider,
  // SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { SideNav } from '@/components/sidenav';

import { Header } from '@/components/header';

const monaSans = Mona_Sans({
  variable: '--font-mona',
  subsets: ['latin'],
});

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const Inter_Variable = localFont({
  variable: '--font-inter-var',
  display: 'swap',
  src: [
    { path: './fonts/InterVariable.woff2', style: 'normal' },
    { path: './fonts/InterVariable-Italic.woff2', style: 'italic' },
  ],
});

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Fun x games',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-title" content="bob.fyi" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script src="https://unpkg.com/ios-pwa-splash@1.0.0/cdn.min.js"></script>
        <script>iosPWASplash('/apple-touch-icon.png', '#ffffff');</script>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head> */}
      <body
        className={`${inter.variable} ${Inter_Variable.variable} bg-background relative min-h-screen max-w-screen overflow-x-clip scroll-smooth antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider className="">
            <SideNav />
            {/*  renders <main> */}
            <SidebarInset>
              <Header />
              <div className="mx-auto flex w-[calc(100vw-var(--sidebar-width))] max-w-5xl flex-1 flex-col items-stretch gap-4 px-4 py-16 sm:px-8 sm:pb-24 md:px-16">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
