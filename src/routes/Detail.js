import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      description_intro
      language
      medium_cover_image
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.main`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.span`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background: url(${(props) => props.bg}) no-repeat center;
  background-size: cover;
  background-color: transparent;
`;

const SuggestionsSection = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 10px;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });

  return (
    <Container>
      <Column>
        <Title>
          {loading
            ? "Loading..."
            : `${data.movie.title} ${data.movie.isLiked ? "💖" : "😔"}`}
        </Title>
        {!loading && (
          <>
            <Subtitle>
              {data?.movie?.language.toUpperCase()} · {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
          </>
        )}
        <SuggestionsSection>
          {data?.suggestions?.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </SuggestionsSection>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  );
};

export default Detail;
