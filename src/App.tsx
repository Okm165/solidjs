import { Component, onMount } from "solid-js";
import { ThemeProvider } from "@suid/material/styles";

import { theme } from "./config";
import Nav from "./nav/Nav";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <main
        class="flex flex-col p-0 m-0 w-screen h-screen"
        style={{
          "background-color": theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Nav class="flex-shrink-0" />
        <Main class="flex-1" />
        <Footer class="flex-shrink-0" />
      </main>
    </ThemeProvider>
  );
};

export default App;
