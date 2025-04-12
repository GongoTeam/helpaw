import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import FindFriend from "../components/FindFriend";
import ContestComponent from "../components/ContestComponent";
import Stories from "../components/Stories";
import HappyStory from "../components/HappyStory";
import DonationForm from "../components/DonationForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <HowItWorks />
      <FindFriend />
      <ContestComponent />
      <Stories />
      <HappyStory />
      <DonationForm />
      <Footer />
    </div>
  );
}
