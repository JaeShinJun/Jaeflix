import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
    gap: 10px;
`;

const SeasonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SeasonPosterImg = styled.img`
    width: 100%;
    height: auto;
    align-self: center;
    margin-bottom: 10px;
`;

const SeasonName = styled.span`
    font-size: 14px;
`;

const Seasons = ({ seasons }) => (
    <Container>
        {seasons &&
            seasons.length > 0 &&
            seasons.map((season) => (
                <SeasonContainer key={season.id}>
                    <SeasonPosterImg
                        alt={season.name}
                        src={
                            season.poster_path
                                ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                                : require("../assets/noPosterSmall.png")
                        }
                    />
                    <SeasonName>{season.name}</SeasonName>
                </SeasonContainer>
            ))}
    </Container>
);

Seasons.propTypes = {
    seasons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            poster_path: PropTypes.string,
        })
    ),
};

export default Seasons;
