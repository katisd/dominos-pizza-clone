import type { NextPage } from "next";
import MenuList from "./MenuList";
import NavBar from "../../Components/NavBar";
import { useState } from "react";
import Carousel from "./Carousel";
const Menu: NextPage = () => {
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
