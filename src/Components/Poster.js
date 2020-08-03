import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    height: 180px;
    background-image: url(${(props) => props.bgUrl});
    background-size: ${(props) => props.bgImgSize};
    background-position: center center;
    transition: opacity 0.3s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 10px;
    left: 5px;
    opacity: 0;
    transition: opacity 0.3s linear;
`;

const Title = styled.span`
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 3px;
    &:hover {
        overflow: visible;
        white-space: normal;
    }
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
    &:hover + ${Title} {
        overflow: visible;
        white-space: normal;
    }
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image
                    bgUrl={
                        imageUrl
                            ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
                            : require("../assets/noPosterSmall.png")
                    }
                    bgImgSize={imageUrl ? "cover" : "contain"}
                ></Image>
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐
                    </span>
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
};

export default Poster;
