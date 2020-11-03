import React, { useState, useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Results.scss";
import axios from "../../axios";
import FlipMove from "react-flip-move";

function Results({ option }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(option);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [option]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
