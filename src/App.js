import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AnimalCard from "./components/AnimalCard";
import Shelter from "./pages/Shelter";
import Search from "./pages/Search";
import RequestForm from "./components/RequestForm";
import News from "./pages/News";
import Donate from "./pages/Donate";
import Raffles from "./pages/Raffles";
import ShelterRatings from "./pages/ShelterRatings";
import PetStories from "./pages/PetStories";
import AuthPage from "./pages/AuthPage";
import Volunteers from "./pages/Volunteers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shelters" element={<ShelterRatings />} />
        <Route path="/shelter/:id" element={<Shelter />} />
        <Route path="/search" element={<Search />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/news" element={<News />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/animal" element={<AnimalCard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/raffles" element={<Raffles />} />
        <Route path="/stories" element={<PetStories />} />
      </Routes>
    </Router>
  );
}

export default App;
