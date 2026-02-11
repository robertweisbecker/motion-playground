// 'use client';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Mona_Sans, Inter, Geist_Mono, Onest } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

import './styles/globals.css';
import './styles/hues.css';
// import './styles/components.css';

import {
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  // SidebarRail, // imported from SideNav
  // SidebarTrigger, // imported from SideNav
} from '@/components/ui/sidebar';
import { SideNav } from '@/components/sidenav';

import { Header } from '@/components/header';
// import { TooltipProvider } from '@/components/ui/tooltip'; // imported from SideNav
import { ToastProvider } from '@/components/toast';
import { cn } from '@/lib/utils';

// disabled in favor of native mono
//
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// Fallback Inter v3 from Google
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

// Inter v4 from localFont
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
        className={`${inter.variable} ${Inter_Variable.variable} safe-area-inset-bottom relative min-h-[calc(100vh-env(safe-area-inset-bottom))] max-w-screen overflow-x-clip scroll-smooth bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <SidebarProvider>
              <SideNav />
              {/*  renders <main> */}
              <SidebarInset>
                <SidebarRail />
                <Header />
                <div
                  className={cn(
                    'lg:max-w-8xl isolate mx-auto w-full flex-1 items-stretch',
                    'px-8 pt-8 lg:px-16 lg:pt-12',
                    // 'overflow-y-auto',
                  )}
                >
                  {children}
                </div>
              </SidebarInset>
            </SidebarProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
