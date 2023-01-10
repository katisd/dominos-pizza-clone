import React from "react";
import { useShoppingCart } from "../../context/CartContext";

const Footer = () => {
  const { getSumPrice } = useShoppingCart();
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Your Total is {getSumPrice()}</h2>
      </div>
    </div>
  );
};

export default Footer;
