import MenuList from "./MenuList";
import NavBar from "../Layouts/NavBar";
import React, { useState } from "react";
import Carousel from "./Carousel";
import { OrderProvider } from "./MenuComponent/OrderContex";
const Menu: React.FC = () => {
  const [info, setInfo] = useState(false);
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <OrderProvider>
        <div className="container mx-auto ">
          <NavBar />
          {!info && <MenuList setcurrent={setCurrent} setInfo={setInfo} />}
          {info && <Carousel setCurrent={setCurrent} current={current} />}
        </div>
      </OrderProvider>
    </div>
  );
};

export default Menu;
