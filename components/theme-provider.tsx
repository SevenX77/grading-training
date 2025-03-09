"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	try {
		return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
	} catch (error) {
		console.error("ThemeProvider error:", error);
		return <>{children}</>;
	}
}
