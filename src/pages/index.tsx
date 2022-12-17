import type { NextPage } from "next";
import React from "react";
import Landing from "../Components/Landing";
import NavBar from "../Components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto  h-screen overflow-hidden bg-base-100 ">
      <NavBar />
      <Landing />
    </div>
  );
};

export default Home;
