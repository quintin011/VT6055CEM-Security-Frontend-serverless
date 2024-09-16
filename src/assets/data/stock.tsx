import { Stock } from "@type/stock-type";

export const TSLAStock: Stock = {
  symbol: "TSLA",
  updated_at: "2024-08-29T00:00:00Z",
  currbid: 12,
  currask: 14,
  lasttrade: 14,
  high_price: 16,
  low_price: 12,
  vol: 1024,
  other: {
    strokeColor: "#FF4E77",
    upDown: "+2.170 (0.98%)",
    company: "TESLA, INC.",
  },
};

export const NADAStock: Stock = {
  symbol: "NVDA",
  updated_at: "2024-08-29T00:00:00Z",
  currbid: 36,
  currask: 43,
  lasttrade: 43,
  high_price: 54,
  low_price: 36,
  vol: 2255,
  other: {
    strokeColor: "#4EAAFF",
    upDown: "+6.4 (1.22%)",
    company: "NVIDIA CORP",
  },
};

export const GOOGStock: Stock = {
  symbol: "GOOG",
  updated_at: "2024-08-29T09:00:00Z",
  currbid: 54,
  currask: 77,
  lasttrade: 77,
  high_price: 79,
  low_price: 54,
  vol: 3543,
  other: {
    strokeColor: "#FFBB00",
    upDown: "+1.2 (6.00%)",
    company: "ALPHABET INC-CL C",
  },
};

export const NoneStock: Stock = {
  symbol: "-",
  updated_at: "2024-08-29T09:00:00Z",
  currbid: 0,
  currask: 0,
  lasttrade: 0,
  high_price: 0,
  low_price: 0,
  vol: 0,
  other: {
    strokeColor: "#FFBB00",
    upDown: "",
    company: "-",
  },
};

export const exchangeBySymbol = (symbol: string) => {
  switch (symbol) {
    case "0001":
      return TSLAStock
    case "0002":
      return NADAStock
    case "0003":
      return GOOGStock
    default:
      return NoneStock
  }
};

export const stocks = [NADAStock, GOOGStock, TSLAStock];
