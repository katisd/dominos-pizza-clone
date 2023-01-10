import type { NextPage } from "next";
import React from "react";

import NavBar from "../Components/Layouts/NavBar";
import MyCart from "./MyCart";
const Cart: NextPage = () => {
  return (
    <div className="container mx-auto mt-16">
      <NavBar />
      <MyCart />
    </div>
  );
};

export default Cart;
