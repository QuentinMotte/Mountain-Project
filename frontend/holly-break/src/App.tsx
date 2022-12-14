import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import SearchPage from "./pages/SearchPage";
import SelectProfile from "./pages/SelectProfile";
import Series from "./pages/Series";
import SubPage from "./pages/SubPage";
import SubSuccess from "./pages/SubSuccess";
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
import AdminPage from "./pages/AdminPage";
import SeriePage from "./pages/SeriePage";
import PlayerPageSeries from "./pages/PlayerPageSeries";
import MoviesGenrePage from "./pages/MoviesGenrePage";
import SeriesGenrePage from "./pages/SeriesGenrePage";
import UserPageAdmin from "./pages/UserPageAdmin";
import SuccessProfile from "./pages/SuccessProfile";
import "./main.scss";
import ActorPage from "./pages/ActorPage";
import PopularMovies from "./pages/PopularMovies";
import WatchListPage from "./pages/WatchListPage";
import ForumHomePage from "./pages/ForumHomePage";
import CreateTopicPage from "./pages/CreateTopicPage";
//import MoreAnswers from "./component/MoreAnswers";

function App() {
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin") === "true";
  const profile = localStorage.getItem("profile");

  return (
    <Routes>
      {!token && (
        <>
          <Route path="*" element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/FAQ" element={<FaqPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Conditions" element={<ConditionPage />} />
          <Route path="/Subscription" element={<SubPage />} />
          <Route path="/Subscription/success" element={<SubSuccess />} />
        </>
      )}
      {token && !profile && (
        <>
          <Route path="/" element={<Landing />} />
          <Route path="/FAQ" element={<FaqPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Conditions" element={<ConditionPage />} />
          <Route path="/Create-Profile" element={<CreateProfile />} />
          <Route path="/SuccessProfile" element={<SuccessProfile />} />
          <Route path="/Select-Profile" element={<SelectProfile />} />
        </>
      )}
      {token && admin && profile && (
        <>
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/User/:id" element={<UserPageAdmin />} />
          <Route path="/" element={<Landing />} />
          <Route path="/FAQ" element={<FaqPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Conditions" element={<ConditionPage />} />
          <Route path="/Create-Profile" element={<CreateProfile />} />
          <Route path="/SuccessProfile" element={<SuccessProfile />} />
          <Route path="/Select-Profile" element={<SelectProfile />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Home/Movies" element={<Movies />} />
          <Route path="/Home/Series" element={<Series />} />
          <Route path="/Search/:id" element={<SearchPage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Watchlist" element={<WatchListPage />} />
          <Route path="/History" element={<HistoryPage />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="/Movie/:id" element={<MoviePage />} />
          <Route path="/Movie/Genre/:id" element={<MoviesGenrePage />} />
          <Route path="/Popular/:id" element={<PopularMovies />} />
          <Route path="/tv/:id" element={<SeriePage />} />
          <Route path="/Serie/Genre/:id" element={<SeriesGenrePage />} />
          <Route path="/Player/Movie/:id" element={<PlayerPage />} />
          <Route path="/Player/Serie/:id" element={<PlayerPageSeries />} />
          <Route path="/Serie/:id" element={<SeriePage />} />
          <Route path="/Actor/:id" element={<ActorPage />} />
          <Route path="/Player/Movie/:id" element={<PlayerPage />} />
          <Route path="/Player/Serie/:id" element={<Landing />} />
        </>
      )}
      {token && profile && (
        <>
          <Route path="/" element={<Landing />} />
          <Route path="/FAQ" element={<FaqPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Conditions" element={<ConditionPage />} />
          <Route path="/Create-Profile" element={<CreateProfile />} />
          <Route path="/SuccessProfile" element={<SuccessProfile />} />
          <Route path="/Select-Profile" element={<SelectProfile />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Home/Movies" element={<Movies />} />
          <Route path="/Home/Series" element={<Series />} />
          <Route path="/Search/:id" element={<SearchPage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Watchlist" element={<WatchListPage />} />
          <Route path="/History" element={<HistoryPage />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="/Movie/:id" element={<MoviePage />} />
          <Route path="/Movie/Genre/:id" element={<MoviesGenrePage />} />
          <Route path="/tv/:id" element={<SeriePage />} />
          <Route path="/Serie/Genre/:id" element={<SeriesGenrePage />} />
          <Route path="/Player/Movie/:id" element={<PlayerPage />} />
          <Route path="/Player/Serie/:id" element={<PlayerPageSeries />} />
          <Route path="/Serie/:id" element={<SeriePage />} />
          <Route path="/Player/Movie/:id" element={<PlayerPage />} />
          <Route path="/Player/Serie/:id" element={<Landing />} />
          <Route path="/Forum/All" element={<ForumHomePage />} />
          <Route path="/Forum/Create" element={<CreateTopicPage />} />
          {/* <Route path="/Forum/Onetopic" element={<MoreAnswers />} /> */}
        </>
      )}
      {<Route path="*" element={<Landing />} />}
    </Routes>
  );
}

export default App;
