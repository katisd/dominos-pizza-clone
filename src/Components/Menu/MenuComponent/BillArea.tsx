import React, { useEffect, useState } from "react";
import pizzas from "../../../../public/pizzaList.json";
import { useShoppingCart } from "../../context/CartContext";

type BillAreaProps = {
  pizzaId: number | null;
  size: string;
  ThinDough: string;
};

// BillArea component is used to show the name, describtion and price of the pizza selected by giving the pizzaId , size and ThinDough as props
const BillArea: React.FC<BillAreaProps> = ({ pizzaId, size, ThinDough }) => {
  const { increaseItemQuantity } = useShoppingCart();
  let add = 0;
  if (size === "Small") {
    add = 0;
  } else if (size === "Medium") {
    add = 1.5;
  } else if (size === "Large") {
    add = 3;
  }
  const price =
    (pizzas.find((pizza) => pizza.id === pizzaId)?.price || 0) + add;
  const [alert, setalert] = useState(false);
  const [pizza, setPizza] = useState(0);
  const [myTimeOut, setMyTimeOut] = useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (alert) {
      if (myTimeOut != null) {
        clearTimeout(myTimeOut);
      }
      setMyTimeOut(
        setTimeout(() => {
          setalert(false);
          setPizza(0);
        }, 1000)
      );
    }
  }, [pizza]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className=" w-full space-y-spaceIn py-3 md:basis-1/3">
      <div>
        {pizzas
          .filter((pizza) => pizza.id === pizzaId)
          .map((x) => (
            <div key={x.id}>{x.name}</div>
          ))}
      </div>
      <div className="flex flex-row  justify-between space-y-0">
        {/* describtion */}
        <ul className="list-inside list-disc">
          <li>{ThinDough}</li>
          <li>{size}</li>
        </ul>
        {/* price& add to cart */}
        <button
          onClick={() => {
            console.log(pizzaId, ThinDough, size, price);
            increaseItemQuantity(pizzaId || -1, ThinDough + size, price);
            setalert(true);
            setPizza(pizza + 1);
          }}
          className=" flex h-12 max-w-fit flex-row items-center justify-between overflow-clip rounded-full  border-2 border-base-content hover:border-primary hover:bg-primary"
        >
          {/* price */}
          <span className="  bg-base-100 p-5">{price.toFixed(2)} $</span>
          {/* cart icon */}
          <div className="h-full bg-transparent p-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </button>
      </div>
      {/* Toast */}
      {alert && (
        <div className="toast">
          <div className="alert alert-success">
            <div>
              <span>{pizza} pizza added</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillArea;
