import type { NextPage } from "next";
import React from "react";
import Landing from "../Components/Landing";
import NavBar from "../Components/Layouts/NavBar";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto ">
      <NavBar />
      <Landing />
    </div>
  );
};

export default Home;
