import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

const Movie = ({ id, medium_cover_image, title }) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <Img src={medium_cover_image} alt={title} />
      </Link>
    </div>
  );
};

export default Movie;
