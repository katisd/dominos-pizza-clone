import type { NextPage } from "next";
import React from "react";

import NavBar from "../Components/NavBar";
import HomePage from "./HomePage";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto ">
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Home;
