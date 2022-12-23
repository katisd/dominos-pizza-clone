import MenuList from "./MenuList";
import NavBar from "../Layouts/NavBar";
import React, { useState } from "react";
import Carousel from "./Carousel";
const Menu: React.FC = () => {
  const [info, setInfo] = useState(false);
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <div className="container mx-auto ">
        <NavBar />
        {!info && <MenuList setcurrent={setCurrent} setInfo={setInfo} />}
        {info && <Carousel setCurrent={setCurrent} current={current} />}
      </div>
    </div>
  );
};

export default Menu;
