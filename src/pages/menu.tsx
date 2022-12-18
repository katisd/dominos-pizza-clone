import type { NextPage } from "next";
import MenuList from "../Components/MenuList";
import NavBar from "../Components/Layouts/NavBar";
// import AboutPizza from "../Components/AboutPizza";
// const testProps = {
//   id: 1,
//   name: "Pepperoni Passion",
//   pic: "https://www.dominos.at/gallery/fmobile/2346ipar.png",
//   type: "favorite",
//   toppings: ["Tomatensauce", "Mozzarella", "Domino's Pepperoni Salami"],
//   new: false,
//   vegetarian: false,
//   spicy: true,
// };
const Menu: NextPage = () => {
  return (
    <div className="container mx-auto ">
      <NavBar />
      <MenuList />
      {/* <AboutPizza {...testProps} /> */}
    </div>
  );
};

export default Menu;
