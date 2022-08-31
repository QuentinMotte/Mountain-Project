import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Landing from "./pages/landing";
import Movies from "./pages/Movies";
import SearchPage from "./pages/SearchPage";
import SelectProfile from "./pages/SelectProfile";
import Series from "./pages/Series";
import SubPage from "./pages/SubPage";
import SubSuccess from "./pages/SubSuccess";
import FavPage from "./pages/FavPage";
import FaqPage from "./pages/FaqPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/FAQ" element={<FaqPage />} />
      <Route path="/Subscription" element={<SubPage />} />
      <Route path="/Subscription/success" element={<SubSuccess />} />
      <Route path="/Select-Profile" element={<SelectProfile />} />
      <Route path="/Home" element={<Homepage />} />
      <Route path="/Home/Movies" element={<Movies />} />
      <Route path="/Home/Series" element={<Series />} />
      <Route path="/Search" element={<SearchPage />} />
      <Route path="/Watchlist" element={<FavPage />} />
      <Route path="/History" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
