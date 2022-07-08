import { createTheme } from "@suid/material/styles";

import type { PaletteColor } from "@suid/material/styles/createPalette";
import { ChartOptions, ColorType, DeepPartial, LineStyle, CrosshairMode } from "lightweight-charts";
import { JSXElement } from "solid-js";
import { JSX } from "solid-js";

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
      primary: "#eeeeee",
      secondary: "#cccccc",
      disabled: "#999999",
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
