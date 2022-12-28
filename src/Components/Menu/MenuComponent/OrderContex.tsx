import React, { createContext, useContext, useState } from "react";

type Order = {
  pizzaId: number | null;
  setPizzaId: (pizzaId: number) => void;
  size: "Small" | "Medium" | "Large" | string;
  setSize: (size: string) => void;
  price: number;
  setPrice: (price: number) => void;
  ThinDough: "Normal" | "Thin" | string;
  setThinDough: (ThinDough: string) => void;
};

const OrderContex = createContext({} as Order);

export function useOrderContex() {
  return useContext(OrderContex);
}
type OrderProviderProps = {
  children: React.ReactNode;
};

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [pizzaId, setPizzaId] = useState(null as number | null);
  const [ThinDough, setThinDough] = useState("Normal");
  const [size, setSize] = useState("Small");
  const [price, setPrice] = useState(0);
  return (
    <OrderContex.Provider
      value={{
        pizzaId,
        setPizzaId,
        setThinDough,
        ThinDough,
        size,
        setSize,
        price,
        setPrice,
      }}
    >
      {children}
    </OrderContex.Provider>
  );
};
