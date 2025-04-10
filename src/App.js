import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateListing from "./pages/CreateListing";
import AnimalCard from "./pages/AnimalCard";
import Search from "./pages/Search";
import Shelter from "./pages/Shelter";
import RequestForm from "./pages/RequestForm";
import FoundAnimal from "./pages/FoundAnimal";
import News from "./pages/News";
import Donate from "./pages/Donate";
import Raffles from "./pages/Raffles";
import ShelterRatings from "./pages/ShelterRatings";
import PetStories from "./pages/PetStories";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/animal/:id" element={<AnimalCard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shelter/:id" element={<Shelter />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/found" element={<FoundAnimal />} />
        <Route path="/news" element={<News />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/raffles" element={<Raffles />} />
        <Route path="/ratings" element={<ShelterRatings />} />
        <Route path="/stories" element={<PetStories />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
