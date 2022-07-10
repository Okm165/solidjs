import { createSignal, JSX, JSXElement } from "solid-js";

import { createTheme } from "@suid/material/styles";
import { PaletteColor } from "@suid/material/styles/createPalette";

import { ChartOptions, ColorType, DeepPartial, LineStyle, CrosshairMode } from "lightweight-charts";

declare module "@suid/material/styles/createTheme" {
  interface ThemeInput {
    borders: PaletteColor;
    bars: { rising: string; falling: string };
  }
}

declare module "@suid/material/styles/createTheme" {
  interface Theme {
    borders: PaletteColor;
    bars: { rising: string; falling: string };
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
      primary: "#cccccc",
      secondary: "#999999",
      disabled: "#222222",
    },
    background: {
      paper: "#1a237e",
      default: "#050312",
    },
  },
  borders: {
    // light: "#3d3770",
    light: "#2121e0",
    main: "#0e1244",
    dark: "#00001f",
    contrastText: null,
  },
  bars: {
    rising: "#26a69a",
    falling: "#ef5350",
  },
});

export const chartOptions: DeepPartial<ChartOptions> = {
  width: 0,
  height: 0,
  watermark: {
    color: theme.palette.text.primary + "10",
    visible: true,
    text: "cebulion",
    fontSize: 70,
  },
  layout: {
    background: {
      type: ColorType.Solid,
      color: theme.palette.background.default + "e0",
    },
    textColor: theme.palette.text.primary + "ee",
  },
  crosshair: {
    mode: CrosshairMode.Normal,
  },
  grid: {
    vertLines: {
      color: theme.palette.background.paper + "80",
      style: LineStyle.Dashed,
    },
    horzLines: {
      color: theme.palette.background.paper + "80",
      style: LineStyle.Dashed,
    },
  },
};

export interface DefaultProps {
  id?: string;
  style?: JSX.CSSProperties;
  class?: string;
  children?: JSXElement;
}

export interface Accuracy {
  price: number;
  volume_asset: number;
  volume_base?: number;
}

export enum TileType {
  Long,
  Short,
}

export interface OrderBookData {
  price: number;
  volume: number;
}

export interface TransactionData {
  price: number;
  volume: number;
  type: TileType;
  time: Date;
}

export const asset = "BTC";
export const base = "USDT";

export const [short, setShort] = createSignal<OrderBookData[]>([
  { price: 21792.13, volume: 0.00223 },
  { price: 21792.08, volume: 0.00772 },
  { price: 21791.98, volume: 0.00326 },
  { price: 21791.84, volume: 0.45926 },
  { price: 21791.34, volume: 0.00066 },
  { price: 21791.32, volume: 0.00061 },
  { price: 21791.25, volume: 0.03961 },
  { price: 21790.9, volume: 0.00577 },
  { price: 21790.89, volume: 0.114 },
  { price: 21790.61, volume: 0.55 },
  { price: 21790.57, volume: 0.01111 },
  { price: 21790.57, volume: 0.02111 },
  { price: 21790.57, volume: 0.01231 },
  { price: 21790.57, volume: 0.01123231 },
  { price: 21790.57, volume: 0.06111 },
  { price: 21790.57, volume: 0.41111 },
  { price: 21790.57, volume: 0.11111 },
  { price: 21790.57, volume: 0.21111 },
  { price: 21790.57, volume: 0.31111 },
  { price: 21790.57, volume: 0.01123231 },
  { price: 21790.57, volume: 0.06111 },
  { price: 21790.57, volume: 0.41111 },
  { price: 21790.57, volume: 0.11111 },
  { price: 21790.57, volume: 0.21111 },
  { price: 21790.57, volume: 0.31111 },
]);

export const [long, setLong] = createSignal<OrderBookData[]>([
  { price: 21814.81, volume: 0.00072 },
  { price: 21814.77, volume: 0.03 },
  { price: 21814.14, volume: 0.00083 },
  { price: 21813.98, volume: 0.45879 },
  { price: 21813.85, volume: 0.22 },
  { price: 21813.63, volume: 0.00069 },
  { price: 21813.62, volume: 0.01168 },
  { price: 21812.97, volume: 0.00765 },
  { price: 21812.75, volume: 0.00061 },
  { price: 21812.43, volume: 0.55 },
  { price: 21812.32, volume: 0.04473 },
  { price: 21811.66, volume: 0.00117 },
  { price: 21811.66, volume: 0.00117 },
  { price: 21811.66, volume: 0.00117 },
  { price: 21811.66, volume: 0.00817 },
  { price: 21811.66, volume: 0.10117 },
  { price: 21811.66, volume: 0.20117 },
  { price: 21811.66, volume: 0.30117 },
  { price: 21811.66, volume: 0.00117 },
  { price: 21811.66, volume: 0.00117 },
  { price: 21811.66, volume: 0.00817 },
  { price: 21811.66, volume: 0.10117 },
  { price: 21811.66, volume: 0.20117 },
  { price: 21811.66, volume: 0.30117 },
  { price: 21811.66, volume: 0.00117 },
  { price: 21811.66, volume: 0.00117 },
  { price: 21811.66, volume: 0.00817 },
  { price: 21811.66, volume: 0.10117 },
  { price: 21811.66, volume: 0.20117 },
  { price: 21811.66, volume: 0.30117 },
]);

export const [transactions, setTransactions] = createSignal<TransactionData[]>([
  { price: 21814.81, type: TileType.Long, volume: 0.00072, time: new Date(Date.now()) },
  { price: 21814.77, type: TileType.Long, volume: 0.03, time: new Date(Date.now()) },
  { price: 21814.14, type: TileType.Short, volume: 0.00083, time: new Date(Date.now()) },
  { price: 21813.98, type: TileType.Long, volume: 0.45879, time: new Date(Date.now()) },
  { price: 21813.85, type: TileType.Long, volume: 0.22, time: new Date(Date.now()) },
  { price: 21813.63, type: TileType.Short, volume: 0.00069, time: new Date(Date.now()) },
  { price: 21813.62, type: TileType.Long, volume: 0.01168, time: new Date(Date.now()) },
  { price: 21812.97, type: TileType.Long, volume: 0.00765, time: new Date(Date.now()) },
  { price: 21812.75, type: TileType.Long, volume: 0.00061, time: new Date(Date.now()) },
  { price: 21812.43, type: TileType.Long, volume: 0.55, time: new Date(Date.now()) },
  { price: 21812.32, type: TileType.Short, volume: 0.04473, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00817, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.10117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.20117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.30117, time: new Date(Date.now()) },
  { price: 21814.81, type: TileType.Long, volume: 0.00072, time: new Date(Date.now()) },
  { price: 21814.77, type: TileType.Long, volume: 0.03, time: new Date(Date.now()) },
  { price: 21814.14, type: TileType.Short, volume: 0.00083, time: new Date(Date.now()) },
  { price: 21813.98, type: TileType.Long, volume: 0.45879, time: new Date(Date.now()) },
  { price: 21813.85, type: TileType.Long, volume: 0.22, time: new Date(Date.now()) },
  { price: 21813.63, type: TileType.Short, volume: 0.00069, time: new Date(Date.now()) },
  { price: 21813.62, type: TileType.Long, volume: 0.01168, time: new Date(Date.now()) },
  { price: 21812.97, type: TileType.Long, volume: 0.00765, time: new Date(Date.now()) },
  { price: 21812.75, type: TileType.Long, volume: 0.00061, time: new Date(Date.now()) },
  { price: 21812.43, type: TileType.Long, volume: 0.55, time: new Date(Date.now()) },
  { price: 21812.32, type: TileType.Short, volume: 0.04473, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00817, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.10117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.20117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.30117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00817, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.10117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.20117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.30117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00817, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.10117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.20117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.30117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Long, volume: 0.00817, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.10117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.20117, time: new Date(Date.now()) },
  { price: 21811.66, type: TileType.Short, volume: 0.30117, time: new Date(Date.now()) },
]);
