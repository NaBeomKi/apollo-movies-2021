import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Movie = ({ id, medium_cover_image, title, isLiked }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, { variables: { id } });

  return (
    <div>
      <Link to={`/${id}`}>
        <Img src={medium_cover_image} alt={title} />
      </Link>
      <button onClick={likeMovie}>{isLiked ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default Movie;
