import { ThemeContext, ThemeNames } from '../context/theme';
import { useState } from 'react';
import { light, base } from '../theme';

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeNames>('light');

  const toggleTheme = () => {
    setSelectedTheme((prevValue) => (prevValue === 'light' ? 'dark' : 'light'));
  };

  const colorMode = selectedTheme === 'light' ? light.class : light.class;
  return (
    <ThemeContext.Provider
      value={{
        theme: selectedTheme,
        toggleTheme,
      }}
    >
      <div className={`${base.class} ${colorMode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
