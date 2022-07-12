import { Component, onMount } from "solid-js";
import { produce } from "solid-js/store";
import { ThemeProvider } from "@suid/material/styles";
import { theme, TileType } from "./config";
import Nav from "./nav/Nav";
import Main from "./main/Main";
import Footer from "./footer/Footer";

import { setStore as orderbookstore, setLong, setShort } from "./main/Orderbook";
import { setStore, OrderType } from "./main/Order";
import { push } from "./main/Trade";

const App: Component = () => {
  onMount(() => {
    orderbookstore("price", 102450);
    orderbookstore("priceTileType", TileType.Short);
    setLong([
      { price: 11, volume: 232 },
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
    ]);
    setShort([
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
      { price: 1213, volume: 232 },
    ]);
    setStore(
      produce((orders) => {
        orders.orders.push({
          spot_pairs: "BTC/USDT",
          order_type: OrderType.Limit,
          direction: "no",
          order_value: 100,
          order_price: 233,
          order_qty: 1,
          filled_qty: 12,
          unfilled_qty: 9923,
          order_time: "today",
          order_id: 12,
        });
      })
    );
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
