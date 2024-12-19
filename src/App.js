import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";


function App() {

  const movies = [
    {
      id: 1,
      title: "Inception",
      description: "A thief with the ability to enter people's dreams takes on the heist of a lifetime.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      poster: "inception.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A team of explorers travels through a wormhole in space to ensure humanity's survival.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      poster: "interstellar.jpg",
    },
  ];
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
