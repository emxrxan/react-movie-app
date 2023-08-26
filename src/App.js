import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Genre from "./Pages/Genre";
import Context from './Context';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {

  const [genreList, setGenreList] = useState([]);
  const [genre, setGenre] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const [detail, setDetail] = useState(null);

  return (
    <>
      <Context.Provider value={{genre, setGenre, genreList, setGenreList, pageNumber, setPageNumber, totalPageNumber, setTotalPageNumber, detail, setDetail}}>
        <Header />
        <Navigation />

        <Routes>
          <Route path="/react-movie-app" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path={`/Genre`} element={<Genre />} />
          <Route path="*" element={<h1>Page NotFound</h1>} />
        </Routes>

        <MovieDetails />
      </Context.Provider>
    </>
  );
}

export default App;
