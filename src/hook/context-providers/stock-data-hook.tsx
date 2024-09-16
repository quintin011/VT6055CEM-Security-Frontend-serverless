import { GOOGStock, NADAStock, TSLAStock } from "@assets/data/stock";
import { TradeType } from "@constants/enum/trade.enum";
import { StockHold } from "@type/stock-type";
import React, { createContext, useEffect, useState } from "react";

type StockDataType = {
  stockDatas: StockHold[]
  updateStockData: (data: StockHold | undefined, tradeType: TradeType) => void;
};

const StockData = createContext<StockDataType>({} as StockDataType);

type StockDataProviderProps = {
  children: React.ReactNode;
};

export const StockDataProvider = ({ children }: StockDataProviderProps) => {
  const [stockDatas, setStockDatas] = useState<StockHold[]>([])

  useEffect(() => {
    setStockDatas(pre => {
      return processStockHoldData([
        {
          stock: NADAStock,
          quantity: 50,
          percent: 0,
        },
        {
          stock: GOOGStock,
          quantity: 30,
          percent: 0,
        },
        // {
        //   stock: TSLAStock,
        //   quantity: 100,
        //   percent: 0,
        // },
      ])
    })
  }, [])

  const processStockHoldData = (array: StockHold[]) => {
    let totalQuantity = 0
    array.forEach(mItem => {
      totalQuantity = totalQuantity + mItem.quantity
    })

    array.forEach(mItem => {
      if(totalQuantity > 0) {
        let mPercent = parseFloat(((mItem.quantity / totalQuantity) * 100).toFixed(2))
        mItem.percent = isNaN(mPercent) ? 0 : mPercent
      } else {
        mItem.percent = 0
      }
    })
    return array.sort(function(x, y) {
      if (x.quantity > y.quantity) {
        return -1;
      }
      if (x.quantity < y.quantity) {
        return 1;
      }
      return 0;
    })
  }
  
  const updateStockData = (data: StockHold | undefined, tradeType: TradeType) => {
    let existStock = stockDatas.find(i => i.stock.symbol == data?.stock.symbol)
    switch(tradeType) {
      case 'BUY':
      if(existStock) {
        existStock.quantity = existStock.quantity + (data?.quantity ?? 0)
      } else {
        existStock = data
      }
      break
      case 'SELL':
        if(existStock) {
          existStock.quantity = existStock.quantity - (data?.quantity ?? 0)
          if(existStock.quantity < 0) {
            existStock.quantity = 0
          }
        } else {
          existStock = data
        }
      break
    }
    setStockDatas(pre => {
      let newPre: StockHold[] = pre.filter(mItem => mItem.stock.symbol != existStock?.stock.symbol)
      if(existStock && existStock?.quantity > 0) {
        newPre.push(existStock)
      }
      return processStockHoldData(newPre)
    })
  };

  return (
    <StockData.Provider
      value={{
        stockDatas,
        updateStockData,
      }}
    >
      {children}
    </StockData.Provider>
  );
};

export const useStockDataHook = () => React.useContext(StockData);
