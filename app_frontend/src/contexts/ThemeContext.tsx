import {
  useMemo,
  useState,
} from "react";

import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import { getTheme } from "../theme/theme";

import {
  ThemeContext,
} from "./theme.context";

type ThemeMode =
  | "light"
  | "dark";

export const ThemeProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [mode, setMode] =
    useState<ThemeMode>("dark");

  const toggleTheme = () => {
    setMode((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  };

  const theme = useMemo(
    () => getTheme(mode),
    [mode]
  );

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};