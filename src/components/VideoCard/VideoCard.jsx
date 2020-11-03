import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import "./VideoCard.scss";
import { ThumbUpSharp } from "@material-ui/icons";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="video-card">
      <img
        className="video-card__image"
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        className="video-card__description"
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2 className="video-card__title">
        {movie.title || movie.original_name}
      </h2>
      <div className="video-card__info">
        <span className="video-card__likes">
          {movie.media_type && `${movie.media_type} •`}
          <ThumbUpSharp className="video-card__icon" />
          {movie.vote_count}
        </span>
        <span className="video-card__date">
          {movie.release_date || movie.first_air_date}
        </span>
      </div>
    </div>
  );
});

export default VideoCard;
