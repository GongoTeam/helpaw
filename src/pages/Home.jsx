import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import FindFriend from "../components/FindFriend";
import ContestComponent from "../components/ContestComponent";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <HowItWorks />
      <FindFriend />
      <ContestComponent />
    </div>
  );
}
