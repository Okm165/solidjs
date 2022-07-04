import type { Component } from "solid-js";
import { createTheme, ThemeProvider } from "@suid/material/styles";

import type { PaletteColor } from "@suid/material/styles/createPalette";
import Nav from "./nav/Nav";
import Main from "./main/Main";
import Footer from "./footer/Footer";

declare module "@suid/material/styles/createTheme" {
  interface ThemeInput {
    borders: PaletteColor;
  }
}

declare module "@suid/material/styles/createTheme" {
  interface Theme {
    borders: PaletteColor;
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#d1d9ff",
      main: "#9fa8da",
      dark: "#6f79a8",
      contrastText: "#263238",
    },
    secondary: {
      light: "#c3fdff",
      main: "#90caf9",
      dark: "#5d99c6",
      contrastText: "#263238",
    },
    text: {
      primary: "#eee",
      secondary: "#ccc",
      disabled: "#999",
    },
    background: {
      paper: "#1a237e",
      default: "#050312",
    },
  },
  borders: {
    light: "#3d3770",
    main: "#0e1244",
    dark: "#00001f",
    contrastText: null,
  },
});

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <main
        class="p-0 m-0 w-screen h-screen"
        style={{
          "background-color": theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Nav />
        <Main />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
