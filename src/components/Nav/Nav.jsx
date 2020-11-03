import React from "react";
import requests from "../../requests";
import "./Nav.scss";

function Nav({ setOption }) {
  return (
    <nav className="nav">
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchTrending)}
      >
        Trending
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchTopRated)}
      >
        Top Rated
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchActionMovies)}
      >
        Action
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchComedyMovies)}
      >
        Comedy
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchHorrorMovies)}
      >
        Horror
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchRomanceMovies)}
      >
        Romance
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchMystery)}
      >
        Mystery
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchSciFi)}
      >
        Sci-fi
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchWestern)}
      >
        Western
      </span>
      <span
        className="nav__item"
        onClick={() => setOption(requests.fetchAnimation)}
      >
        Animation
      </span>
      <span className="nav__item" onClick={() => setOption(requests.fetchTV)}>
        TV Movie
      </span>
    </nav>
  );
}

export default Nav;
