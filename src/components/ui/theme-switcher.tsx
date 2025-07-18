'use client';

import * as React from 'react';
import { MoonIcon, SunIcon, MonitorIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';

export function ModeToggle() {
	const [mounted, setMounted] = React.useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect ensures this runs only on the client side after hydration
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null; // Render nothing on the server to prevent hydration mismatches
	}

	return (
		<ToggleGroup
			variant="ghost"
			type="single"
			title="Color mode"
			defaultValue="system"
			value={theme}
		>
			<ToggleGroupItem
				onClick={() => setTheme('light')}
				value="light"
				// pressed={theme === 'light'}
				aria-label="Toggle light mode"
			>
				<SunIcon className="" />
			</ToggleGroupItem>
			<ToggleGroupItem
				onClick={() => setTheme('dark')}
				value="dark"
				// pressed={theme === 'dark'}
				aria-label="Toggle dark mode"
			>
				<MoonIcon className="" />
			</ToggleGroupItem>
			<ToggleGroupItem
				onClick={() => setTheme('system')}
				value="system"
				aria-label="Use system color mode"
			>
				<MonitorIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
