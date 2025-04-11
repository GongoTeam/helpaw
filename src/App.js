import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateAd from "./pages/CreateAd";
import AnimalCard from "./pages/AnimalCard";
import Shelter from "./pages/Shelter";
import Search from "./pages/Search";
import RequestForm from "./pages/RequestForm";
import FoundAnimal from "./pages/FoundAnimal";
import News from "./pages/News";
import Donate from "./pages/Donate";
import Raffles from "./pages/Raffles";
import ShelterRatings from "./pages/ShelterRatings";
import PetStories from "./pages/PetStories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/animal/:id" element={<AnimalCard />} />
        <Route path="/shelter/:id" element={<Shelter />} />
        <Route path="/search" element={<Search />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/found" element={<FoundAnimal />} />
        <Route path="/news" element={<News />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/raffles" element={<Raffles />} />
        <Route path="/ratings" element={<ShelterRatings />} />
        <Route path="/stories" element={<PetStories />} />
      </Routes>
    </Router>
  );
}

export default App;
