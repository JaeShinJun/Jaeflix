import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import { Link, HashRouter as Router, Route } from "react-router-dom";
import ProductionCountries from "../../Components/ProductionCountries";
import ProductionCompanies from "../../Components/ProductionCompanies";
import RelatedVideos from "../../Components/RelatedVideos";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const backdropBlurAnim = keyframes`
    0% {
        opacity: 1;
    }
    70% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
        filter: blur(3px);
    }
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    animation-name: ${backdropBlurAnim};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    z-index: -1;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const appearAnim = keyframes`
    0% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
    animation-name: ${appearAnim};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 20px;
    animation-name: ${appearAnim};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 20px 0px;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0px 10px;
`;

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 70%;
    margin-bottom: 20px;
`;

const IMDBLink = styled.span`
    padding: 5px;
    background-color: #eec017;
    color: black;
    border-radius: 10px;
    font-weight: bold;
`;

const DisabledLink = styled.span`
    padding: 5px;
    background-color: gray;
    color: black;
    border-radius: 10px;
    font-weight: bold;
`;

const MoreInfo = styled.div``;

const Tabs = styled.nav`
    width: 50vw;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    margin-bottom: 30px;
`;

const Btn = styled.div`
    width: 100%;
    text-align: center;
`;

const DetailPresenter = ({ result, loading, error, isMovie, url }) =>
    loading ? (
        <>
            <Helmet>
                <title>Loading | Jaeflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>
                    {result.title ? result.title : result.name} | Jaeflix
                </title>
            </Helmet>
            <Backdrop
                bgImage={
                    result.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                        : require("../../assets/noPosterSmall.png")
                }
            ></Backdrop>
            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../assets/noPosterSmall.png")
                    }
                ></Cover>
                <Data>
                    <Title>{result.title ? result.title : result.name}</Title>
                    <ItemContainer>
                        <Item>
                            {result.release_date
                                ? result.release_date.substring(0, 4)
                                : result.first_air_date.substring(0, 4)}
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {result.runtime
                                ? result.runtime
                                : result.episode_run_time}
                            min
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {result.genres &&
                                result.genres.map((genre, index) =>
                                    index === result.genres.length - 1
                                        ? genre.name
                                        : `${genre.name} / `
                                )}
                        </Item>
                        <Divider>•</Divider>
                        {result.imdb_id ? (
                            <IMDBLink>
                                <a
                                    href={
                                        result.imdb_id &&
                                        `https://www.imdb.com/title/${result.imdb_id}/`
                                    }
                                >
                                    IMDB
                                </a>
                            </IMDBLink>
                        ) : (
                            <DisabledLink>IMDB</DisabledLink>
                        )}
                        <Divider>•</Divider>
                        <span role="img" aria-label="Rating">
                            ⭐{result.vote_average}
                        </span>
                    </ItemContainer>
                    <Overview>
                        {result.overview
                            ? result.overview
                            : "There is no overview for this Movie or Show."}
                    </Overview>
                    <MoreInfo>
                        <Tabs>
                            {isMovie ? (
                                <>
                                    <Link
                                        to={`/movie/${result.id}/videos`}
                                        replace
                                    >
                                        <Btn>Related Videos</Btn>
                                    </Link>
                                    <Link
                                        to={`/movie/${result.id}/production_companies`}
                                        replace
                                    >
                                        <Btn>Production Companies</Btn>
                                    </Link>
                                    <Link
                                        to={`/movie/${result.id}/production_countries`}
                                        replace
                                    >
                                        <Btn>Production Countries</Btn>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to={`/show/${result.id}/videos`}
                                        replace
                                    >
                                        <Btn>Related Videos</Btn>
                                    </Link>
                                    <Link
                                        to={`/show/${result.id}/production_companies`}
                                        replace
                                    >
                                        <Btn>Production Companies</Btn>
                                    </Link>
                                    <Link
                                        to={`/show/${result.id}/production_countries`}
                                        replace
                                    >
                                        <Btn>Production Countries</Btn>
                                    </Link>
                                </>
                            )}
                        </Tabs>
                        {isMovie ? (
                            <Router>
                                <Route
                                    path={`${url}/videos`}
                                    render={() =>
                                        loading ? (
                                            <Loader />
                                        ) : (
                                            <RelatedVideos
                                                videos={result.videos.results}
                                            />
                                        )
                                    }
                                />
                                <Route
                                    path={`${url}/production_companies`}
                                    render={() =>
                                        loading ? (
                                            <Loader />
                                        ) : (
                                            <ProductionCompanies
                                                production_companies={
                                                    result.production_companies
                                                }
                                            />
                                        )
                                    }
                                />
                                <Route
                                    path={`${url}/production_countries`}
                                    render={() =>
                                        loading ? (
                                            <Loader />
                                        ) : (
                                            <ProductionCountries
                                                production_countries={
                                                    result.production_countries
                                                }
                                            />
                                        )
                                    }
                                />
                            </Router>
                        ) : (
                            <Router></Router>
                        )}
                    </MoreInfo>
                </Data>
            </Content>
        </Container>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
