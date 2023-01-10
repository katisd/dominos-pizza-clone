import React from "react";
import pages from "../../public/pizzaList.json";
import { CartCard } from "../Components/assets/CartComponent/CartCard";
import Footer from "../Components/assets/CartComponent/Footer";
import PlusMinusButton from "../Components/assets/CartComponent/PlusMinusButton";
import { useShoppingCart } from "../Components/context/CartContext";

const MyCart: React.FC = () => {
  const { decreaseItemQuantity, increaseItemQuantity, getListOfPizzas } =
    useShoppingCart();
  return (
    <div className=" flex flex-col space-y-5">
      {getListOfPizzas().map((item) => {
        return item.pizzas.map((pizza) => {
          if (pizza.quantity != 0) {
            return (
              <CartCard
                pic={pages.find((page) => page.id == item.id)?.pic || ""}
                key={item.id + pizza.DoughtAndSize}
                pizzaName={pages.find((page) => page.id == item.id)?.name || ""}
                pizzaDoughtAndSize={pizza.DoughtAndSize}
                sumPrice={pizza.price * pizza.quantity}
              >
                <PlusMinusButton
                  leftHandler={() => {
                    decreaseItemQuantity(item.id, pizza.DoughtAndSize);
                  }}
                  rightHandler={() => {
                    increaseItemQuantity(
                      item.id,
                      pizza.DoughtAndSize,
                      pizza.price
                    );
                  }}
                >
                  {pizza.quantity}
                </PlusMinusButton>
              </CartCard>
            );
          }
        });
      })}
      <Footer />
    </div>
  );
};

export default MyCart;
