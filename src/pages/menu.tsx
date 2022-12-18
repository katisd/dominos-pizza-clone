import type { NextPage } from "next";
import MenuList from "../Components/MenuList";
import NavBar from "../Components/NavBar";

const Menu: NextPage = () => {
  return (
    <div className="container mx-auto ">
      <NavBar />
      <MenuList />
    </div>
  );
};

export default Menu;
