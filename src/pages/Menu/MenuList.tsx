import React from "react";
import Card from "./Card";
import data from "../../../public/pizzaList.json";
// type of onClick handler function

type MenuListProps = {
  setInfo: (data: boolean) => void;
  setcurrent: (data: number) => void;
};

const MenuList: React.FC<MenuListProps> = ({ setInfo, setcurrent }) => {
  return (
    <div className=" grid grid-cols-1 gap-10  px-5 pt-[80px]  md:grid-cols-2 lg:grid-cols-3">
      {data.map((x) => (
        <Card setInfo={setInfo} setcurrent={setcurrent} key={x.id} data={x} />
      ))}
    </div>
  );
};

export default MenuList;
