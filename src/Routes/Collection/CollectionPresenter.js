import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Message from "../../Components/Message";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div``;

const CollectionPoster = styled.img`
    margin-bottom: 10px;
`;

const CollectionPresenter = ({
    collection,
    id,
    name,
    movies,
    error,
    loading,
}) => {
    return collection ? (
        <Container key={id}>
            <CollectionPoster
                src={
                    collection.backdrop_path
                        ? `https://image.tmdb.org/t/p/w300${collection.backdrop_path}`
                        : require("../../assets/noPosterSmall.png")
                }
            />
            <Section title={collection.name}>
                {movies.map((movie) => (
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.imageUrl}
                        title={movie.title}
                        rating={movie.rating}
                        year={movie.year && movie.year.substring(0, 4)}
                        isMovie={true}
                    ></Poster>
                ))}
            </Section>
        </Container>
    ) : (
        <Message color="red" text="Collection not found" />
    );
};

CollectionPresenter.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default CollectionPresenter;
