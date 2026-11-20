"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type Theme = {
  primary: string;
  secondary: string;
};

type ThemeContextValue = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  setPrimary: (primary: string) => void;
  setSecondary: (secondary: string) => void;
};

const defaultTheme: Theme = {
  primary: "#045199",
  secondary: "#2E211E",
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  initialTheme = defaultTheme,
}: {
  children: ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--brand-primary", theme.primary);
    root.style.setProperty("--brand-secondary", theme.secondary);
  }, [theme]);

  const setPrimary = (primary: string) =>
    setTheme((currentTheme) => ({ ...currentTheme, primary }));
  const setSecondary = (secondary: string) =>
    setTheme((currentTheme) => ({ ...currentTheme, secondary }));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, setPrimary, setSecondary }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}