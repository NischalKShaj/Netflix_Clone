import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  console.log("movie", movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
    </header>
  );
};

export default Banner;
