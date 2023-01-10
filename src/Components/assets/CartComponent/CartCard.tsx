import React from "react";
import Image from "next/image";

type CartCardProps = {
  pizzaName: string;
  pizzaDoughtAndSize: string;
  sumPrice: number;
  children: React.ReactNode;
  pic: string;
};

export const CartCard: React.FC<CartCardProps> = ({
  children,
  pizzaDoughtAndSize,
  pizzaName,
  pic,
  sumPrice,
}) => {
  return (
    <div className="card card-side bg-base-100 pl-8 shadow-xl">
      <figure>
        <Image
          width={100}
          height={100}
          src={pic}
          alt={pizzaName + " pizza picture"}
        />
      </figure>
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="card-title">{pizzaName}</h2>
            <p>{pizzaDoughtAndSize}</p>
          </div>
          <h2 className="justify-end">Price: {sumPrice} $</h2>
        </div>
        <div className="card-actions justify-end">{children}</div>
      </div>
    </div>
  );
};
