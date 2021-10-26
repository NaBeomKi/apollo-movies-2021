import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, medium_cover_image, title }) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <img src={medium_cover_image} alt={title} />
      </Link>
    </div>
  );
};

export default Movie;
