import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import SearchPage from "./pages/SearchPage";
import SelectProfile from "./pages/SelectProfile";
import Series from "./pages/Series";
import SubPage from "./pages/SubPage";
import SubSuccess from "./pages/SubSuccess";
import FavPage from "./pages/FavPage";
import FaqPage from "./pages/FaqPage";
import HistoryPage from "./pages/HistoryPage";
import Landing from "./pages/Landing";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";
import MoviePage from "./pages/MoviePage";
import PlayerPage from "./pages/PlayerPage";
import ConditionPage from "./pages/ConditionPage";
import CreateProfile from "./pages/CreateProfile";
import "./main.scss";
import SeriePage from "./pages/SeriePage";

function App() {
  // APPEL API HERE

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/FAQ" element={<FaqPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Conditions" element={<ConditionPage />} />
      <Route path="/Subscription" element={<SubPage />} />
      <Route path="/Subscription/success" element={<SubSuccess />} />
      <Route path="/Create-Profile" element={<CreateProfile />} />
      <Route path="/Select-Profile" element={<SelectProfile />} />
      <Route path="/Home" element={<Homepage />} />
      <Route path="/Home/Movies" element={<Movies />} />
      <Route path="/Home/Series" element={<Series />} />
      <Route path="/Search" element={<SearchPage />} />
      <Route path="/Watchlist" element={<FavPage />} />
      <Route path="/History" element={<HistoryPage />} />
      <Route path="/Settings" element={<SettingsPage />} />
      <Route path="/Movie/:id" element={<MoviePage />} />
      <Route path="/Serie/:id" element={<SeriePage />} />
      <Route path="/Player" element={<PlayerPage />} />
    </Routes>
  );
}

export default App;
