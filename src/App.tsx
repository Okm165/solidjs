import { Component, onMount } from "solid-js";

import { ThemeProvider } from "@suid/material/styles";
import { theme, TileType } from "./config";

import Nav from "./nav/Nav";
import Main from "./main/Main";
import Footer from "./footer/Footer";

import { setPrice, setPriceTileType, setOrderBookShortList, setOrderbookLongList } from "./main/Orderbook";
import { push } from "./main/Trades";

const App: Component = () => {
  onMount(() => {
    setPrice(102450);
    setPriceTileType(TileType.Short);
    setOrderBookShortList([
      { price: 11, volume: 232 },
      { price: 1213, volume: 232 },
    ]);
    setOrderbookLongList([
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
    ]);
    setOrderbookLongList([
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
    ]);
    push({ price: 12313, volume: 1313, type: TileType.Short, time: new Date(Date.now()) });
  });

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
