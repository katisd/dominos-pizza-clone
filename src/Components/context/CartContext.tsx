import { createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  pizzas: Pizza[];
};

type Pizza = {
  DoughtAndSize: string;
  quantity: number;
  price: number;
};
type ShoppingCartContextTouse = {
  getListOfPizzas: () => CartItem[];
  getListOfPizzasFromId: (id: number) => Pizza[];
  getPizzaFromIdAndDAS: (id: number, DoughtAndSize: string) => Pizza | null;
  increaseItemQuantity: (
    id: number,
    DoughtAndSize: string,
    price?: number
  ) => void;
  decreaseItemQuantity: (id: number, DoughtAndSize: string) => void;
  removeItemDAS: (id: number, DoughtAndSize: string) => void;
  removeItem: (id: number) => void;
  getSumPrice: () => string;
  getSumQuantity: () => number;
};
const ShoppingCartContext = createContext({} as ShoppingCartContextTouse);

// when use function
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// provider
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  function getListOfPizzas() {
    return cart;
  }
  function getListOfPizzasFromId(id: number) {
    return cart.find((pizza) => pizza.id == id)?.pizzas || [];
  }
  function increaseItemQuantity(
    id: number,
    DoughtAndSize: string,
    price?: number
  ) {
    setCart((currCart) => {
      // no pizza id have been added
      if (currCart.find((item) => item.id == id) == null) {
        const newPizza: Pizza = {
          DoughtAndSize: DoughtAndSize,
          quantity: 1,
          price: price ? price : 0,
        };
        return [...currCart, { id: id, pizzas: [newPizza] }];
      }
      //   threre is pizza id
      else {
        // no match dough and size
        if (
          currCart
            .find((item) => item.id == id)
            ?.pizzas.find((pizza) => pizza.DoughtAndSize == DoughtAndSize) ==
          null
        ) {
          return currCart.map((item) => {
            if (item.id == id) {
              return {
                ...item,
                pizzas: [
                  ...item.pizzas,
                  {
                    DoughtAndSize: DoughtAndSize,
                    quantity: 1,
                    price: price ? price : 0,
                  },
                ],
              };
            } else {
              return item;
            }
          });
        }
        // pizza with same id and DAS is already exist
        else {
          return currCart.map((item) => {
            if (item.id == id) {
              return {
                ...item,
                pizzas: item.pizzas.map((pizza) => {
                  if (pizza.DoughtAndSize == DoughtAndSize) {
                    return { ...pizza, quantity: pizza.quantity + 1 };
                  } else {
                    return pizza;
                  }
                }),
              };
            } else {
              return item;
            }
          });
        }
      }
    });
  }
  function decreaseItemQuantity(id: number, DoughtAndSize: string) {
    setCart((currCart) => {
      // no pizza id have been added
      if (currCart.find((item) => item.id == id) == null) {
        return currCart;
      }
      //   threre is pizza id
      else {
        // no match dough and size
        if (
          currCart
            .find((item) => item.id == id)
            ?.pizzas.find((pizza) => pizza.DoughtAndSize == DoughtAndSize) ==
          null
        ) {
          return currCart;
        }
        // pizza with same id and DAS is already exist
        else {
          return currCart.map((item) => {
            if (item.id == id) {
              return {
                ...item,
                pizzas: item.pizzas.map((pizza) => {
                  if (pizza.DoughtAndSize == DoughtAndSize) {
                    return { ...pizza, quantity: pizza.quantity - 1 };
                  } else {
                    return pizza;
                  }
                }),
              };
            } else {
              return item;
            }
          });
        }
      }
    });
  }
  function removeItemDAS(id: number, DoughtAndSize: string) {
    setCart((currCart) => {
      return currCart.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            pizzas: item.pizzas.filter(
              (pizza) => pizza.DoughtAndSize != DoughtAndSize
            ),
          };
        } else {
          return item;
        }
      });
    });
  }
  function removeItem(id: number) {
    setCart((currCart) => {
      return currCart.filter((item) => item.id != id);
    });
  }
  function getSumPrice() {
    return cart
      .reduce((acc, item) => {
        return (
          acc +
          item.pizzas.reduce((acc, pizza) => {
            return acc + pizza.quantity * pizza.price;
          }, 0)
        );
      }, 0)
      .toFixed(2);
  }
  function getSumQuantity() {
    return cart.reduce((acc, item) => {
      return (
        acc +
        item.pizzas.reduce((acc, pizza) => {
          return acc + pizza.quantity;
        }, 0)
      );
    }, 0);
  }
  function getPizzaFromIdAndDAS(id: number, DoughtAndSize: string) {
    return (
      cart
        .find((item) => item.id == id)
        ?.pizzas.find((pizza) => pizza.DoughtAndSize == DoughtAndSize) || null
    );
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getPizzaFromIdAndDAS,
        getListOfPizzas,
        getListOfPizzasFromId,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemDAS,
        removeItem,
        getSumPrice,
        getSumQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
