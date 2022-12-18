import React from "react";
import Card from "./Card";
import data from "../../public/pizzaList.json";
const Menu = () => {
  return (
    <div className=" grid grid-cols-1 gap-10  px-5 pt-[80px]  md:grid-cols-2 lg:grid-cols-3">
      {data.map((x) => (
        <Card key={x.id} size="sx" data={x} />
      ))}
    </div>
  );
};

export default Menu;
