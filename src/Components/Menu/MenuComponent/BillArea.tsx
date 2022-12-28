import React from "react";
import pizzas from "../../../../public/pizzaList.json";

type BillAreaProps = {
  pizzaId: number | null;
  size: string;
  ThinDough: string;
};

// BillArea component is used to show the name, describtion and price of the pizza selected by giving the pizzaId , size and ThinDough as props
const BillArea: React.FC<BillAreaProps> = ({ pizzaId, size, ThinDough }) => {
  return (
    <div className="w-full space-y-spaceIn py-3 md:basis-1/3">
      {/* name */}
      <div>
        {pizzas
          .filter((pizza) => pizza.id === pizzaId)
          .map((x) => (
            <div key={x.id}>{x.name}</div>
          ))}
      </div>
      <div className="flex flex-col justify-between space-y-space md:flex-row md:space-y-0">
        {/* describtion */}
        <ul className="list-inside list-disc">
          <li>{ThinDough}</li>
          <li>{size}</li>
        </ul>
        {/* price& add to cart */}
        <button className=" flex h-12 w-28 flex-row items-center justify-between overflow-clip rounded-full  border-2 border-base-content hover:border-primary hover:bg-primary">
          {/* price */}
          <span className="  bg-base-100 p-5">
            {pizzas.find((pizza) => pizza.id === pizzaId)?.price}
          </span>
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
    </div>
  );
};

export default BillArea;
