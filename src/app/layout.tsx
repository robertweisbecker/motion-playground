// 'use client';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

import { Geist, Inter, Geist_Mono } from 'next/font/google';
import './globals.css';
import './components.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LucideChevronDown, LucideComponent, LucideDot, LucideHome } from 'lucide-react';
import { NavLink } from '@/components/ui/nav-link';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const geistSans = Geist({
	variable: '--font-geist-sans',
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

export const metadata: Metadata = {
	title: 'Playground',
	description: 'Fun x games',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const pathname = usePathname();
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<nav className="flex gap-px p-2 text-xl">
						<Button asChild variant="ghost">
							<NavLink href="/" label="Home" />
						</Button>
						<Button asChild variant="ghost">
							<NavLink href="/components" label="Components" />
						</Button>
						{/* <Button asChild variant="ghost">
							<NavLink href="/theme" label="Theme" />
						</Button> */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost">
									Demos <LucideChevronDown />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem asChild>
									<NavLink href="/demos">Stack</NavLink>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<NavLink href="/tabs">Tabs</NavLink>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</nav>
					{children}
					<footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
						<a
							className="flex items-center gap-2 hover:underline hover:underline-offset-4"
							href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								aria-hidden
								src="/motion-playground/file.svg"
								alt="File icon"
								width={16}
								height={16}
							/>
							Learn
						</a>
						<a
							className="flex items-center gap-2 hover:underline hover:underline-offset-4"
							href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								aria-hidden
								src="/motion-playground/window.svg"
								alt="Window icon"
								width={16}
								height={16}
							/>
							Examples
						</a>
						<a
							className="flex items-center gap-2 hover:underline hover:underline-offset-4"
							href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								aria-hidden
								src="/motion-playground/globe.svg"
								alt="Globe icon"
								width={16}
								height={16}
							/>
							Go to nextjs.org →
						</a>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
