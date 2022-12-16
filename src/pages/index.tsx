import { NextPage } from "next";
import React from "react";
import NavBar from "../Components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <NavBar />
    </div>
  );
};

export default Home;
